# Protest-Tracker
Protest-Tracker is an app designed to improve your awareness of local protests by providing access to reported protest information via map and interactive user-based discussions, as well as recent news specific to your state. 

## Installation 
* Clone the repository
* In the project's root directory, run `npm install`
* Run the web app with`npm start` 

For every pull of the remote repository, please use `npm install` in the root folder. This will install all the app dependencies needed.

To correctly interact with the database, go through the following steps:
1) Go to the src folder and create the file "mongoURI.js"
2) Inside of that file, type in the following: 
		`module.exports = 'mongodb+srv://<username>:<password>@cluster0.tyahz.mongodb.net/<database-name>?retryWrites=true&w=majority';` Where `<username>` and `password` are specific to the account you created in the "Database Access" tab. `<database-name>` is the database you are working with. By default, it is 'protest-tracker' and will have to be modified depend on which database container you are using.
NOTE: the mongoURI.js file has been purposefully excluded on gitignore to avoid others access to your password.

## Testing
Information on test scripts(if implemented)

## Technologies
Project is created with:
* MongoDB version: 4.2.7
* Express version: 4.17.1
* React version: 16.13.1
* Node version: 14.3.0
* Leaflet version: 1.6.0
	
## Contributing
In order for your work to be merged, your Pull Request must:
* Be reviewed and approved by the Project Manager, as well as 1 team member working on the same tech stack (Frontend/Backend)
