#include <iostream>
using namespace std;

class Fecha{
	public:
		Fecha();
		Fecha(long);
	void imprimir();
		private:
		int dia, mes, anio;
};

class Venta{
	public:
		Venta(Fecha, int);
		void imprimir();
	private:
		Fecha fecha;
		int total;
};

Fecha::Fecha(){
	anio = 1900;
	mes = 1;
	dia =1;
}

Fecha::Fecha(long _fecha){
	anio = int(_fecha/10000);
	mes = int((_fecha-anio*10000)/100);
	dia = int(_fecha-(anio*10000)-(mes*100));
}

void Fecha::imprimir(){
	cout<<dia<<"/"<<mes<<"/"<<anio;
}

Venta::Venta(Fecha _fecha, int _total){
	fecha = _fecha;
	total = _total;
}

void Venta::imprimir(){
	cout<<"Fecha: ";
	fecha.imprimir();
	cout<<" Total: "<<total<<endl;
}

int main(){
	Fecha fecha2 = Fecha(20231114);
	fecha2.imprimir();
	cout<<endl;
	Venta venta = Venta(fecha2, 10000);
	venta.imprimir();
	return 0;
}
