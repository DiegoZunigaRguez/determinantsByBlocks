import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Interfaz {
    private int dimension;
    private JTextField[][] textFieldGrid;
    private JPanel boardPanel;

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

        // Selector de dimensiones
        JComboBox<Integer> dimensionSelector = new JComboBox<>(new Integer[] { 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 });
        dimensionSelector.setSelectedItem(dimension);
        dimensionSelector.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Cambia la dimensión del tablero al valor seleccionado
                dimension = (Integer) dimensionSelector.getSelectedItem();
                updateBoard();
            }
        });

        JButton button1 = new JButton("Limpiar");
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Acciones cuando se presiona el Botón 1
            }
        });

        JButton button2 = new JButton("Aleatorio");
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

        JButton button3 = new JButton("Calcular");
        button3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Acciones cuando se presiona el Botón 3
            }
        });

        JPanel topPanel = new JPanel(new GridLayout(3, 1)); // Usar GridLayout con 5 filas y 1 columna
        topPanel.setBackground(new Color(241, 232, 219)); // Establece el color de fondo del panel superior
        topPanel.add(new JLabel("Selecciona la Dimensión: "));
        topPanel.add(dimensionSelector);
        topPanel.add(button1);
        topPanel.add(button2);
        topPanel.add(button3);

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
        boardPanel.setMaximumSize ( new Dimension ( 300, 300 ) );
        boardPanel.setMinimumSize ( new Dimension ( 300, 300 ) );   
        boardPanel.repaint();
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
