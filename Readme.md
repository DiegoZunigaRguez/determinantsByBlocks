# Trabajo Terminal Cálculo para dterminantes de 4x4 y 5x5#
================================================================
## Bitacora de cambios en el repositorio
----------------------------------------------------------------
En el presente documento se agregara las fechas de los cambios para tener un orden de como se van realizando los cambios y tener un mejor
control de versiones:
>09-03-2023
Diego Zúñiga crea el repositorio de github donde se almacenará el proyecto.
Abraham Hernández crea el proyecto base de react. 

>15-03-2023
Abraham Hernandez realiza los cambios para realizar la aplicacion responsive

>27-03-2023
Diego Zúñiga hace un push para subir la última versión estable del código de C++

>29-03-2023
Abraham Hernández hace push con actualización del Readme principal

>31-03-2023
Abraham Hernandez sube los documentos pertinentes para el documento tecnico ubicado en la carpeta "Documentos"

>02-04-2023
Abraham Hernandez sube documentos correspondientes a la documentación de TT2

>10-07-2023
Se genera la pantalla de inicio de la aplicación web, tanto para su versión de computadora como el responsivo

## Pasos para compilación de código en C++
compilar con g++ -std=c++11 DeterminantLagrange.h DeterminantUtils.h Matriz.h main.cpp -o <nombre>
ejecutar con .\<nombre> <n>

## Pasos para la ejecución del proyecto en react
1. Para iniciar la aplicación se requiere del cómando "npm start"
2. Para compilar y generar una versión para productivo "npm build"
3. Para subir a productivo "netlify deploy --prod" y colocar "./build" para tomar la versión de productivo generada con anterioridad