#include<iostream>
#ifndef __Matriz__
#define __Matriz__

using namespace std;

typedef char **Matriz;

Matriz createMatrix(char n){
    Matriz mtx=(Matriz)malloc(sizeof(char *)*n);
    for(int i=0; i<n; i++)
        mtx[i]=(char *)malloc(sizeof(char)* n);
    return mtx; 
}
void printMatrix(Matriz mtx, int n){
    for(int i=0; i<n; i++){
        for(int j=0;j<n;j++)
            cout<<(int)mtx[i][j]<<"\t";
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