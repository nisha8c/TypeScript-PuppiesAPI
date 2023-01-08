# &lt;/salt&gt;

# Server runs on port 5000

## Server
in root directory: 
npm i
npm run serve
(Server is on port 5000)

## client
cd frontend
npm start
(Client is on port 3000)

## GUI specs
1. Go to top button
2. carousel on home page

## libs used
react-hook-form
react-social-icons
react-responsive-carousel

## Tech stack
1. React JS
2. Typescript
3. Node JS
4. Express
5. REST API

## External API
https://dog.ceo/api/breeds/image/random

## Database
Array: puppies

## User can:
1. View puppies
2. add new puppy
3. edit existing puppy
4. delete existing puppy
5. If scrolled down a lot, can go to top easily.

## Components
1. About
2. AddPuppy
3. EditPuppy
4. Footer
5. Header
6. Home
7. Puppies



## Puppies API with Typescript

In this exercise you will create a puppy API with Express and Typescript. The goal is to get familiar with Typescript and how to use it in Node.js. Again, if you are in the DNFS or JFS stack, switch this API to your respective language and skip TypeScript. (then, just delete the rest of the files and just keep this README!)

### The task

Your task is to create a RESTful API with the following endpoints:

- GET: `api/puppies`. This should return a list of all puppies in JSON-format.
- GET: `api/puppies/:id`. This should return one puppy in JSON-format.
- POST: `api/puppies`. This should create and return the newly added puppy.
- PUT: `api/puppies/:id`. This should put one puppy down (jk, just update the specific puppy).
- DELETE: `api/puppies/:id`. This should actually put one puppy down aka delete it.

The database for this task can just be a local array or a real database, it is up to you.

Each `puppy` should have the following attributes: 
    - id
    - breed
    - name
    - birth date

### Testing

We have supplied a starter tests to get going, please add more as TDD rules!

### TypeScript

Remember that there are built in types in Express that you should use, e.g. in app.ts you can see that `Request`, `Response` and `Application` are types supplied from Express.

Play around with implementing e.g. Class, interface, Enums, generics for things not supplied from Express and other frameworks/libraries.
