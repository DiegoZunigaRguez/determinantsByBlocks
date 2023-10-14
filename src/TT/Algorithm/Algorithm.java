package TT.Algorithm;

public class Algorithm {
    public Algorithm(){}

    public static int getSign(int n) {
        return n % 2 == 0 ? 1 : -1;
    }

    public static void printMatrix(int[][] mtz) {
        for (int i = 0; i < mtz.length; i++) {
            for (int j = 0; j < mtz[i].length; j++) {
                System.out.print(mtz[i][j] + "\t"); // Usamos print en lugar de println para imprimir en la misma línea
            }
            System.out.println(); // Al final de cada fila, imprimimos una nueva línea para pasar a la siguiente fila
        }
    }
    

    public static int[][] getComplementaryMatrix(int[][] mtz, int n, int index0, int index1) {
        int dim = n - 2;
        int[][] comp = new int[dim][dim];
        for (int i = 2, auxI = 0; i < n; i++, auxI++) {
            for (int j = 0, auxJ = 0; j < n; j++) {
                if (j == index0 || j == index1) {
                    continue;
                }
                comp[auxI][auxJ++] = mtz[i][j];
            }
        }
        /*System.out.println("Matriz complementaria");
        printMatrix(comp);*/
        return comp;
    }

    public static long DeterminantCounting(int[][] mtz, int n, long numDetCalculados, int[] numDetOrden) {
        long det = 0;
        if (n == 2) {
            det = mtz[0][0] * mtz[1][1] - mtz[0][1] * mtz[1][0];
            numDetCalculados++;
            numDetOrden[n - 2]++;
        } else if (n == 3) {
            det = mtz[0][0] * mtz[1][1] * mtz[2][2] +
                    mtz[1][0] * mtz[2][1] * mtz[0][2] +
                    mtz[2][0] * mtz[0][1] * mtz[1][2] -
                    mtz[0][2] * mtz[1][1] * mtz[2][0] -
                    mtz[1][2] * mtz[2][1] * mtz[0][0] -
                    mtz[2][2] * mtz[0][1] * mtz[1][0];
            numDetCalculados++;
            numDetOrden[n - 2]++;
        } else {
            int[][] m0 = new int[2][2];
            for (int left = 0; left < n - 1; left++) {
                m0[0][0] = mtz[0][left];
                m0[1][0] = mtz[1][left];
                for (int right = left + 1; right < n; right++) {
                    m0[0][1] = mtz[0][right];
                    m0[1][1] = mtz[1][right];
                    printMatrix(m0);
                    int[][] aux = getComplementaryMatrix(mtz, n, left, right);
                    det += getSign(left % 2 == 1 ? right : right + 1)
                            * DeterminantCounting(m0, 2, numDetCalculados, numDetOrden)
                            * DeterminantCounting(aux, n - 2, numDetCalculados, numDetOrden);
                    // deleteMatrix(aux, n - 2);
                }
            }
            numDetOrden[n - 2]++;
        }
        return det;
    }

    public static long Determinant(int[][] mtz, int n) {
        long det = 0;
        if (n == 2) {
            det = mtz[0][0] * mtz[1][1] - mtz[0][1] * mtz[1][0];
        } else if (n == 3) {
            det = mtz[0][0] * mtz[1][1] * mtz[2][2] +
                    mtz[1][0] * mtz[2][1] * mtz[0][2] +
                    mtz[2][0] * mtz[0][1] * mtz[1][2] -
                    mtz[0][2] * mtz[1][1] * mtz[2][0] -
                    mtz[1][2] * mtz[2][1] * mtz[0][0] -
                    mtz[2][2] * mtz[0][1] * mtz[1][0];
        } else {
            int[][] m0 = new int[2][2];
            for (int left = 0; left < n - 1; left++) {
                m0[0][0] = mtz[0][left];
                m0[1][0] = mtz[1][left];
                for (int right = left + 1; right < n; right++) {
                    m0[0][1] = mtz[0][right];
                    m0[1][1] = mtz[1][right];
                    /*System.out.println("Matriz Principal");
                    printMatrix(m0);*/
                    int[][] aux = getComplementaryMatrix(mtz, n, left, right);
                    det += getSign(left % 2 == 1 ? right : right + 1) * Determinant(m0, 2) * Determinant(aux, n - 2);
                    // deleteMatrix(aux, n - 2);
                }
            }
        }
        return det;
    }
}
