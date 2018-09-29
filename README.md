# api-express
RESTfull API with [Express Framework](http://expressjs.com/). This is an API for **To Do** task list.
  - [Installation](#installation)
  - [API Documentation](#api-documentation)

# Installation
1. Check list programs need to install
    - [Node.js](https://nodejs.org/en/)
    - [MongoDB](https://www.mongodb.com/download-center?from=dcv2#community)
2. Setup server
    - Clone the repo `git clone git@github.com:skborey/api-express.git`
    - Run command `npm install` to install necessary libraries (the libraries have defined in package.json already including **express**, **body-parser** and **mongodb**)
3. Start server
    - Start MongoDB
    - Start server with command `node server.js`

# API Documentation
## Introduction
**To Do API** provided the action to add new task, delete a task, get all tasks in the list, edit the existing task. 

| API Call                                | Method        | Description                                                      |
| ----------------------------------- |:-------------:| ----------------------------------------------------------------:|
| `http://localhost:3000/tasks`       | `GET`         | [Get all tasks from the list](#get-all-tasks-from-the-list)      |
| `http://localhost:3000/tasks/{id}`  | `GET`         | [Get a task by id](#get-a-task-by-id)                            |
| `http://localhost:3000/tasks/{id}`  | `PUT`         | [Edit information of the existing task](#edit-information-of-the-existing-task)       |
| `http://localhost:3000/tasks/{id}`  | `POST`        | [Add a new task](#add-a-new-task)                                |
| `http://localhost:3000/tasks/{id}`  | `DELETE`      | [Delete a task from the list](#delete-a-task-from-the-list)                 |

## Get all tasks from the list

> Description

Get all tasks in the list.

>API Call

Method : `GET`

URL : `http://localhost:3000/tasks`

> API Response

Response is the array of task objects or empty array if there is no any task.

> Example in JavaScript

  _Request_
  ```
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
         }
    };
    xhttp.open("GET", "http://localhost:3000/tasks", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send();
  ```
  _Response_
  ```
    [
        {
            "_id": "5baf37d5d3048a3970f7fbf7",
            "subject": "Task 1",
            "content": "Start on 20190101",
            "is_done": "0"
        },
        {
            "_id": "5baf39b0d3048a3970f7fbf8",
            "subject": "Task 2",
            "content": "Start on 20190102",
            "is_done": "0"
        }
    ]
  ```
## Get a task by id

> Description

Get a task in the list by task id.

> API Call

Method : `GET`

URL : `http://localhost:3000/tasks/{id}`

> API Response

Response is the array of task objects or empty array if the task does not exist.

> Example in JavaScript

  _Request_
  ```
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
         }
    };
    xhttp.open("GET", "http://localhost:3000/tasks/5baf37d5d3048a3970f7fbf7", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send();
  ```
  _Response_
  ```
    [
        {
            "_id": "5baf37d5d3048a3970f7fbf7",
            "subject": "Task 1",
            "content": "Start on 20190101",
            "is_done": "0"
        }
    ]
  ```
## Edit information of the existing task

> Description

Edit the information for the existing task by task id

> API Call

Method : `PUT`

URL : `http://localhost:3000/tasks/{id}`

> API Response

Response is the objects of changed information.

> Example in JavaScript

  _Request_
  ```
    var json = JSON.stringify({content: "Change content"});
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
         }
    };
    xhttp.open("PUT", "http://localhost:3000/tasks/5baf37d5d3048a3970f7fbf7", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send(json);
  ```
  _Response_
  ```
    {"content":"Change content"}
  ```
## Add a new task

> Description

Create a new task to the list.

> API Call

Method : `POST`

URL : `http://localhost:3000/tasks`

> API Response

Response is the objects of new task with task's information.

> Example in JavaScript

  _Request_
  ```
    var json = JSON.stringify({
        "subject": "Task 3",
        "content": "Start on 20190103",
        "is_done": 0
    });
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 201) {
            console.log(this.responseText);
         }
    };
    xhttp.open("POST", "http://localhost:3000/tasks", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send(json);
  ```
  _Response_
  ```
    {
        "subject": "Task 3",
        "content": "Start on 20190103",
        "is_done": "0"
    }
  ```
## Delete a task from the list

> Description

Delete the exsiting task from the list by task id.

> API Call

Method : `DELETE`

URL : `http://localhost:3000/tasks/{id}`

> API Response

Response is a message of deleting action.

> Example in JavaScript

  _Request_
  ```
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
         }
    };
    xhttp.open("DELETE", "http://localhost:3000/tasks/5baf37d5d3048a3970f7fbf7", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send();
  ```
  _Response_
  ```
    {"message":"Successfully deleted"}
  ```
