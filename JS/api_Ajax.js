/*****************************************************
API REST
*****************************************************

API es una forma de comunicar 2 recursos a traves de un estandar

Son construcciones disponibles en los lenguajes de programacion,
que permiten crear funcionalidades complejas de manera simple

Interfaz de Aplicacion de Programas / 

tipos de API:

-APIs del navegador

Ejemplo fetch API, no es nuestro codigo el aue tiene la funcionalidad
de fetch, es el navegador, tambien el DOM, Canvas, HTMLMediaElement,
geolocalizacion, notificaciones del sistema, Web Storage API, etc


-APIs de terceros

A las que nosotros accedemos a sus recursos, Ejemplo; json.placeholder
para acceder a la coleccion de posts, usuarios, etc. 

Api de twiter para comentarios, muro de facebook, instagran, youtube, etc. nosotros no sabemos
en aue lenguaje trabajan, pero nos dan el acceso para que
podamos interactuar y comunicarnos de manera sencilla con JS


*****************************************************
API REST
*****************************************************

REST es un standar, una tesis que hizo alguien, con mecanismos y definiciones
a seguir para que sea REST. Es un paso a paso a seguir, reglas?

REST: "Representational State Transfer" o traducido a "Transferencia de presentación de estado"

Trabaja con GET, POST, PUT, DELETE

No trabaja con sesiones sino con TOKEN

URIs unicas, siempre en plural

-------------------------------------------------------
--------------------------------------------------------

Si nosotros hacemos una API y se cumplen todos los pasos
con la metodologia REST, el concepto es REST pero la implementacion
es 'RESTful'



*****************************************************
Recordando fetch
*****************************************************

La API fetch, proporciona una interfaz para recuperar recursos
fetch() toma como primer argumento obligatorio, la ruta de acceso
al recurso

***************************************************** 
FETCH ES UN INTERFAZ PARA HACER SOLICITUDES AJAX EN JS
*******************************************************


***************************************************** *
AJAX
*******************************************************

-AJAX signigica
JavaScript Asincrono + XML (XML es viejo, ahora se usa JSON)

-AJAX no es una tecnologia por si misma, es un termino  aue describe
un modo de usar conjuntamente vaias tecnologias existentes:

-HTML, CSS, JS, DOM, JSON y lo mas importante el objeto XMLHttpRequest
(XMLHttpRequest es viejo, ahora es fetch())

-Cuando estas tecnologias se combinan en un modelo AJAX, es posible lograr
aplicaciones web capaces de actualizase sin tener aue cargar la pagina

-Esto crea aplicaciones mas rapidas  y con mejores respuestas de acciones de usuarios

**Metodos nativos para AJAX
-XMLHttpRequest
-fetch Api
-**OJO** se puede usar AXIOS, pero hay aue instalarlo, no es nativo

**Resumen: AJAX es el conjunto de tecnologias que hacen nuestro JS asincrono

fetch utiliza una direccion para acceder al recurso y devuelve una promesa (manejable con .then() y saync/await)

HTTP =  Hypertext Transfer Protocol (HTTP) (o Protocolo de Transferencia de Hipertexto en español)
 es el nombre de un protocolo el cual nos permite realizar una petición de datos y recurso.

Ruta (PATH): Es la dirección de donde queremos obtener los recursos.

Métodos Http: HTTP define un conjunto de métodos de petición para indicar la acción que se desea
 realizar para un recurso determinado. (GET, POST, PUT, PATCH, DELETE)


*****************************************************************
JSON

JSON: (JavaScript Object Notation, es un formato basado en texto estándar para representar
 datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para 
 transmitir datos en aplicaciones web.
*****************************************************************

 */