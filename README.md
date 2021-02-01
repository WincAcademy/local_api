# Local REST API

Use this to have a locally running REST API that accepts JSON.

This was made as a simple replacement for JSONBox.io.

## Installation

- make sure you're using node >= 14
- git clone this repository
- `cd local_api`
- `npm install`
- `node app.js`

The app will start on port 3000. Make sure the port is part of the URL you send
requests to. For example: a GET request to
`http://localhost:3000/f5408a45-b4d0-4aee-8530-c2250481b131`

## Sending HTTP requests to this API

You can send 4 kinds of HTTP requests to this app.

All but the `delete` requests need to have the content-type header set to
`application/json`.

### POST

To create an item send a POST request with a JSON object in the body to `/`. The
return value will be the newly created object and HTTP status 201.

```json
{
  "name": "Ernie",
  "color": "orange",
  "mood": "happy",
  "_id": "f5408a45-b4d0-4aee-8530-c2250481b131",
  "_createdOn": "2021-01-25T14:53:49.322Z"
}
```

Each item gets an auto generated id and a `_createdOn` attribute.

### GET

To read all items send a GET request to `/`. The return value will be the list
of all created objects and HTTP status 200.

```json
[
  {
    "name": "Ernie",
    "color": "orange",
    "mood": "happy",
    "_id": "f8636d68-e656-4c2e-ac99-a625f35a25f9",
    "_createdOn": "2021-01-25T14:59:50.834Z"
  },
  {
    "name": "Bert",
    "color": "yellow",
    "mood": "grumpy",
    "_id": "b0092da7-363f-4c20-859b-b6d4c008dcb3",
    "_createdOn": "2021-01-25T15:00:02.403Z"
  }
]
```

To read a single item send a GET request to `/{id_of_the_item}`. The return
value will be the item, if it exists, and HTTP status 200.

```json
{
  "name": "Bert",
  "color": "yellow",
  "mood": "grumpy",
  "_id": "b0092da7-363f-4c20-859b-b6d4c008dcb3",
  "_createdOn": "2021-01-25T15:00:02.403Z"
}
```

### PUT

To update an item send a PUT request with a body to `/{id_of_the_item}`. The
body should contain the updated item. The return value will be the updated item
and HTTP status 200.

```json
{
  "name": "Groover",
  "color": "green",
  "mood": "hungry",
  "_id": "b0092da7-363f-4c20-859b-b6d4c008dcb3",
  "_createdOn": "2021-01-25T15:00:02.403Z",
  "_updatedOn": "2021-01-25T15:04:04.194Z"
}
```

An updated item gets an `_updatedOn` attribute.

### DELETE

To delete an item send a DELETE request to `/{id_of_the_item}`. The return value
will be HTTP 204.

## Deleting the database

If you want to start over:

- stop the app
- delete the files in `db/`
- restart the app
