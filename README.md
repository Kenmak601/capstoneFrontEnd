# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Project Name:
SportsMedia
Project Purpose:
The purpose of this project is to create a social media site with marketplace dedicated to sports fans
Complete Project Outline:
Refer Capstone Project Overview Document (docx.) -- submitted to course instructors.
Architecture Diagrams: https://lucid.app/documents/view/7a67cf02-79ec-48c8-b5ad-a257c85bb666
Project Timeline (Gantt Chart): submitted on the Project Overview Document -- submitted to course instructors
Back End Environment:
Project back end is running on NodeJS, and communicating with MySQL to provide information for project front end (see project architecture diagram PD 1.0 outlined in Capstone Project Overview Document).
Database structure outlined in Capstone Project Overview Document item PD 1.1.
MVC structure controls calls to/from the front end to the database, or from back end to database in the case of Postman testing.
Functionalities APF 1.10 - 3.60 outlined and tested in myDBServices.js (note: Not all provisioned functionalities are currently required or working).
Back End Run Procedure:
In the project directory:
npm start (opens on port 8080).
note: This project is not yet set up for remote use on other machines. You will need MySQL installed and the requisite database files to run this project without any issues.
If you do not have the following scripts installed you will need to install them using:
Axios: This controls the database calls used by the project, install using npm install axios.
Express: NodeJS framework that allows for requiring between back end files, install using npm install express.
MySQL: MySQL relational database system protocol allows the project to call from and send data to the project database, install using npm install mysql.
Nodemon: Script for automatically restarting back end server when modifications are made, install using npm install nodemon.
Redis: Caching script allowing for faster application usage once data has been called (not current, planned for future use), install using npm install redis.
Swagger UI Express: Script allowing for API/data functionality testing via browser (http://localhost:8080/api-docs/#/), install using npm install swagger-ui-express.
Front End Environment: (currently not included)
Project front end is running on React JS, and communicating with MySQL database via project back end environment (see project architecture diagram PD 1.0 outlined in Capstone Project Overview Document).
Front End Run Procedure:
In the source directory:
npm start (opens on port 3001).
note: This project is not yet set up for remote use on other machines. You will need MySQL installed and the requisite database files to run this project without any issues.
If you do not have the following scripts installed you will need to install them using:
Axios: Already outlined, install using npm install axios.
Material UI (material, react, styled): Code component library controlling front end user interface, styling, and behaviour , install using npm install @mui/material @emotion/react @emotion/styled.
Material UI Icons: Code component icon library, install using npm install @mui/icons-material.
React Router Dom: Implements dynamic routing for project web application, install using npm install react-router-dom.
Swagger UI Express: Script allowing for API/data functionality testing via browser (http://localhost:8080/api-docs/#/), install using npm install swagger-ui-express.(currently not included)
Test Provisioning:
Refer Swagger JSON Document ((http://localhost:8080/api-docs/#/) for functionality testing (most unused functionalities not yet added as are not within current state project scope, earmarked for future state development).(currently not included)
lucid.applucid.app
Lucid visual collaboration suite: Log in
Go from imagining the future to building it. Log in to access Lucidchart for intelligent diagramming or Lucidspark for virtual whiteboarding. Teams can collaborate, ideate, and build projects in real time.
