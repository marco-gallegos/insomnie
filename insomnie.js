#!/usr/bin/env node
var c=Object.create;var r=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty;var b=(e,t,u,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of m(t))!p.call(e,i)&&i!==u&&r(e,i,{get:()=>t[i],enumerable:!(l=o(t,i))||l.enumerable});return e};var g=(e,t,u)=>(u=e!=null?c(d(e)):{},b(t||!e||!e.__esModule?r(u,"default",{value:e,enumerable:!0}):u,e));var s=g(require("blessed")),a=s.default.screen({smartCSR:!0}),f=s.default.box({parent:a,top:"center",left:"center",width:"50%",height:"50%",border:{type:"line"},scrollable:!0,keys:!0,vi:!0,scrollbar:{bg:"white",fg:"black"}}),n=s.default.list({parent:a,top:"top",left:"center",width:"50%",height:"5%",style:{bg:"green"},vi:!0,keys:!0,mouse:!0,items:["red","black","blue","bed","white"]}),v=`Lorem ipsum dolor sit amet,
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

Etiam eu rutrum nunc, a eleifend ante. Fusce pharetra purus nec ex placerat pharetra. Aenean auctor, enim vitae sollicitudin rutrum, risus nulla auctor lacus, vel cursus ligula tellus eget nunc. Vestibulum feugiat dictum sem, sit amet auctor orci pulvinar a. Pellentesque at sem dui. Nullam sit amet turpis lacinia, ullamcorper orci sit amet, fringilla elit. Quisque facilisis pellentesque enim, nec vulputate leo malesuada quis. Proin congue ipsum sed aliquet pretium. Etiam placerat vehicula purus vitae malesuada. Suspendisse ullamcorper, quam vel vestibulum consectetur, lectus nibh fringilla velit, at dignissim mauris ex vel justo. Cras volutpat euismod erat, sit amet faucibus lorem gravida id. Sed dapibus nibh ac lectus sagittis, vel efficitur lorem fermentum. Nullam cursus dolor et luctus faucibus. Nullam id gravida nunc.`;f.setContent(v);n.focus();n.on("select",(e,t)=>{console.debug(ch)});a.key(["escape","q","C-c"],()=>process.exit(0));a.render();
