## Introduction

In this challenge you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the article data array, update data, and delete data.

## Project Setup
[x] Run npm install to install your dependencies.
[x]  Run npm start to run your frontend and backend code automatically.
[x]  Note your backend code will run automatically when your run npm start. There is no need to seperately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.

## Project Instructions
In this project, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.** You will implement basic security using **token authentication** and build private routes within the applcation.
 
## Project Requirements

**See reference materials at the bottom of the this document for API Reference Details.**

### Basic Routing
> *Build the needed utilities to restrict access to private routes.*
* [x] Build a `Route` component that renders rendering `Login.js` to the path `/`.
* [x] Build a `Route` component that renders rendering `Login.js` to the path `/login`.
* [x] Build a `Route` component that renders rendering `View.js` to the path `/view`.
* [x] Build a `Route` component that renders rendering `Logout.js` to the path `/logout`.

### Login Authentication
> *Build a login form to authenticate your users along with all the components and utilities needed to support authentication.*

* [x] In `Login.js`, build all UI and state functionality needed to capture a username and password. On a successful login, redirect user to the `View.js` component.
* [x] **Make sure that the input for your username and password includes the id="username" and id="password" attributes. Codegrade autotests will fail without them.**
* [x] **Make sure that the submit button to your login form includes the id="submit" attribute.  Codegrade autotests will fail without them.**
* [x] In `Login.js`, add a p tag that will display an error if one occurs. Add in all state functionality needed to support error display.
* [x] **Make sure your error p tag has an id="error" attribute attached. Codegrade autotests will fail without them.**
* [x] Construct an http request that retrieves an auth token from the server when the username `Danny` and the password `Pak` is passed into the request. Complete successful login auth flow and redirect to `View.js.`
* [x] Display an appropriate error message when login is not successful.

### Route Authentication
* [x] Build a `PrivateRoute` component within the components folder.
* [x] Use the `PrivateRoute` component to build a route rendering `View.js` to the path `/view`.
* [x] Use the `PrivateRoute` component to build a route rendering `Logout.js` to the path `/logout`.

### Request Authentication
> *Complete the requests needed to execute all CRUD functions.*
* [x] Build a `axiosWithAuth` module within the utils folder to create an instance of axios with the authentication header.
* [x] Complete the `services/articleService.js` module. It should use make an authenticated call to retrieve and return all articles from the server.

* [x] In `View.js`, when the component mounts, use `articleService` to make an http request and add all articles to state.

* [x] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

* [x] `editId` is passed into the `EditForm` component. In `EditForm.js`, make a http request on mount to get the article with the id `editId`. Save the result in state.

* [x] In `View.js`, complete `handleEdit` so that a http request is made that updates the passed in article. Set the editing state to false when the request is complete. After successfully deleting the article on the api, update local state to reflect these changes.


### Logout Authentication
> *Add in the http requests needed to logout of the application.*

* [x] In `Logout.js`, execute a http request to logout on mount. When the request is complete, the user's security token should be removed and the browser should redirect to the login page.

### Advanced Testing
> *Add the following tests within Article.test.js.*
* [x] Build a test that shows the `Article` component, given the correct props, can render without errors.
* [x] Build a test that shows that when a correctly formatted article is passed into the `Article` component, the correct headline, author, summary and body are displayed.
* [x] The `Article` component should display "Associated Press" when an author attribute is not avalible. Build a test that verifies that that is true.
* [x] Build a test that show that when the deleteButton is pressed on an Article, the handleDelete functional property is executed.

> *Add the following tests within View.test.js.*
* [x] Build a test that shows the `View` component can render zero articles without errors. Make sure the mock service called made when View mounts.
* [x] Build a test that shows the `View` component can render three articles without errors. Make sure the mock service called made when View mounts.

## Important Notes:
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not change your `package.json` file except to install additional libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### API Documentation
* **[POST]** * to `http://localhost:5000/api/login`: returns a the current authenication information of the user. Pass in the following credentials as the `body` of the request: `{ username: 'Danny', password: 'Pak' }` for a successful login.

* **[POST]** * to `http://localhost:5000/api/logout`: returns the expired authentication information of the user.

* **[GET]** to `http://localhost:5000/api/articles`: returns the all articles currently available. **This endpoint can only be accessed by an authenticated user.**

* **[GET]** to `http://localhost:5000/api/articles/:id`: returns a single article with the id. **This endpoint can only be accessed by an authenticated user.**

* **[POST]** to `http://localhost:5000/api/articles`: creates a article object. Returns all available articles. Pass the article as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. Send the updated article object as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[DELETE]** to `http://localhost:5000/api/articles/:id`: removes the article with the `id` referenced. Returns all available articles. **This endpoint can only be accessed by an authenticated user.**

#### Article Data Structure
```
{
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00 
', //timestamp of when article was added
    summary: "summary", //short summary statement of article
      body: ""  //paragraph of article text
}
```
