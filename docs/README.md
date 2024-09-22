# About the project

This project consists of a a clothing e-commerce where the front and backend are isolated from each other.

- Dynamic product page and URL
- Single Page Application (SPA)
- Client-side routering

[Video presentation of the project will be made as soon as it is done.]

## Built with

![javascript](https://img.shields.io/badge/javascript-FFFF00?style=for-the-badge&logo=javascript&logoColor=black)

![reactjs](https://img.shields.io/badge/react-00FFFF?style=for-the-badge&logo=react&logoColor=black)

![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)

![mysql](https://img.shields.io/badge/mysql-000000?style=for-the-badge&logo=mysql&logoColor=white)

# Getting started

First, you need to install the dependencies from each side of the application. For this, you just open a terminal inside the client folder,  another inside the server folder and run on both:

```
npm install
```

Then, create a ```.env``` file inside the ```src/server``` folder and fill it with your MYSQL database information:

```
host=""
dbname=""
user=""
password=""
port=""
```

And the project is installed! Now, for both of the application sides to run simultaneously, you need to run (in the two terminals you opened just now) the following command:

```
npm run dev
```

Since the two applications are isolated on purpose, you can play with different front and backends freely, just connecting via API to each other.