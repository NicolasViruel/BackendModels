#  Proyecto Backend-Models

## Nombre del proyecto: Backend-Models

#### Proyecto Agencia de modelaje EMD MODELS, esta basado en petisiones y configuracion de Firebase para el back-end.

## Pre-requisitos 📋
#### Se necesitan tener instalado o configurado previamente para utilizar tu proyecto

#### -NodeJS 
#### -Direccion para Conectar con FireBase (serviceAccount) - Crear una carpeta admin.js:
  var admin = require("firebase-admin");
  var serviceAccount (direccion donde esta localizado el proyecto)
  
  admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://laUrldelProyectoEnFireBase"
  })
  
  const db = admin.firestore();
  
  module.exports = { admin, db };
  


## Instalación ⚙️ 

#### Puedes instalar el proyecto desde npm (en este proyecto se trabajo con VITE):

#### npm install

#### Para ejecutarlo de forma local:

#### npm start

## App subida a netlify
### En proceso
<!-- - https://fancy-crostata-21596e.netlify.app/ -->

## Herramientas Utilizadas🛠️

### - Back-end
#### 1. NodeJs
#### 2. Express
#### 3. Nodemailer
#### 4. dotenv
#### 5. FireBase
#### 6. Firebase-Admin
#### 7. Bcrypt
#### 8. Cors


## Integrantes del Proyecto

#### - Nicolas Viruel
#### - Ramiro Coronel Cardenas
#### - Fernando Perez

## EMD MODELS
