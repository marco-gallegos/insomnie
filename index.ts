#!/usr/bin/env node
const blessed = require('blessed');

// Crear la pantalla
const screen = blessed.screen({
  smartCSR: true,
});

// Crear el cuadro con scroll
const scrollBox = blessed.box({
  parent: screen,
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  border: {
    type: 'line',
  },
  scrollable: true,  // Habilitar scroll
    keys:true,
    vi: true,
  scrollbar: {
    bg: 'white',
    fg: 'black',
  },
});

// Contenido de ejemplo (lorem ipsum)
const loremText = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Nulla sed interdum nisi. Sed pharetra libero id nunc tristique, nec scelerisque dui sagittis.
Nunc eu hendrerit lacus. Pellentesque ut tristique risus. Proin euismod lacus ligula, eu ullamcorper justo luctus a.
Mauris et sapien ligula. In pellentesque sem a finibus interdum.
Integer condimentum nec eros at placerat. Curabitur consequat convallis sem ac auctor. Etiam non dapibus sem.
Vestibulum rutrum fringilla turpis, et scelerisque elit convallis in.
Cras tincidunt rhoncus metus nec eleifend. Aliquam erat volutpat. Sed auctor fringilla pharetra. Aenean non mi ante.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
Sed ut lacus id magna commodo vestibulum. Donec feugiat, felis sit amet laoreet facilisis, arcu velit tristique enim, nec volutpat lectus metus nec velit.
Phasellus aliquet, nisl et sollicitudin dapibus, ex lectus tincidunt tellus, sed congue dolor risus at risus. Vestibulum placerat mauris non leo volutpat efficitur.
Fusce bibendum iaculis tincidunt. Nam eget consequat lectus. Sed tristique odio et sem elementum, eget interdum velit pharetra. Nulla facilisi. Curabitur ac mauris consectetur, feugiat mauris quis, consequat metus. Integer vitae magna non dolor aliquet lobortis eu eget mauris.

Suspendisse efficitur arcu at nibh finibus, id vulputate turpis fermentum. Aenean nec nibh eu lectus vehicula placerat. Donec id placerat leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pellentesque, mi eget auctor varius, erat odio ultrices quam, in convallis odio mi in urna. Cras sodales tempus eros id viverra. Sed vulputate congue turpis, vitae scelerisque tellus efficitur ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Etiam eu rutrum nunc, a eleifend ante. Fusce pharetra purus nec ex placerat pharetra. Aenean auctor, enim vitae sollicitudin rutrum, risus nulla auctor lacus, vel cursus ligula tellus eget nunc. Vestibulum feugiat dictum sem, sit amet auctor orci pulvinar a. Pellentesque at sem dui. Nullam sit amet turpis lacinia, ullamcorper orci sit amet, fringilla elit. Quisque facilisis pellentesque enim, nec vulputate leo malesuada quis. Proin congue ipsum sed aliquet pretium. Etiam placerat vehicula purus vitae malesuada. Suspendisse ullamcorper, quam vel vestibulum consectetur, lectus nibh fringilla velit, at dignissim mauris ex vel justo. Cras volutpat euismod erat, sit amet faucibus lorem gravida id. Sed dapibus nibh ac lectus sagittis, vel efficitur lorem fermentum. Nullam cursus dolor et luctus faucibus. Nullam id gravida nunc.`;

// Agregar el contenido al cuadro con scroll
scrollBox.setContent(loremText);

scrollBox.focus()

// Hacer que la pantalla sea redimensionable
screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0);
});

// Renderizar la pantalla
screen.render();
