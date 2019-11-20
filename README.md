# Meetup Project
Find groups and events nearby to meet developers or discover new technolgies. Meetup to boost your career.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

For development, you will need Node.js and a node global package, mongoDB installed in your environement.

### Installing

Clone the repo and install the dependencies.

```
git clone https://github.com/nou688/MeetupProject.git
```
```
cd MeetupProject/serverSide
```
```
npm install
```
## Running the project

    $ npm start
 Open http://localhost:3000 and take a look around

## Simple build for production

    $ npm build
## Use Docker
You can also run this app as a Docker container:

Step 1: Clone the repo

```
git clone https://github.com/nou688/MeetupProject.git
```


Step 2: Build the Docker image

```
docker build -t meetupproject .
```

Step 3: Run the Docker container locally:

```
docker run -p 8081:8081  meetupproject
```


## Authors

* **Nouha GHRIBI** - *Initial work* - [nou688](https://github.com/nou688)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
