import React from 'react';

const LaplaceExpansion = () => {
  return (
    <div>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mo>|A|</mo>
        <mo>=</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>i1</mi>
          </mrow>
        </msub>
        <msub>
          <mi>A</mi>
          <mrow>
            <mi>i1</mi>
          </mrow>
        </msub>
        <mo>+</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>i2</mi>
          </mrow>
        </msub>
        <msub>
          <mi>A</mi>
          <mrow>
            <mi>i3</mi>
          </mrow>
        </msub>
        <mo>+</mo>
        <mo>...</mo>
        <mo>+</mo>
        <msub>
          <mi>a</mi>
          <mrow>
            <mi>in</mi>
          </mrow>
        </msub>
        <msub>
          <mi>A</mi>
          <mrow>
            <mi>in</mi>
          </mrow>
        </msub>
        <mo>=</mo>
      </math>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <munderover>
            <mo>&#x2211;</mo>
            <mn>k=1</mn>
            <mn>n</mn>
          </munderover>
          <msub>
            <mi>a</mi>
            <mrow>
              <mi>ik</mi>
            </mrow>
          </msub>
          <msub>
            <mi>A</mi>
            <mrow>
              <mi>ik</mi>
            </mrow>
          </msub>
        </mrow>
      </math>
    </div>
  )
}

export default LaplaceExpansion