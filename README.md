# Proyecto 3: "Tablero de datos (Dashboard)"

## Índice
* [1. Introducción](#1-introducción)
* [2. Tecnologías utilizadas](#2-tecnologías-utilizadas)
* [3. Prototipo](#3-prototipo)
* [4. Descripción del proyecto](#4-descripción-del-proyecto)

## 1. Introducción
Se desarrollo una aplicación que consume una API y realiza las siguiente funcionalidades:
* -Consumir API
* -Mostrar gráfico con datos obtenidos
* -Link: https://kaleidoscopic-basbousa-8480ea.netlify.app/

La aplicación consiste en seleccionar año y mes y poder graficar los valores del dólar a pesos chilenos

## 2. Tecnologías utilizadas
* -HTML 5
* -CSS
* -BOOTSTRAP 5.3
* -JAVASCRIPT
* -GIT/GITHUB
* -Chart.js (Librería para graficar)
* -NODE.JS (Entorno controlado por eventos diseñado para crear aplicaciones escalables)
* -NPM (gestor de paquetes de NODE.JS, entorno de ejecución de JavaScript)
* -API DOLAR cmfchile-> https://api.cmfchile.cl/index.html (con API KEY)
* -DEPLOY en NETLIFY

## 3. Prototipo
![Prototipo](/img/prototipo.jpg)

## 4. Descripción del proyecto
* Header: se utilizó navbar de Bootstrap.
* Prototipo: Desarrollado en Photoshop.
* Graficar: Se uso la librería Chart.js para desplegar gráficos
* Consumo de datos: Se utilizo la función fetch de JavaScript para poder consumir la API
* Modularización: Se utilizo emc6 para independizar las partes de la aplicación WEB (Código JavaScript)
* async-await: Se utilizo para recibir la promesa de la función fetch y así el usuario final pueda leer de mejor forma los datos. Se uso el try/catch para validar el consumo de la API
* se uso un archivo .js con funciones para dar formatos a fechas y numeros requeridos