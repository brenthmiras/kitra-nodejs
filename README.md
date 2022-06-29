# kitra-nodejs
Implemented using Node.js + Sequelize ORM

## Getting Started
You can download this repo or clone using below command. (folder-name will be project folder in which you want to start your project).
```
git clone git@github.com:brenthmiras/kitra-nodejs.git <folder-name>
```
or from **Download Zip**
```
https://github.com/brenthmiras/kitra-nodejs
```
### Project Setup
Once you clone or download project go into you folder

>now copy **.env.local** file to **.env** file

### Installing
```
> npm install or yarn install  (this will install all dependent libraries)
```

### Database Config Setup
Create new database (let's say i'm going to use mysql and my database name is **kitra**).
so in my **.env** file will set below parameters.
```
DB_HOST=localhost               # database connection host
DB_USER=root                    # database username
DB_PASS=secret@123              # database password
DB_NAME=kitra                   # database name
DB_DIALECT=mysql                # database dialect
DB_PORT=3306                    # database port
```
some other inportant parameters/keys in **.env** file
```
APP_HOST=localhost      # application host name
APP_PORT=3000           # application port
SECRET=secret           # secret key for encrypt/decrypt JWT token
```

### Migration and Seeders run
After creating database and updating .env file run below commands
```
> npm run migrate
> npm run seed:all
```
Migration will create table users, treasures etc... and seed some default values

`npm start` to run your project 
>Everythig is setup and you are good to go now. Happy Coding :)

### Find treasures within location
```
> POST : http:http://localhost:3000/api/treasures?latitude=14.47720766&longitude=120.9867927&distance=10
> Payload: latitude, longitude, distance
> Response : 
{
	"code": 200,
	"data": {
		"treasures": [
			{
				"id": 100,
				"name": "T1",
				"latitude": 14.54376481,
				"longitude": 121.0199117,
				"createdAt": "2022-06-28T23:46:19.000Z",
				"updatedAt": null
			}
   ...MORE DATA...
		]
	},
	"success": true
}
```
### Find treasures within location and prize
```
> POST : http://localhost:3000/api/treasures?latitude=14.47720766&longitude=120.9867927&distance=10&prize=10
> Payload: latitude, longitude, distance, prize
> Response : 
{
	"code": 200,
	"data": {
		"treasures": [
			{
				"id": 100,
				"name": "T1",
				"latitude": 14.54376481,
				"longitude": 121.0199117,
				"createdAt": "2022-06-28T23:46:19.000Z",
				"updatedAt": null
			}
   ...MORE DATA...
		]
	},
	"success": true
}
```
