

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Interfaz {
    private int dimension;
    private JTextField[][] textFieldGrid;
    private JPanel boardPanel;
    private JPanel topPanel;
    JTextField textFieldResultado = new JTextField();
    long Resultado = 0;
    int[][] matriz;
    private JButton button1, button2, button3;

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

    public static void WolframString(int[][] matrix){
        System.out.print("det{{");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j]);
                if (j < matrix[i].length - 1) {
                    System.out.print(", ");
                }
            }
            if (i < matrix.length - 1) {
                System.out.print("}, {");
            } else {
                System.out.print("}}");
            }
        }
        System.out.println();
    }

    public static int[][] getComplementaryMatrixLagrange(int[][] mtz, int n, int currJ){
        int[][] comp=new int[n-1][n-1];
        for(int i=1, auxI=0; i<n; i++, auxI++){
            for (int j = 0, auxJ = 0; j < n; j++) {
                if(j==currJ){
                    continue;
                }
                comp[auxI][auxJ++]=mtz[i][j];
            }
        }
        return comp;
    }

    public static long lagrangeCofDeterminant(int[][] mtz, int n){
        long det=0;
        if(n==2){
            det = mtz[0][0] * mtz[1][1] - mtz[0][1] * mtz[1][0];
        }else{
            for (int i = 0; i < n; i++) {
                int pivot=mtz[0][i];
                int[][] aux = getComplementaryMatrixLagrange(mtz, n, i);
                det+=getSign(i) * pivot * lagrangeCofDeterminant(aux, n-1);
            }
        }
        return det;
    }

    public Interfaz() {
        // Crea una interfaz gráfica con un tablero de texto de tamaño 4x4 inicialmente
        dimension = 4;
        initializeUI();
    }

    private void initializeUI() {
        JFrame frame = new JFrame("EscoMate");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(350, 450);
        frame.setResizable(false);

        ImageIcon icon = new ImageIcon("./Icono.jpeg");
        frame.setIconImage(icon.getImage());


        // Selector de dimensiones
        JComboBox<Integer> dimensionSelector = new JComboBox<>(new Integer[] { null, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 });
        dimensionSelector.setSelectedItem(null);
        dimensionSelector.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Cambia la dimensión del tablero al valor seleccionado
                dimension = (Integer) dimensionSelector.getSelectedItem();
                updateBoard();
        
                // Habilita los botones y el panel de resultados
                button1.setEnabled(true);
                button2.setEnabled(true);
                button3.setEnabled(true);
                textFieldResultado.setVisible(true);
                textFieldResultado.setText(null);
            }
        });        
        topPanel = new JPanel(new GridLayout(7, 2)); // Usar GridLayout con 5 filas y 1 columna
        topPanel.setBackground(new Color(241, 232, 219)); // Establece el color de fondo del panel superior
        topPanel.add(new JLabel("Selecciona la Dimension: "));
        topPanel.add(dimensionSelector);
        button1 = new JButton("Limpiar");
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                for (int i = 0; i < dimension; i++) {
                    for (int j = 0; j < dimension; j++) {
                        textFieldGrid[i][j].setText("");
                    }
                }
            }
        });

        button2 = new JButton("Aleatorio");
        button2.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Llena los JTextField con números aleatorios entre -10 y 10
                for (int i = 0; i < dimension; i++) {
                    for (int j = 0; j < dimension; j++) {
                        int randomNumber = (int) (Math.random() * 21) - 10; // Números aleatorios entre -10 y 10
                        textFieldGrid[i][j].setText(Integer.toString(randomNumber));
                    }
                }
            }
        });

        button3 = new JButton("Calcular");
        button3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Intentar parsear los valores de los JTextField a enteros y guardarlos en la
                // matriz
                int[][] matrix = new int[dimension][dimension];
                boolean isValidInput = true;

                for (int i = 0; i < dimension; i++) {
                    for (int j = 0; j < dimension; j++) {
                        try {
                            matrix[i][j] = Integer.parseInt(textFieldGrid[i][j].getText());
                        } catch (NumberFormatException ex) {
                            // Si el texto no es un número válido, marcar la entrada como inválida
                            isValidInput = false;
                            break;
                        }
                    }
                    if (!isValidInput) {
                        break;
                    }
                }

                if (isValidInput) {
                    //System.out.println("El valor del determinante es "+Determinant(matrix, dimension));
                    //WolframString(matrix);
                    long startTime = System.nanoTime();
                    Resultado=Determinant(matrix, dimension);
                    long endTime = System.nanoTime() - startTime;
                    System.out.println("El tiempo de ejecucion es: "+endTime/1e6+" milisegundos");
                    SwingUtilities.invokeLater(() -> {
                        textFieldResultado.setText(String.valueOf(Resultado));
                    });
                } else {
                    // Al menos una entrada no es un número válido, mostrar un mensaje de error
                    JOptionPane.showMessageDialog(null, "Por favor, ingresa números válidos en todas las celdas.",
                            "Error", JOptionPane.ERROR_MESSAGE);
                }
            }
        });
        button1.setEnabled(false);
        button2.setEnabled(false);
        button3.setEnabled(false);
        textFieldResultado.setVisible(false);
        topPanel.add(button1);
        topPanel.add(button2);
        topPanel.add(button3);
        topPanel.add(new JLabel("Resultado: "));
        topPanel.add(textFieldResultado);
        // Establece el color de fondo del panel del tablero
        boardPanel = new JPanel(new GridLayout(dimension, dimension));
        boardPanel.setSize(300, 300);
        boardPanel.setBackground(new Color(241, 232, 219));

        frame.add(topPanel, BorderLayout.NORTH);
        frame.add(boardPanel, BorderLayout.CENTER);
        frame.setLocationRelativeTo(null); // Centra la ventana en la pantalla
        frame.setVisible(true);
    }

    private void updateBoard() {
        // Remueve los componentes del panel anterior
        boardPanel.removeAll();

        // Calcula el ancho de cada JTextField en función de la nueva dimensión y del
        // tamaño de la ventana
        int textFieldWidth = 200 / dimension;
        if (dimension != 0) {
            // Agrega los nuevos componentes al panel con el nuevo tamaño
            boardPanel.setLayout(new GridLayout(dimension, dimension));
            textFieldGrid = new JTextField[dimension][dimension];
            for (int i = 0; i < dimension; i++) {
                for (int j = 0; j < dimension; j++) {
                    JTextField textField = new JTextField(2); // Establece el ancho del campo de texto
                    textField.setHorizontalAlignment(JTextField.CENTER);
                    textField.setPreferredSize(new Dimension(textFieldWidth, textFieldWidth));
                    textFieldGrid[i][j] = textField;
                    boardPanel.add(textField);
                }
            }
            // Repinta el panel para que se muestren los nuevos componentes
            boardPanel.revalidate();
            boardPanel.setMaximumSize(new Dimension(300, 300));
            boardPanel.setMinimumSize(new Dimension(300, 300));
            boardPanel.repaint();
        } else {
            boardPanel.setVisible(false);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Interfaz();
            }
        });
    }
}
