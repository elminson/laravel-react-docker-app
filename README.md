# Project OneRockWell 

The Goal:​ Show off your knowledge of how to set up and use open source tools across the
stack: Set up a PHP-based full stack application using a popular MVC framework and a
Docker-based environment to run it. Build one page using a popular frontend framework and
serve it from your MVC app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Git <Br>
Docker 


Install Git runing this as root:
```
# apt install git-all
```
Install Docker following this instructions 
```
https://docs.docker.com/compose/install/
```

### Installing and running 

In order to run the project after install git and docker you will need
1) clone this repository.
2) Build the app.
3) Start and runs the entire app.

```
git clone https://github.com/elminson/onerockwell.git
docker-compose build
docker-compose up
```
The app will be accesible by the port 8080 
```
http://127.0.0.1:8080/
```
## Tested
The project was tested in a new droplet in Digital Ocean (https://digitalocean.com). Droplet used <b>Ubuntu Docker 17.12.0~ce on 16.04 <b>

## Built With

* [Laravel](https://laravel.com/) - The PHP framework used
* [React](https://reactjs.org/) - The frontend framework used
* [Docker](https://docker.com) - Used for containerization
* [Html Template](https://colorlib.com) - Used as Template

## Authors

* **Elminson De Oleo Baez** - [elminson](https://github.com/elminson)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
