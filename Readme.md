# Trabajo Terminal Cálculo para dterminantes de 4x4 y 5x5#
================================================================
## Bitacora de cambios en el repositorio
----------------------------------------------------------------
En la presente rama se anexan la bitacora para la pagina web y tener un control de versionamiento

>24-09-2023
1. Se crea la rama para trabajar en la simulacion.
2. Se generan los primeros productos de determinantes.

>25-09-2023
1. Se obtienen los subdeterminantes 

>26-09-2023
1. Se comienza a trabajar en los subproductos de matrices
2. Se termina el codigo para los determinantes de 5x5
3. Se termina el codigo para los determinantes de 6x6
4. Se termina el codigo para los determinantes de 4x4
5. Se coloca el color detras a cada uno de los subdeterminantes

>27-09-2023
1. Se termina la simulacion de matriz 4x4

>29-09-2023
1. Se coloca el bloque de informacion como prueba
2. Se termina toda la explicacion para las matrices de 4x4.
3. Se termina el boton correr simulacion para la matriz de 4x4.
4. Se coloca el boton para detener la simulacion en el momento en que se necesite.

>31-09-2023
1. Se inicia la simulacion para la matriz de 5x5.
2. Se terminan los pasos para la expansion de 5x5.
3. Se comienza con el calculo del determinante.
4. Se cambia el useeffect para poder correr de manera automatica la simulacion.

>05-10-2023
1. Se comienza con la simulación de 6x6.
2. Como propuesta para reducir el número de lineas de codigo, se realizará componentes especificos para las dimensiones de las matriz, el más largo sería el de 4x4.
3. Se completa el componente de la matriz 4x4 para ahorrar líneas de código en el componente principal de la simulación

>06-10-2023
1. Se colocan en componentes hijos las tres dimensiones de los determinantes.

>11-10-2023
1. Se hace la primera prueba de la versión movil, en esta versión únicamente se podrá realizar los calculos, no sé podrá mostrar la simulación.
2. La versión movil ya cuenta con los botones necesarios para poder reiniciar un nuevo calculo, se alcanza hasta un determinante 7x7.
3. Se coloca la explicación de los determinantes 6x6.

>19-10-2023
1. Se colocan todos los rectangulos para la explicación de determinantes 6x6.
2. Se coloca el botoón para correr en automatico la simulación para 6x6.
3. Se colocan las condiciones para que los botones aparezcan o desaparezcan dependiendo de en que momento se encuentre la simulación.

>22-10-2023
1. Se comienza con la simulacion para la expansion de Laplace 4x4.

>23-10-2023
1. Se tiene la expansión de 4x4 completa con las multiplicaciones.

>24-10-2023
1. Se termina la expansión de Laplace.
2. Se coloca el botón para correr los pasos por si solos.

## Pasos para la ejecución del proyecto en react
1. Para iniciar la aplicación se requiere del cómando "npm start"
2. Para compilar y generar una versión para productivo "npm build"
3. Para subir a productivo "netlify deploy --prod" y colocar "./build" para tomar la versión de productivo generada con anterioridad