#include"Matriz.h"
using namespace std;

typedef long long int lli;

Matriz getComplementaryMatrixLagrange(Matriz mtz, int n, int currJ) {
    int dim = n - 1;
    Matriz comp = createMatrix(dim);
    for (int i = 1, auxI = 0; i < n; i++, auxI++)//siempre se inicia en la tercera fila
        for (int j = 0, auxJ = 0; j < n; j++) {
            if (j == currJ) {
                continue;
            }
            comp[auxI][auxJ++] = mtz[i][j];
        }
    //printMatrix(comp, dim);
    return comp;
}
lli lagrangeCofDeterminant(Matriz mtz, int n) {
    lli det = 0;
    if (n == 2) {
        det = mtz[0][0] * mtz[1][1] - mtz[0][1] * mtz[1][0];
    }
    else {
        for (int i = 0; i < n; i++) {
            int pivot = mtz[0][i];
            if (pivot == 0)
                continue;
            Matriz aux = getComplementaryMatrixLagrange(mtz, n, i);
            det += (i%2==0 ? 1 : -1) * pivot * lagrangeCofDeterminant(aux, n - 1);
        }
    }
    return det;
}