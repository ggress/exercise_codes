import threading
import time

class Cine:
    def __init__(self, filas, columnas):
        self.filas = filas
        self.columnas = columnas
        self.sala = [[None for _ in range(columnas)] for _ in range(filas)]  # None indica que el asiento está disponible
        self.lock = threading.Lock()

    def mostrar_sala(self):
        with self.lock:
            print("\nEstado actual de la sala:")
            for fila in self.sala:
                print(" ".join(["-" if asiento is None else "X" for asiento in fila]))

    def intentar_reservar(self, fila, columna, usuario):
        with self.lock:
            if fila < 0 or fila >= self.filas or columna < 0 or columna >= self.columnas:
                return f"Usuario {usuario}: El asiento ({fila}, {columna}) no es válido."

            if self.sala[fila][columna] is None:
                self.sala[fila][columna] = usuario  # Bloquea temporalmente
                print(f"Usuario {usuario} ha bloqueado temporalmente el asiento ({fila}, {columna}).")
                return True
            else:
                return f"Usuario {usuario}: El asiento ({fila}, {columna}) ya está reservado o bloqueado."

    def confirmar_reserva(self, fila, columna, usuario):
        with self.lock:
            if self.sala[fila][columna] == usuario:
                self.sala[fila][columna] = "Reservado"
                print(f"Usuario {usuario} ha confirmado la reserva del asiento ({fila}, {columna}).")
                return True
            else:
                return f"Usuario {usuario}: No puedes confirmar el asiento ({fila}, {columna}), no lo bloqueaste."

    def liberar_asiento(self, fila, columna, usuario):
        with self.lock:
            if self.sala[fila][columna] == usuario:
                self.sala[fila][columna] = None
                print(f"Usuario {usuario} ha liberado el asiento ({fila}, {columna}) tras no confirmar la reserva.")


def proceso_reserva(cine, fila, columna, usuario, tiempo_reserva):
    resultado = cine.intentar_reservar(fila, columna, usuario)
    if resultado is True:
        # Simular tiempo de espera con una reserva confirmable
        start_time = time.time()
        while time.time() - start_time < tiempo_reserva:  # Tiempo de bloqueo definido por usuario
            time.sleep(1)
        if cine.confirmar_reserva(fila, columna, usuario) is not True:
            cine.liberar_asiento(fila, columna, usuario)
    else:
        print(resultado)


if __name__ == "__main__":
    cine = Cine(10, 20)

    # Simular usuarios intentando reservar asientos
    threads = []
    # Usuario1 tarda demasiado en confirmar
    threads.append(threading.Thread(target=proceso_reserva, args=(cine, 2, 5, "Usuario1", 5)))
    # Usuario2 tiene una oportunidad posterior de reservar
    time.sleep(1)  # Simular que Usuario2 intenta después de Usuario1
    threads.append(threading.Thread(target=proceso_reserva, args=(cine, 2, 5, "Usuario2", 120)))

    for thread in threads:
        thread.start()

    for thread in threads:
        thread.join()

    cine.mostrar_sala()
