import React from "react";

const Matrix22 = () => {
  return (
    <div>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mo>|</mo>
        <mtable>
          <mtr>
            <mtd>
              <mi>a</mi>
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
        <mo>=</mo>
        <mo>(</mo>
        <mi>a</mi>
        <mo>&#215;</mo>
        <mi>d</mi>
        <mo>)</mo>
        <mo>-</mo>
        <mo>(</mo>
        <mi>b</mi>
        <mo>&#215;</mo>
        <mi>c</mi>
        <mo>)</mo>
      </math>
    </div>
  );
};

export default Matrix22;
