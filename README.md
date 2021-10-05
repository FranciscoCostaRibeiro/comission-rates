## Commission-rates project


# Running in development with nodemon
In order to run this project, you'll need a mongoDb database.

Then, change the .env.example file to .env and add your database connection string.

After that, run 'npm install'.

Finally, run 'npm run dev' to start the application in development mode.


# Running the tests
To run the unit tests, use 'npm run test'.

# Running with docker
In order to run this project with docker, you'll first need to build the docker image of the API. For that, you can run the 'build.bat' file.

After, you can run 'docker-compose up -d' to start the MongoDb container and the API container.