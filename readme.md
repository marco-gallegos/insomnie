# Insomnie

Insomnie is the french translation of insomnio from the spanish and is a kind of joke about the rest translation to the spanish (descansar).


## what i want to do

### requirement - spanish alert !!

quiero un cliente rest que pueda funcionar tanto de forma global como de forma local, es decir por cada proyecto tener una configuracion "local" dicho cliente rest debe tener las siguientes caracteristicas inspiradas por clientes grandes como (postman, postwoman o insomnia) pero sobre una interfaz de texto (TUI).

- uso de variables de entorno
- previsualizacion rapida de resultados
- uso de colores en estados
- workspaces
- workspace general
- carpetas o conjuntos de peticiones
- la configuracion de la ultima ejecucion se guarda para recuperarla en la siguiente ejecucion
- configuraciones de los headers
- support for rest and gql 


ademas quiero incluir las siguientes caracteristicas

- es un cli y tiene una tui
- como cli quiero poder correr un conjunto de peticiones o todo el workspace/proyecto
- el tui solo traabaja con una peticion
- tanto en tui como en cli debo poder tener un historial segun la peticion
- hotkeys para ejecutar las peticiones rapidas
- el tui debe tener un api para poder solicitarle de forma externa que corra de forma automatica la peticion (eje cuando el back se reconstruya incluir un curl al final que le solicite al tui hacer fetch)
- como cli debo poder exportar y importar mis endpoints locales a formatos tipo json o similares para ser compatible con otros sistemas
- poder guardar de forma local (por proyecto) los endpoints del proyecto
- la ejecucion batch de peticiones guarda el ultimo estado en el historial
- el tui trabaja con una peticion a la vez


caracteristicas que veo posibles y seria cool tener pero no son esenciales

- performance analisis tipo jmeter basado en multiples peticiones


requisitos o limitaciones tecnicas

- usar alguna sql like db
- pensar en la reusabilidad
- debo poder sustituir la db que se usa


#### MVP

the tui works without the cli with local config saving.

- tui can make requests and show the result
- tui can save and load requests
- tui works per project
- the code is easy to extend

