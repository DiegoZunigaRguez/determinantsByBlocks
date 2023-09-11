import React from 'react';
import '../det.css'

const Steps = () => {
  return (
    <div>
        <p className="after-formula">
        {" "}
        2. Empecemos por el primer elemento{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>11</mi>
            </mrow>
          </msub>
        </math>
        . Eliminamos las filas y columnas que integren{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>11</mi>
            </mrow>
          </msub>
        </math>
        . Los elementos que queden sin eliminar, será el primer determinante
        menor multiplicado por{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>11</mi>
            </mrow>
          </msub>
        </math>
        .
      </p>
      <p>
        {" "}
        3. Seguimos con el segundo elemento de la primera fila, es decir,{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>12</mi>
            </mrow>
          </msub>
        </math>
        . Repetimos el proceso: rallamos las filas y columnas que contengan
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>12</mi>
            </mrow>
          </msub>
        </math>
        .
      </p>
      <p>4. Ajustamos el signo del menor.</p>
      <p>
        5. Añadimos el segundo determinante menor al resultado anterior y
        formamos una serie de expansión.
      </p>
      <p>
        {" "}
        6. Continuamos con el tercer elemento de la primera fila, es decir,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>13</mi>
            </mrow>
          </msub>
        </math>
        . Repetimos el proceso: rallamos la fila y la columna que contengan{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>13</mi>
            </mrow>
          </msub>
        </math>
        .
      </p>
      <p>
        7. Añadimos el tercer determinante menor al resultado anterior y
        ampliamos la serie de expansión como se muestra en la siguiente
        expresión.
      </p>
    </div>
  )
}

export default Steps