#!/usr/bin/env node
import blessed from "blessed"
import axios from 'axios'

// Crear la pantalla
const screen = blessed.screen({
    smartCSR: true,
});

//// Crear el cuadro con scroll
//const scrollBox = blessed.box({
    //parent: screen,
    //top: 'center',
    //left: 'center',
    //width: '50%',
    //height: '50%',
    //border: {
        //type: 'line',
    //},
    //scrollable: true,  // Habilitar scroll
        //keys:true,
        //vi: true,
    //scrollbar: {
        //bg: 'white',
        //fg: 'black',
    //},
//})


//const dropdown = blessed.list({
    //parent: screen,
    //top: 'top',
    //left: 'center',
    //width: '50%',
    //height: '5%',
    //style: {
        //bg: 'green'
    //},
    //vi:true,
    //keys: true,
    //mouse: true,
    //items: [
        //"red",
        //"black",
        //"blue",
        //"bed",
        //"white",
    //]
//})

//// Contenido de ejemplo (lorem ipsum)
//const loremText:string = `Lorem ipsum dolor sit amet,
//consectetur adipiscing elit.
//Nulla sed interdum nisi. Sed pharetra libero id nunc tristique, nec scelerisque dui sagittis.
//Nunc eu hendrerit lacus. Pellentesque ut tristique risus. Proin euismod lacus ligula, eu ullamcorper justo luctus a.
//Mauris et sapien ligula. In pellentesque sem a finibus interdum.
//Integer condimentum nec eros at placerat. Curabitur consequat convallis sem ac auctor. Etiam non dapibus sem.
//Vestibulum rutrum fringilla turpis, et scelerisque elit convallis in.
//Cras tincidunt rhoncus metus nec eleifend. Aliquam erat volutpat. Sed auctor fringilla pharetra. Aenean non mi ante.

//Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
//Sed ut lacus id magna commodo vestibulum. Donec feugiat, felis sit amet laoreet facilisis, arcu velit tristique enim, nec volutpat lectus metus nec velit.
//Phasellus aliquet, nisl et sollicitudin dapibus, ex lectus tincidunt tellus, sed congue dolor risus at risus. Vestibulum placerat mauris non leo volutpat efficitur.
//Fusce bibendum iaculis tincidunt. Nam eget consequat lectus. Sed tristique odio et sem elementum, eget interdum velit pharetra. Nulla facilisi. Curabitur ac mauris consectetur, feugiat mauris quis, consequat metus. Integer vitae magna non dolor aliquet lobortis eu eget mauris.

//Suspendisse efficitur arcu at nibh finibus, id vulputate turpis fermentum. Aenean nec nibh eu lectus vehicula placerat. Donec id placerat leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pellentesque, mi eget auctor varius, erat odio ultrices quam, in convallis odio mi in urna. Cras sodales tempus eros id viverra. Sed vulputate congue turpis, vitae scelerisque tellus efficitur ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

//Etiam eu rutrum nunc, a eleifend ante. Fusce pharetra purus nec ex placerat pharetra. Aenean auctor, enim vitae sollicitudin rutrum, risus nulla auctor lacus, vel cursus ligula tellus eget nunc. Vestibulum feugiat dictum sem, sit amet auctor orci pulvinar a. Pellentesque at sem dui. Nullam sit amet turpis lacinia, ullamcorper orci sit amet, fringilla elit. Quisque facilisis pellentesque enim, nec vulputate leo malesuada quis. Proin congue ipsum sed aliquet pretium. Etiam placerat vehicula purus vitae malesuada. Suspendisse ullamcorper, quam vel vestibulum consectetur, lectus nibh fringilla velit, at dignissim mauris ex vel justo. Cras volutpat euismod erat, sit amet faucibus lorem gravida id. Sed dapibus nibh ac lectus sagittis, vel efficitur lorem fermentum. Nullam cursus dolor et luctus faucibus. Nullam id gravida nunc.`;

//// Agregar el contenido al cuadro con scroll
//scrollBox.setContent(loremText);

////scrollBox.focus()
//dropdown.focus()


////
//dropdown.on('select', (element, keySelected) => {
    //console.debug(ch)
//})


//// Hacer que la pantalla sea redimensionable
//screen.key(['escape', 'q', 'C-c'], () => {
    //return process.exit(0);
//});

//// Renderizar la pantalla
//screen.render();
//

//upside code is working


// Crear la columna izquierda (formulario)
const form = blessed.form({
  parent: screen,
  width: '50%',
  height: '100%',
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: 'black',
  },
});

const methodLabel = blessed.text({
  parent: form,
  top: 1,
  left: 2,
  content: 'Método:',
});

const methodList = blessed.list({
  parent: form,
  top: 2,
  left: 2,
  width: '96%',
  height: 3,
  keys: true,
  mouse: true,
  autoCommandKeys: true,
  border: {
    type: 'line',
  },
  style: {
    item: {
      fg: 'white',
      bg: 'black',
      hover: {
        bg: 'green',
      },
    },
    selected: {
      bg: 'green',
    },
  },
    items: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
],
});

const urlLabel = blessed.text({
  parent: form,
  top: 6,
  left: 2,
  content: 'URL:',
});

const urlInput = blessed.textbox({
  parent: form,
  top: 7,
  left: 2,
  width: '96%',
  height: 3,
    vi:true,
    keys: true,
    mouse: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: 'black',
    focus: {
      border: {
        fg: 'green',
      },
    },
  },
});

const headersLabel = blessed.text({
  parent: form,
  top: 10,
  left: 2,
  content: 'Headers:',
});

const headersInput = blessed.textarea({
  parent: form,
  top: 11,
  left: 2,
  width: '96%',
  height: 8,
    vi:true,
    keys: true,
    mouse: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: 'black',
    focus: {
      border: {
        fg: 'green',
      },
    },
  },
});

const bodyLabel = blessed.text({
  parent: form,
  top: 21,
  left: 2,
  content: 'Body:',
});

const bodyInput = blessed.textarea({
  parent: form,
  top: 22,
  left: 2,
  width: '96%',
  height: 10,
    vi:true,
    keys: true,
    mouse: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: 'black',
    focus: {
      border: {
        fg: 'green',
      },
    },
  },
});

const sendButton = blessed.button({
  parent: form,
  top: 34,
  left: 'center',
  width: 10,
  height: 3,
  content: 'Enviar',
  border: {
    type: 'line',
  },
    vi:true,
    keys: true,
    mouse: true,
  style: {
    fg: 'white',
    bg: 'black',
    focus: {
      border: {
        fg: 'green',
      },
    },
  },
});

// Crear la columna derecha (vista previa)
const preview = blessed.box({
  parent: screen,
  left: '50%+1',
  width: '50%-1',
  height: '100%',
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: 'black',
  },
});


// Función para realizar la petición y mostrar los resultados
const makeRequest = async () => {
    const method:string = !!methodList.options?.items ? methodList.options.items[methodList.selected]:'GET'
    const url:string = urlInput.getValue();
    const headers = headersInput.getValue();
    const body = bodyInput.getValue();

    //console.debug({
        //method,
        //url,
        //headers,
        //body
    //})

    try {
        const response = await axios({
            method,
            url,
            headers: headers ? JSON.parse(headers) : null,
            data: body ? JSON.parse(body):null,
        })

        preview.setContent(JSON.stringify(response.data, null, 2));
    } catch (error) {
        preview.setContent(`Error: ${error.message}`);
    }

    screen.render();
}

// Asociar la función al evento "click" del botón
sendButton.on('press', makeRequest);

// Manejar eventos de teclado
screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

// Mostrar la interfaz
screen.render();
