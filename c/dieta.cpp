//#include<conio.h>
#include<iostream>
#include<stdio.h>

using namespace std;

float calcularIndiceMasa(float estatura, float peso);
void menuDinamico(int edad);
void menuPrincipal();

float calcularIndiceMasa(float estatura, float peso){
    float estaturaCuadrada = estatura * estatura;
    float indice = peso/estaturaCuadrada;
    return indice;
}

void menuDinamico(int edad){
	int menu[7][3];
	int dia;
	int platillo;
	char platillos[21][100]={
	"huevo",
	"pan y leche",
	"pan tostado",
	"cafe",
	"tamales",
	"te",
	"Hot cakes",
	"espagueti",
     "albondigas",
	"pescado",
	"pechuga",
	"caldo de pollo" ,
	"mole verde",
	"arroz",
	"cereal",
	"fruta",
    "quesadillas",
	"ensalada de manzana",
	"sandwich",
	"atole",
	"galletas",
    };


	for(int i=0;i<7;i++)
	{
		for(int j=0;j<3;j++)
		{
			platillo=((edad-10)/6)+i;
			if(platillo>6){
				platillo=6;
			}
			if(j==0)
			{
				menu[i][j]=platillo;
			}
			else if (j==1){
				menu[i][j]=platillo+7;
			}
			else {
				menu[i][j]=platillo+14;
			}
		}
	}
	do
	{
        printf("----------------dia------------------\n");
		printf("0-->lunes\n");
		printf("1-->martes\n");
		printf("2-->miercoles\n");
		printf("3-->jueves \n");
		printf("4-->viernes \n");
		printf("5-->sabado\n");
		printf("6-->domingo\n");
		printf("Elige un dia de la semana:");
		scanf("%d", &dia);
				
	} while(dia<0 ||dia>6);
	
    printf("Desayuno: %s\n", platillos[menu[dia][0]]);
    printf("Comida: %s\n", platillos[menu[dia][1]]);
    printf("Cena: %s", platillos[menu[dia][2]]);

}

void menuPrincipal(){
    int opcion;
    do{
        	printf("----------------MENU PRINCIPAL------------------\n");
		printf("1 --> Calcular Indice de masa Corporal\n");
		printf("2 --> Consultar menu dinamico\n");
		printf("Elige una opcion del menu:");
		scanf("%d", &opcion);
    }while(opcion < 0 || opcion > 2);
    switch(opcion){
        case 1:
            float estatura, peso, indice;
            printf("Dame tu estatura en metros: ");
            scanf("%f",&estatura);
            printf("Dame tu peso en kilos: ");
            scanf("%f",&peso);
            indice = calcularIndiceMasa(estatura, peso);
            printf("Tu indice es: %f", indice);
            break;
        case 2:
	    int edad;
	    printf("Dime tu edad : ");
	    cin>>edad;
	    menuDinamico(edad);
            break; 
    }
}

int main(int argc, char *argv[]){
    char respuesta = 's';
    while(respuesta == 's'){
        menuPrincipal();
        printf("¿Quieres regresar al menu Principal? (s/n):");
        getchar();
	respuesta = getchar();
        getchar();
    }
    return 0;
}
