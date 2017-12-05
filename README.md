# React intro course

1. Clone this repo to your machine
2. Make sure you have the latest node LTS version
3. cd into project directory and run ```npm install```
4. To build the app, run ```npm run build```
5. For development, run ```npm run build:watch```

## Tools
In this course we will use 
 - Node LTS (https://nodejs.org/en/)
 - Visual Studio Code (https://code.visualstudio.com/)
 - Live Server (Visual Studio code extension)

## What you will learn
 - React
	- JSX
	- Component life cycle
	- Smart vs dumb components
	- Stateless and Statefull components
 - React Router
	- Switch, Route, Link vs NavLink, BrowserRouter vs HashRouter vs StaticRouter
 - Redux 
 	- how to create actions, async actions and reducers
	- when should we use redux?
 - Simple testing with Jest


 ## Task - Github Jobs
	In this task, you are going to build a search engine for Github Jobs. Create a page where people can search for jobs in Github's API
	and read more about the job they select from the list.

	API: https://jobs.github.com/api
	Sample search result: https://jobs.github.com/positions.json?search=javascript
	Sample job listing: https://jobs.github.com/positions/12ce6cc8-d9c7-11e7-890c-fe3932b457cf.json 

	- Create a search page. It should contain at least an input component, a result list-component and a result-component.
	- Use Redux async-actions to handle the fetching of data. Remember: Redux should be the single source of truth.
	- Using react-router - create a landing page for the selected result. This page should contain information about the selected position and a sidebar component that displays the top five results from the current search.