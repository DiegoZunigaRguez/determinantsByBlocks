import React from 'react'

const MathExpression = () => {
  return (
    <div>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">
          <mo>|</mo>
          <mi>A</mi>
          <mo>|</mo>
          <mo>=</mo>
        </math>
        <math>
          <munderover>
            <mo>&sum;</mo>
            <mrow>
              <mi>i</mi>
              <mo>=</mo>
              <mn>2</mn>
            </mrow>
            <mi>n</mi>
          </munderover>
        </math>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">
          <msup>
            <mrow>
              <mo>(</mo>
              <mo>-</mo>
              <mn>1</mn>
              <mo>)</mo>
            </mrow>
            <mi>i</mi>
          </msup>
        </math>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">
          <mo>|</mo>
          <mtable>
            <mtr>
              <mtd>
                <mi>
                  <msub>
                    <mi>a</mi>
                    <mn>1,1</mn>
                  </msub>
                </mi>
              </mtd>
              <mtd>
                <mi>b</mi>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mi>c</mi>
              </mtd>
              <mtd>
                <mi>d</mi>
              </mtd>
            </mtr>
          </mtable>
          <mo>|</mo>
        </math>
    </div>
  )
}

export default MathExpression