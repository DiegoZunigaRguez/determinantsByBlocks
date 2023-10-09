#include<iostream>
#include"Matriz.h"
//#define getSign(n) n%2==0?1:-1

using namespace std;

typedef long long int lli;

lli factorial(int n){
    lli fact;
    if(n==0 || n==1 )
        fact = 1;
    else fact = n*factorial(n-1);
    return fact;
}

int getSign(int n){
    return n%2==0 ? 1 : -1;
}

Matriz getComplementaryMatrix(Matriz mtz, int n, int index0, int index1){
    int dim = n-2;
    Matriz comp = createMatrix(dim);
    for(int i=2, auxI=0; i<n; i++, auxI++)//siempre se inicia en la tercera fila
        for(int j=0, auxJ=0; j<n; j++){
            if(j==index0 || j==index1)
                continue;
            comp[auxI][auxJ++]=mtz[i][j];   
        }
    //printMatrix(comp, dim);
    return comp;
}

lli DeterminantCounting(Matriz mtz, int n, lli * numDetCalculados, int *numDetOrden){
    lli det=0;
    if(n==2){
        det = mtz[0][0]*mtz[1][1] - mtz[0][1]*mtz[1][0];
        (*numDetCalculados)++;
        numDetOrden[n-2]++;
    }
    else if(n==3){
        det = mtz[0][0]*mtz[1][1]*mtz[2][2] +
        mtz[1][0]*mtz[2][1]*mtz[0][2] +
        mtz[2][0]*mtz[0][1]*mtz[1][2] -
        mtz[0][2]*mtz[1][1]*mtz[2][0] -
        mtz[1][2]*mtz[2][1]*mtz[0][0]-
        mtz[2][2]*mtz[0][1]*mtz[1][0];
        (*numDetCalculados)++;
        numDetOrden[n-2]++;
    }
    else{
        Matriz m0 = createMatrix(2);
        for (int left = 0; left < n - 1; left++) {
            m0[0][0] = mtz[0][left];
            m0[1][0] = mtz[1][left];
            for (int right = left+1; right < n; right++){
                m0[0][1] = mtz[0][right];
                m0[1][1] = mtz[1][right];
                Matriz aux = getComplementaryMatrix(mtz, n, left, right);
                det += getSign(left % 2 == 1 ? right : right + 1) * DeterminantCounting(m0, 2, numDetCalculados, numDetOrden) * DeterminantCounting(aux, n - 2, numDetCalculados, numDetOrden);
                deleteMatrix(aux, n-2);
            }
        }
        numDetOrden[n-2]++;

    }
    return det;
}

lli Determinant(Matriz mtz, int n){
    lli det=0;
    if(n==2){
        det = mtz[0][0]*mtz[1][1] - mtz[0][1]*mtz[1][0];
    }
    else if(n==3){
        det = mtz[0][0]*mtz[1][1]*mtz[2][2] +
        mtz[1][0]*mtz[2][1]*mtz[0][2] +
        mtz[2][0]*mtz[0][1]*mtz[1][2] -
        mtz[0][2]*mtz[1][1]*mtz[2][0] -
        mtz[1][2]*mtz[2][1]*mtz[0][0]-
        mtz[2][2]*mtz[0][1]*mtz[1][0];
    }
    else{
        //int numTerms = n * (n - 1) / 2; //factorial(n)/(factorial(n-2)*factorial(2));
        Matriz m0 = createMatrix(2);
        for (int left = 0; left < n - 1; left++) {
            m0[0][0] = mtz[0][left];
            m0[1][0] = mtz[1][left];
            for (int right = left +1; right < n; right++){
                m0[0][1] = mtz[0][right];
                m0[1][1] = mtz[1][right];
                Matriz aux = getComplementaryMatrix(mtz, n, left, right);
                det += getSign(left % 2 == 1 ? right : right + 1) * Determinant(m0, 2) * Determinant(aux, n - 2);
                deleteMatrix(aux, n-2);
            }
        }
    }
    return det;
}