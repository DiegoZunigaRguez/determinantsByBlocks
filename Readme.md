# Trabajo Terminal Cálculo para dterminantes de 4x4 y 5x5#
================================================================
## Bitacora de cambios en el repositorio
----------------------------------------------------------------
En la presente rama se realizaran los cambios para el codigo de escritorio.

>08-10-2023
1. Se crea la rama para anlizar el codigo de la aplicacion de escritorio.
2. Se obtiene la version estable del ejecutable.

## Pasos para compilación de código en C++
compilar con g++ -std=c++11 DeterminantLagrange.h DeterminantUtils.h Matriz.h main.cpp -o <nombre>
ejecutar con .\<nombre> <n>

## Pasos para la ejecución del proyecto en react
1. Para iniciar la aplicación se requiere del cómando "npm start"
2. Para compilar y generar una versión para productivo "npm build"
3. Para subir a productivo "netlify deploy --prod" y colocar "./build" para tomar la versión de productivo generada con anterioridad