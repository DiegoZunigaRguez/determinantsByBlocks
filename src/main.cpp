//#include"Matriz.h"
#include"DeterminantUtils.h"
#include"DeterminantLagrange.h"
#include<iostream>
#include<time.h>

using namespace std;

typedef long long int lli;

int getRandomNum(int n) {
    return rand() % (n + 1) * (rand() % 2 ? 1 : -1);
}

int main(int argc, char *argv[]){
    srand(time(NULL));
    if (argc != 2) {
        cout << "Ejecutar con ./"<<argv[0]<<" <n>" << endl;
        exit(0);
    }
    int n =  atoi(argv[1]);
    cout<<"Determinante de una matriz "<<n<<"x"<<n<<endl;
    int range = 5;
    char mode, algoritmo, countFlag;
    cout<<"Ejecutar algoritmo en modo AUTO (a/A) o MANUAL(m/M) : ";
    cin>>mode;
    cout<<"Algoritmo de TT (t/T) o algoritmo de Lagrange (L/l) : ";
    cin>>algoritmo;
    cout<<"Contar el numero de determinantes calculados? (s/n) : ";
    cin>>countFlag;

    int *numDetOrden = (int *)malloc((n-1)*sizeof(int));
    int num;

    for(int i = 0; i< n - 1; i++){
        numDetOrden[i]=0;
    }

    lli numDetCalculados = 0;

    Matriz matriz = createMatrix(n);


    string strWolfram = "determinante ({";
    if (mode=='a' || mode=='A') {
        for(int i=0; i<n; i++)
            for(int j=0; j<n; j++)
                matriz[i][j] = getRandomNum(range);

        printMatrix(matriz, n);
    }
    else {
        cout << "Tngrese los valores de la matriz:" << endl;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                cin>>num;
                matriz[i][j] = num;

            }

        }
    }
    if(algoritmo=='l' || algoritmo=='L'){
        if(countFlag=='s' || countFlag=='S'){
            cout<<"det = "<<lagrangeCofDeterminantCounting(matriz, n, &numDetCalculados, numDetOrden)<<endl;
            cout<<"En total se calcularon "<<numDetCalculados<<" determinantes"<<endl;
        }
        else
            cout << "det = " << lagrangeCofDeterminant(matriz, n) << endl;
    }
    else if(algoritmo=='t' || algoritmo=='T'){
        if(countFlag=='s' || countFlag=='S'){
            cout<<"det = "<<DeterminantCounting(matriz, n, &numDetCalculados, numDetOrden)<<endl;
            cout<<"En total se calcularon "<<numDetCalculados<<" determinantes"<<endl;
        }
        else
            cout<<"det = "<<Determinant(matriz, n)<<endl;
    } 

    if(countFlag=='s' || countFlag=='S')
        for(int i = 0; i< n-1; i++)
            cout<<"determinantes de orden "<<i+2<<" : "<<numDetOrden[i]<<endl;
}