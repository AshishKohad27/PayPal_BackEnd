# _PayPal_

Project Links
<br/>
Frontend:- https://pay-pal-front-end.vercel.app/login
<br/>
Backend :- https://chocolate-abalone-gear.cyclic.app/

## Build with

<table  align=center>
  <tr>
 <td align=center> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"  height=100   width=150 ></td><td align=center> <img src="https://play-lh.googleusercontent.com/tYFJKlcOj4mUoS36v7w50TRvZ4HErZVkjo2Nvc4Ba_XE5xBr0Rphj4_BW-wMJ-JsDfEC" height=100   ></td>
  </tr>

</table>

<hr/>

## Data Stored in MongoDB

<table  align=center>
  <tr>
 <td align=center> <img src="https://www.edc4it.com/images/blog/mongodb.png"  height=100   width=150 ></td>
  </tr>
</table>

</br>

## Steps of starting Backend

1. Run `npm run start` on terminal
2. You will get `URL` like this `http://localhost:7878` server running on port number `7878`

## Methods

## 1. Auth

# 1.1 Signup

### Signup :- `http://localhost:7878/auth/signup`

## Email and password saved in the mongodb, password stored in hashed formate.

```json
{
  "email": "demo@gmail.com",
  "password": "demo"
}
```

```javascript
Method:"POST"
Payload: {
  "email": "demo@gmail.com",
  "password": "demo"
}
http://localhost:7878/auth/signup
```

# 1.2 Login

### Login :- `http://localhost:7878/auth/login`

## After giving right credential system provided two different token

1. Access Token: which has expired time round 4 days
2. Refresh Token: which has expired time round 7 days, by this token we can refresh or create new access token for our app.

```json
{
  "email": "demo@gmail.com",
  "password": "demo"
}
```

```javascript
Method:"POST"
Payload: {
  "email": "demo@gmail.com",
  "password": "demo"
}
http://localhost:7878/auth/login
```

## 1.3 Verify

### Login :- `http://localhost:7878/auth/verify`

## By this url user can get details from token

```javascript
//accept body as token
const { token } = req.body;

// then with the help of jwt.verify getting all details under jwt token
const verification = jwt.verify(token, "XXXXXXXX_XX");
```

```javascript
Method:"POST"
Payload: {
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFkYjRlNTAzNGI0ZjUwMWQ0MTJhMjIiLCJlbWFpbCI6ImFzaGlzaGtvaGFkQGdtYWlsLmNvbSIsIm5hbWUiOiJBc2hpc2ggS29oYWQiLCJpYXQiOjE2Nzk2Njg2NzAsImV4cCI6MTY4MDAxNDI3MH0.zkKdB91j-dSVlHAnUpVQhe7OqSRh95KYHTZLehecMPU"
}
http://localhost:7878/auth/verify
```

## 2. Sprints

## 2.1 Get Sprint

### - By this url user can get all Sprint

```javascript
Method:"GET"
http://localhost:7878/sprint
```

## 2.2 Create Sprint

### - By this url user can Create Data

```javascript
Method:"POST"
Payload: {
    "endDate": "2023-03-26",
    "name": "Sprint 1",
    "startDate": "2023-03-20"
}
http://localhost:7878/sprint
```

## 2.3 Delete Sprint

### - By this url user can Delete Data

```javascript
Method:"DELETE"
http://localhost:7878/sprint/:SprintId
```

## 3. Tasks

## 3.1 Get Tasks

### - By this url user can get all Tasks

```javascript
Method:"GET"
http://localhost:7878/task
```

## 3.2 Create Task

### - By this url user can Create Data

```javascript
Method: "POST"
Payload: {
    "assignedBy": "xxxxxx",
    "assignedTo": "xxxxxx",
    "description": "Bug Report",
    "status": "done",
    "title": "bug Reort",
    "sprintId": "641df509ccd57033083bac81"
}

http://localhost:7878/task/
```

## 3.3 Edit Task

### - By this url user can Edit Data

```javascript
Method: "PATCH"
Payload:{
    "assignedBy": "xxxxxx",
    "assignedTo": "xxxxxx",
    "description": "Bug Report",
    "status": "done",
    "title": "bug Reort",
    "sprintId": "641df509ccd57033083bac81"
}
http://localhost:7878/task/:taskId
```

## 3.4 Delete Task

### - By this url user can Delete Data

```javascript
Method:"DELETE
http://localhost:7878/sprint/:taskId
```

## 3.5 Filter Task

### - By this url user can we can get 3 diffrenet arr base on particular sprint

```javascript
Method: "GET"
Parameters:"?sprintId="
http://localhost:7878/sprint/filter?sprintId=""
```

## 3.6 Individual Task

### - By this url user can get individual Task

```javascript
Method: "GET"
Payload:{
    "userName": "xxxx xxxx"
}
http://localhost:7878/sprint/individual
```
