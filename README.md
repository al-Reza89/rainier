| First Word | Meaning                                              |
| ---------- | ---------------------------------------------------- |
| Add        | Create a capability e.g. feature, test, dependency.  |
| Cut        | Remove a capability e.g. feature, test, dependency.  |
| Fix        | Fix an issue e.g. bug, typo, accident, misstatement. |
| Bump       | Increase the version of something e.g. dependency.   |
| Make       | Change the build process, or tooling, or infra.      |
| Start      | Begin doing something; e.g. create a feature flag.   |
| Stop       | End doing something; e.g. remove a feature flag.     |
| Refactor   | A code change that MUST be just a refactoring.       |
| Reformat   | Refactor of formatting, e.g. omit whitespace.        |
| Optimize   | Refactor of performance, e.g. speed up code.         |
| Document   | Refactor of documentation, e.g. help files.          |

---

# API Documentation

## Login

- **HTTP Request:** GET
- **API Endpoint:** `/api/users/login`
- **JSON Request Object:**
  ```json
  {
    "email": "new@gmail.com",
    "password": "123456"
  }
  ```

## Signin

- **HTTP Request:** POST
- **API Endpoint:** `/api/users/signin`
- **JSON Request Object:**
  ```json
  {
    "email": "new@gmail.com",
    "password": "123456"
  }
  ```

## Create A Course

- **HTTP Request:** POST
- **API Endpoint:** `/api/courses/create-course`
- **JSON Request Object:**
  ```json
  {
    "name": "Introduction to Web Development",
    "description": "A Comprehensive Introduction to Web Development.",
    "price": 5000,
    "duration": "8 weeks",
    "level": "",
    "topics": [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Node.js",
      "Express.js",
      "RESTful APIs"
    ],
    "schedule": {
      "startDate": "2023-02-15",
      "endDate": "2023-04-10",
      "classDays": ["Monday", "Wednesday", "Friday"],
      "classTime": "18:00 - 20:00"
    }
  }
  ```

## List Of All Courses

- **HTTP Request:** GET
- **API Endpoint:** `/api/courses`

## Specific Course

- **HTTP Request:** GET
- **API Endpoint:** `/api/courses/${id}`

## Update Course

- **HTTP Request:** PUT
- **API Endpoint:** `/api/courses/${id}`
- **JSON Request Object:**
  ```json
  {
    "name": "Introduction to Web Development",
    "description": "A Comprehensive Introduction to Web Development.",
    "price": 5000,
    "duration": "8 weeks",
    "level": "",
    "topics": [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Node.js",
      "Express.js",
      "RESTful APIs"
    ],
    "schedule": {
      "startDate": "2023-02-15",
      "endDate": "2023-04-10",
      "classDays": ["Monday", "Wednesday", "Friday"],
      "classTime": "18:00 - 20:00"
    }
  }
  ```

## Delete A Course

- **HTTP Request:** DELETE
- **API Endpoint:** `/api/courses/${id}`
