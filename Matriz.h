#include<iostream>
#ifndef __Matriz__
#define __Matriz__

using namespace std;

typedef int **Matriz;

Matriz createMatrix(int n){
    Matriz mtx=(Matriz)malloc(sizeof(int *)*n);
    for(int i=0; i<n; i++)
        mtx[i]=(int *)malloc(sizeof(int)* n);
    return mtx; 
}
void printMatrix(Matriz mtx, int n){
    for(int i=0; i<n; i++){
        for(int j=0;j<n;j++)
            cout<<mtx[i][j]<<"\t";
        cout<<endl;
    }
    cout<<endl;
}
void cpyMatrix(Matriz dest, Matriz source, int n){
    for(int i=0; i<n; i++)
        for(int j=0;j<n;j++)
            dest[i][j]=source[i][j];
}
void deleteMatrix(Matriz mtz, int n) {
    for (int i = 0; i < n; i++) {
        free(mtz[i]);
    }
    free(mtz);
}
#endif