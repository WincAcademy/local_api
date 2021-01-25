const JSDB = require("@small-tech/jsdb");

const db = JSDB.open("db");

// To delete the database: delete the file.
if (!db.todo) db.todo = [];

// TODO: check if adding worked
const add = item => db.todo.push(item);

const _findItem = id => {
    const query = db.todo.where("_id").is(id);
    if (query.length === 0 || query[0]._deleted)
        return { ok: false, msg: "Unknown id" };
    return { ok: true, msg: query[0] };
};

const get = id => {
    const { ok, msg } = _findItem(id);
    if (ok) return { ok: true, msg };
    return { ok: false, msg: "Unknown id" };
};

const getAll = () => ({ ok: true, msg: db.todo.filter(i => !i._deleted) });

const update = (id, item) => {
    const { ok, msg } = _findItem(id);
    if (!ok) return { ok: false, msg: "Unknown id" };
    Object.getOwnPropertyNames(item).forEach(prop => {
        msg[prop] = item[prop];
    });
    return { ok: true, msg };
};

const remove = id => {
    const { ok, msg } = _findItem(id);
    if (!ok) return { ok: false, msg: "Unknown id" };

    // True deletion is not possible?
    // https://github.com/small-tech/jsdb/issues/7
    msg._deleted = true;
    return { ok: true, msg: "Item deleted" };
};

module.exports = { add, get, getAll, update, remove };