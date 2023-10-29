# Trabajo Terminal Cálculo para dterminantes de 4x4 y 5x5#
================================================================
## Bitacora de cambios en el repositorio
----------------------------------------------------------------
En la presente rama se realizaran los cambios para el codigo de escritorio.

>08-10-2023
1. Se crea la rama para anlizar el codigo de la aplicacion de escritorio.
2. Se obtiene la version estable del ejecutable.
3. Se elimina cualquier otra carpeta que no tenga que ver con la aplicacion de escritorio.

>09-10-2023
1. Se tiene la primera propuesta para la aplicación de escritorio utilizando Java

>10-10-2023
1. Se tiene la primera version de la aplicacion de escritorio, en este caso, no se hizo uso de C++.

>14-10-2023
1. Modificación en la interfaz para que se tenga un elemento 0 y no se seleccione alguna sin haber seleccionado alguna dimension anterior.

>17-10-2023
1. Se agrega el icono a la aplicacion

>28-10-2023
1. Se agrega el archivo de las aproximaciones

## Pasos para compilación de código en C++
compilar con g++ -std=c++11 DeterminantLagrange.h DeterminantUtils.h Matriz.h main.cpp -o <nombre>
ejecutar con .\<nombre> <n>

## Pasos para compilación de código en Java
Compilar con javac Interfaz.java
Ejecutar con java Interfaz