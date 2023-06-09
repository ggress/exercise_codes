#include <stdio.h>

int main(){
	int edad, platillo, dia;
	char platillos[21][100] = {
		"Cereal",
		"Jugo de naranja",
		"Bowl de fruta",
		"3",
		"4",
		"5",
		"6",
		"Pechuga azada",
		"Caldo Tlapeño",
		"Mole de olla",
		"10",
		"11",
		"12",
		"13",
		"Leche",
		"15",
		"Pan tostado",
		"Avena",
		"18",
		"19",
		"20"
	};
	char continuar;
	int menu[7][3];

	printf("Dame tu edad: ");
	scanf("%d", &edad);
	printf("Edad: %d\n", edad);
	
	//for(int i = 0; i < 21; i++){
	//	platillos[i]="";
	//}
	
	//for(int i=0; i < 21; i++){
	//	printf(" %d -> %s\n", i, platillos[i]);
	//}

	for(int i=0; i < 7; i++){
		for(int j=0; j<3; j++){

			platillo = ((edad - 10)/6)+i;

			if(platillo>6){
				platillo=6;
			}

			if(j==0){
				menu[i][j]=platillo;
			}
			else if(j==1){
				menu[i][j]=platillo + 7;
			}else {
				menu[i][j]=platillo + 14;
			}
		}
	}

//	for(int i = 0; i < 7; i++){
//		for(int j=0; j < 3; j++){
//			printf("%d\n",menu[i][j]);
//		}
//	}

	do{	
		do{
			printf("========== Dias ==========\n");
			printf(" 0 -> Lunes\n");
			printf(" 1 -> Martes\n");
			printf(" 2 -> Miercoles\n");
			printf(" 3 -> Jueves\n");
			printf(" 4 -> Viernes\n");
			printf(" 5 -> Sabado\n");
			printf(" 6 -> Domingo\n");
			printf("Elige un dia de la semana: ");
			scanf("%d",&dia);
		}while(dia < 0 || dia>6);

		printf("Desayuno: %s\n", platillos[menu[dia][0]]);
		printf("Comida: %s\n", platillos[menu[dia][1]]);
		printf("Cena: %s", platillos[menu[dia][2]]);

		printf("\nQuieres otro menu (s/n)?");
		continuar = getchar();
		continuar = getchar();
		getchar();
	}while(continuar=='s');	
	return 0;
}
