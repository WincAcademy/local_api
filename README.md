# Local REST API

A simple Node.js application that exposes a locally running REST API using
[jsdb](https://codeberg.org/small-tech/jsdb.git).

This application can be used as a minimal stand in for the backend of a website.

## Pre-installation checks

Make sure you're using Node.js >= 14. You can check this by running `node -v` in
your terminal. If you need to update Node.js use the same process you used to
install it in the first place.

## Installation

Location: you should **not** change any code of this application, you can just
start it and use it. This also means you should **not** add it to your version
control (git).

Installation steps:

- Download the repository with the "Code" and "Download ZIP" buttons.
- Extract (unzip) the downloaded zip file into your preferred location.
- In your terminal navigate inside the directory of this application and run
  the following commands.
- `npm install`
- `npm start`

The app should now start on port 3000.

You can now send HTTP requests to this application. Make sure the port is part
of the URL you send requests to. For example: a GET request to
`http://localhost:3000/`

## Sending HTTP requests to this application

You can send 4 kinds of HTTP requests to this app:

1. POST
2. GET
3. PUT
4. DELETE

Almost every request you send to the app needs to have a specific header: the
`Content-type` header needs to have the value of `application-json`. The single
exception is the `DELETE` request.

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
