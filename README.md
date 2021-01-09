# Table of Contents
- [Description](#description)
- [Overview](#overview)
- [Requirments](#requirments)
- [Getting Started](#getting-started)
- [Tips](#tips)
- [Acknowledgements](#acknowledgements)

<a name="description"/>
## 1. Description

This is a template for a Tweeter like website, ** please note that this project is still in development **. 
Users can create profiles and create global posts. 
Users can also comment, share and like other users "quacks".

<a name="overview"/>
## 2. Overview

### 2.1 Directory Description

- ./src

        This directory contains all the React files and components

- ./static/frontend

        This directory holds Webpack main.js file, which is a compacked file of the main React index.js

- ./templates

        This directory holds the generic HTML website files used by django

### 2.2 File Description

- ./quacker/urls.py

        Holds all the url links the website currently holds

- ./quacker/settings.py

        Holds all django settings as well as django rest-framework settings

<a name="requirments"/>
## 3. Requirments

Before you install the following it is highly recomended that you create a virtual enviroment 
inside this directory using pipenv:
https://dev.to/carter/how-to-setup-virtual-environment-using-pipenv-2m89

Pipefile.lock and Pipfile are all ready included inside the project.

In order to run this website you must need to have the following installed on your computer:

1. Python 3.8 https://www.python.org/downloads/
2. Node.js 14.x https://nodejs.org/en/
3. Django 3.x https://www.djangoproject.com/download/
4. django REST-Framework https://www.django-rest-framework.org/#installation
5. Webpack https://webpack.js.org/guides/installation/

Using npm you will then need to install the following:

React, React-DOM and React-Router-DOM, and Babel:

    npm install react react-dom react-router-dom --save
    npm install babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin --save-dev

<a name="getting-started"/>
## 4. Getting Started

If you have the enviroment set up, you can use the following command to enter the enviroment:

    pipenv shell

Once you inside the enviroment there is already setup scripts you can use in package.json file:

1. If you want to update your React file changes on the website:

        npm run dev

2. If you want to simply build the project:

        npm run build 

3. If you want to run the website server:

        npm run server

** Note that if you run a new server its highly recomended that your remove all catch and cookies files **

4. If you want to clean django database:

        npm run resetdb

<a name="tips"/>
## 5. Tips

If you like to have an admin account when logging into /admin/ run the following commands:

    python manage.py createsuperuser

<a name="acknowledgements"/>
## 6. Acknowledgements

This project is based on a youtube video tutorial:
https://www.youtube.com/watch?v=f1R_bykXHGE

the project was redesigned to work as a react-app as well it include other features
and web design components that were not included in the original tutorial.
