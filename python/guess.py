from random import seed
from random import randint

def main():
    maxvalue = 100
    valor = randint(1,maxvalue)
    while True:
        number = int(input('Elige un numero entre 1 y 100: '))
        if (number > valor):
            print('Muy Alto...')
        elif (number < valor):
            print('Muy bajo')
        else:
            break
    print(f'!Correcto¡')

if __name__ == '__main__':
    main()