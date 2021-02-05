# Notas:
Programa de consola, para trabajar con fs, consola, colors y yargs (implementacion para
manejar los parametros).

La idea es pasar por parametro la base a la cual multiplicar n veces (parametro -h para definirlo o un default en caso de no especificar) y por ultimo el parametro l para definir si listar o no el resultado en la consola.


```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla del multiplicar      [number] [required]
  -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
  -h, --hasta    Hasta cuantos multiplicar                [number] [default: 10]
```