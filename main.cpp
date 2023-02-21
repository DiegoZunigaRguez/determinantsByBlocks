//#include"Matriz.h"
#include"DeterminantUtils.h"
#include"DeterminantLagrange.h"
#include<iostream>
#include<time.h>

using namespace std;

int getRandomNum(int n) {
    return rand() % (n + 1) * (rand() % 2 ? 1 : -1);
}

int main(int argc, char *argv[]){
    srand(time(NULL));
    if (argc != 4) {
        cout << "Ejecutar con ./matrices n mode algortimo" << endl;
        exit(0);
    }
    int n =  atoi(argv[1]);
    int mode = atoi(argv[2]); // 0 manual , 1 auto
    int algoritmo = atoi(argv[3]); // 0 encarnacion 1 lagrange
    Matriz test = createMatrix(n);

    string strWolfram = "determinante ({";

    if (mode == 1) {
        int num;
        for (int i = 0; i < n; i++) {
            strWolfram += "{";
            for (int j = 0; j < n; j++) {
                num = getRandomNum(10);
                test[i][j] = num;//llena con numeros enteros en [-10, 10]
                strWolfram += to_string(num) + ",";
            }
            strWolfram.pop_back();
            strWolfram += "},";
        }
        strWolfram.pop_back();
        strWolfram += "})";
        cout << strWolfram << endl;
    }
    else {
        cout << "ingrese los valores de la matriz:" << endl;
        for(int i=0; i<n; i++)
            for(int j=0; j<n; j++)
                cin>>test[i][j];
    }
    cout << "****************************" << endl;
    printMatrix(test, n);
    cout << "****************************" << endl;
    if(algoritmo == 0)
        cout<<"det = "<<Determinant(test,n)<<endl;
    else if(algoritmo==1) cout << "det = " << lagrangeCofDeterminant(test, n) << endl;
}