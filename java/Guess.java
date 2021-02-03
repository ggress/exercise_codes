import java.util.Scanner;
import java.lang.Math;

class Guess{
    
    private static int getRanInt(int min, int max){
        return (int)Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static void main(String[] args){
        int MAX_VALUE =  100;
        int MIN_VALUE = 1;
        int value = getRanInt(MIN_VALUE, MAX_VALUE);
        Scanner input = new Scanner(System.in);
        int number;
        do{
            System.out.println("Adivina un numero entre 1 y 100: ");
            number = input.nextInt();
            if (number > value){
                System.out.println("Muy Alto");
            }else if (number < value){
                System.out.println("Muy bajo");
            }
        }while(number != value);
        System.out.println("¡Correcto!");
        input.close();

    }
}