# Project OneRockWell 

The Goal:​ Show off your knowledge of how to set up and use open source tools across the
stack: Set up a PHP-based full stack application using a popular MVC framework and a
Docker-based environment to run it. Build one page using a popular frontend framework and
serve it from your MVC app.

### Requirements
● Set up a PHP-based full stack application using a popular MVC framework (Zend,
Symfony, Laravel, Magento, CodeIgniter). <br>
● Please do not use WordPress - we love WordPress too, but it’s not what we’re looking
for here (not MVC).<br>
● Use a popular frontend framework/library (React, Vue, Angular, Backbone, Knockout) to
build one responsive page served by the above MVC framework. <br>
● The page can be very simple or fancy, but should be responsive.<br>
● Use a docker-based environment to run it all:<br>
    ○  You can use Docker images from hub.docker.com or build your own<br>
    ○ Include a Dockerfile if you build your own<br>
    ○ Use docker-compose.yml if your application has multiple pieces (e.g. web +
database) (not required)<br>
● You do not have to use a database.<br>
● Commit everything and share a public GitHub repo link.<br>
● Include setup instructions for your application in a README.md.<br>
● Test your README.md instructions.<br>


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

## Screenshots
![Screenshot_1](https://github.com/elminson/onerockwell/raw/master/Screenshot_1.png)
![Screenshot_2](https://github.com/elminson/onerockwell/raw/master/Screenshot_2.png)
![Screenshot_3](https://github.com/elminson/onerockwell/raw/master/Screenshot_3.png)
![Screenshot_4](https://github.com/elminson/onerockwell/raw/master/Screenshot_4.png)
![Screenshot_5](https://github.com/elminson/onerockwell/raw/master/Screenshot_5.png)

## Authors

* **Elminson De Oleo Baez** - [elminson](https://github.com/elminson)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
