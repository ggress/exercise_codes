# Ejemplo de aplicación Python en contenedores (nginx - flask - mysql)

Crear Entorno Virtual de Python

Para probar la app de manera local es mejor crear un entorno virtual de python.
Desde la versión 3.4 en adelante

python -m venv venv

Crea un directorio llamado venv, en el se guarda todo el ambiente despues para activarlo

En Windows con PowerShell ejecutamos:

```bash
.\venv\Scripts\Activate.ps1
```

```bash
docker compose up -d
```

```bash
docker compose ps
```

```bash
curl localhost:80
```

```bash
curl localhost:80\blog
```

```bash
docker compose down
```
