# asset-management

## Introduction
asset-management is an open-source MERN (MongoDB, Express.JS, React, and Node.JS) based
web application made by students at Middle Tennessee State University led by Jacob Cuomo and
mentored by Miroslava Migovich.
The purpose of this application is to be built for Vanderbuilt University to help keep track of
equipment in the Robotics & Autonomous Systems Lab.

## Prerequisite for developing or putting into production
Download and Install Node.JS LTS: https://nodejs.org/en/download/

If you're running Ubuntu, download Node.JS using the terminal command: `sudo apt install nodejs`
## Development

1. Download and Install VS Code: https://code.visualstudio.com/
2. Clone this respository to your local machine
3. Ask for correct environment variable files and for IP to be whitelisted on database
4. Open up terminal, go to the `server/` folder, and run `npm install` (NOTE: this could take some time)
5. Now, go to the `client/` folder, and run `npm install` (NOTE: this could take some time)
6. Run `npm install -g nodemon` to install a dependency we will need for testing
7. Now, go back to the `server/` folder, and run `nodemon server` in terminal (this starts the server)
8. Open a second terminal window, this time go to the `client/` folder and run `npm start` (this starts the client and should automatically open your browser to view webpage)

## Production

1. Clone this repository onto the machine it will be running on
2. Ensure that the system has the environemnt variable `PORT` set to `80`
3. Create a MongoDB cluster for free by creating an account: https://www.mongodb.com/
4. Go to your MongoDB dashboard, on the left click `Database Access`, then `Add New Database User`
5. Create the account with a username and password you will remember, then press `Add User` at the bottom right
6. Connect to the cluster by clicking the `Connect`, then `Connect your application`, copy the data on that page.
7. Navigate back to the project, go to `server/` folder and create a file called `config.env`
8. Enter, `ATLAS_URI=` and then paste what you have from step 6
9. Replace the areas in the text you pasted where it has `<username>:<password>` with the username and password you created in step 5
10. Next, navigate to the `server/` folder and run `npm install`
11. Similarly, run `npm install` in the `client/` folder
12. Run the server by opening two terminals, on one, go to the `server/` folder and run `nodemon server`. In the next terminal, go to `client/` folder and run npm start.
13. The web server should now be running and ready for actual use
14. Lastly, have your domain point to the IP address of the server the website is running on


## Credit
Project made by [Jacob Cuomo](https://github.com/bobcat4848), [Johnathan Bevers](https://github.com/JohnathanBevers), [Karmen Freeman](https://github.com/KarFre), [Fady Tawfik](https://github.com/fadytawfik), and [Ryan Hasbrouck](https://github.com/rwh316) for [Vanderbilt University](https://www.vanderbilt.edu/)