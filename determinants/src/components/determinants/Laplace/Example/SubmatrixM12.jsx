import React from "react";

const SubmatrixM12 = () => {
  return (
    <div>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mrow>
          <mo>|</mo>
          <mtable>
            <mtr>
              <mtd>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mn>2</mn>
              </mtd>
              <mtd>
                <mn>3</mn>
              </mtd>
              <mtd>
                <mn>4</mn>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>5</mn>
              </mtd>
              <mtd>
                <mn>6</mn>
              </mtd>
              <mtd>
                <mn>7</mn>
              </mtd>
              <mtd>
                <mn>8</mn>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>9</mn>
              </mtd>
              <mtd>
                <mn>10</mn>
              </mtd>
              <mtd>
                <mn>11</mn>
              </mtd>
              <mtd>
                <mn>12</mn>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>13</mn>
              </mtd>
              <mtd>
                <mn>14</mn>
              </mtd>
              <mtd>
                <mn>15</mn>
              </mtd>
              <mtd>
                <mn>16</mn>
              </mtd>
            </mtr>
          </mtable>
          <mo>|</mo>
        </mrow>
        <mo>=</mo>
        <mrow>
          <mo>-</mo>
          <mn>2</mn>
          <mo>&#215;</mo>
          <mrow>
            <mo>|</mo>
            <mtable>
              <mtr>
                <mtd>
                  <mn>5</mn>
                </mtd>
                <mtd>
                  <mn>7</mn>
                </mtd>
                <mtd>
                  <mn>8</mn>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mn>9</mn>
                </mtd>
                <mtd>
                  <mn>11</mn>
                </mtd>
                <mtd>
                  <mn>12</mn>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mn>13</mn>
                </mtd>
                <mtd>
                  <mn>15</mn>
                </mtd>
                <mtd>
                  <mn>16</mn>
                </mtd>
              </mtr>
            </mtable>
            <mo>|</mo>
          </mrow>
        </mrow>
      </math>
    </div>
  );
};

export default SubmatrixM12;