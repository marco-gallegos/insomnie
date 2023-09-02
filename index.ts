#!/usr/bin/env node
import { screen, sendButton, preview } from "./ui"


// Función para realizar la petición y mostrar los resultados
const makeRequest = async () => {
    preview.setContent(`hola marco 7u7 ${Date.now()}`)
    screen.render()
    //const method:string = !!methodList.options?.items ? methodList.options.items[methodList.selected]:'GET'
    //const url:string = urlInput.getValue();
    //const headers = headersInput.getValue();
    //const body = bodyInput.getValue();

    ////console.debug({
        ////method,
        ////url,
        ////headers,
        ////body
    ////})

    //try {
        //const response = await axios({
            //method,
            //url,
            //headers: headers ? JSON.parse(headers) : null,
            //data: body ? JSON.parse(body):null,
        //})

        //preview.setContent(JSON.stringify(response.data, null, 2));
    //} catch (error) {
        //preview.setContent(`Error: ${error.message}`);
    //}

    //screen.render();
}


// Asociar la función al evento "click" del botón
sendButton.on('press', makeRequest);

// Manejar eventos de teclado
screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

// Mostrar la interfaz
screen.render();
