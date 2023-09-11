import React from "react";

const Theory = () => {
  return (
    <div>
      <p>
        Se tiene el siguiente teorema Sea{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mo>A</mo>
          <mo>=</mo>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>ij</mi>
            </mrow>
          </msub>
        </math>{" "}
        una matriz de nxn triangular superior o inferior. Entonces{" "}
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mo>det(A)</mo>
          <mo>=</mo>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>11</mi>
            </mrow>
          </msub>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>22</mi>
            </mrow>
          </msub>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>33</mi>
            </mrow>
          </msub>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>44</mi>
            </mrow>
          </msub>
          <mo>...</mo>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>nn</mi>
            </mrow>
          </msub>
        </math>{" "}
        Esto es,el dterminante de una matriz triangular es igual al producto de
        sus componentes en la diagonal principal.
      </p>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <mo>|</mo>
          <mtable>
            <mtr>
              <mtd>
                <mi>a</mi>
              </mtd>
              <mtd>
                <mo>0</mo>
              </mtd>
              <mtd>
                <mo>0</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo>0</mo>
              </mtd>
              <mtd>
                <mi>b</mi>
              </mtd>
              <mtd>
                <mo>0</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo>0</mo>
              </mtd>
              <mtd>
                <mo>0</mo>
              </mtd>
              <mtd>
                <mi>c</mi>
              </mtd>
            </mtr>
          </mtable>
          <mo>|</mo>
          <mo>=</mo>
          <mi>a</mi>
          <mo>*</mo>
          <mi>b</mi>
          <mo>*</mo>
          <mi>c</mi>
        </mrow>
      </math>
    </div>
  );
};

export default Theory;
