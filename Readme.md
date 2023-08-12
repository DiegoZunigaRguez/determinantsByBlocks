# Trabajo Terminal Cálculo para dterminantes de 4x4 y 5x5#
================================================================
## Bitacora de cambios en el repositorio
----------------------------------------------------------------
En la presente rama se anexan la bitacora para la pagina web y tener un control de versionamiento

>09-08-2023
1. Se crea una rama para la primera version de la pagina web
2. Se crea una rama para la segunda version de la pagina web
3. Se crea la pantalla de inicio
4. Se hace responsiva la pantalla de inicio

>11-08-2023
1. Se crea la pantalla welcome
2. Se sube la primera version de la pantalla
3. Se deploya en netlify
4. Se hacen los cambios de responsive para celular
5. Se crea la pantalla about

>12-08-2023
1. Se crea la pantalla de desarrolladores
2. Se realiza la codificacion de la pantalla

## Pasos para compilación de código en C++
compilar con g++ -std=c++11 DeterminantLagrange.h DeterminantUtils.h Matriz.h main.cpp -o <nombre>
ejecutar con .\<nombre> <n>

## Pasos para la ejecución del proyecto en react
1. Para iniciar la aplicación se requiere del cómando "npm start"
2. Para compilar y generar una versión para productivo "npm build"
3. Para subir a productivo "netlify deploy --prod" y colocar "./build" para tomar la versión de productivo generada con anterioridad