#!/usr/bin/env node
var C=Object.create;var d=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var L=(e,t)=>()=>(e&&(t=e(e=0)),t);var R=(e,t)=>{for(var s in t)d(e,s,{get:t[s],enumerable:!0})},f=(e,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of P(t))!E.call(e,u)&&u!==s&&d(e,u,{get:()=>t[u],enumerable:!(r=N(t,u))||r.enumerable});return e};var p=(e,t,s)=>(s=e!=null?C(I(e)):{},f(t||!e||!e.__esModule?d(s,"default",{value:e,enumerable:!0}):s,e)),T=e=>f(d({},"__esModule",{value:!0}),e);var w={};R(w,{preview:()=>h,renderui:()=>j,screen:()=>n,sendButton:()=>y});var i,M,n,l,G,m,$,V,K,F,Q,J,y,h,H,j,S=L(()=>{i=p(require("blessed"),1),M=`Lorem ipsum dolor sit amet,
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

Etiam eu rutrum nunc, a eleifend ante. Fusce pharetra purus nec ex placerat pharetra. Aenean auctor, enim vitae sollicitudin rutrum, risus nulla auctor lacus, vel cursus ligula tellus eget nunc. Vestibulum feugiat dictum sem, sit amet auctor orci pulvinar a. Pellentesque at sem dui. Nullam sit amet turpis lacinia, ullamcorper orci sit amet, fringilla elit. Quisque facilisis pellentesque enim, nec vulputate leo malesuada quis. Proin congue ipsum sed aliquet pretium. Etiam placerat vehicula purus vitae malesuada. Suspendisse ullamcorper, quam vel vestibulum consectetur, lectus nibh fringilla velit, at dignissim mauris ex vel justo. Cras volutpat euismod erat, sit amet faucibus lorem gravida id. Sed dapibus nibh ac lectus sagittis, vel efficitur lorem fermentum. Nullam cursus dolor et luctus faucibus. Nullam id gravida nunc.`,n=i.default.screen({smartCSR:!0}),l=i.default.form({parent:n,width:"50%",height:"100%",scrollable:!0,keys:!0,vi:!0,mouse:!0,scrollbar:{style:{fg:"white",bg:"blue"}}}),G=i.default.text({parent:l,top:1,left:2,content:"M\xE9todo:"}),m=i.default.list({parent:l,top:2,left:2,width:"96%",height:3,keys:!0,mouse:!0,autoCommandKeys:!0,border:{type:"line"},style:{item:{fg:"white",bg:"black",hover:{bg:"green"}},selected:{bg:"green"}},items:["GET","POST","PUT","DELETE"]}),$=i.default.text({parent:l,top:6,left:2,content:"URL:"}),V=i.default.textbox({parent:l,top:7,left:2,width:"96%",height:3,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),K=i.default.text({parent:l,top:10,left:2,content:"Headers:"}),F=i.default.textarea({parent:l,top:11,left:2,width:"96%",height:8,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),Q=i.default.text({parent:l,top:21,left:2,content:"Body:"}),J=i.default.textarea({parent:l,top:22,left:2,width:"96%",height:10,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),y=i.default.button({parent:l,top:34,left:"center",width:10,height:3,content:"Enviar",border:{type:"line"},vi:!0,keys:!0,mouse:!0,style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),h=i.default.box({parent:n,left:"50%-1",width:"50%",height:"100%",border:{type:"line"},style:{fg:"white",bg:"black"},scrollable:!0,keys:!0,vi:!0,mouse:!0,scrollbar:{style:{bg:"green",fg:"green"}}}),H=async()=>{let e=m.options?.items?m.options.items[m.selected]:"GET",t=V.getValue(),s=F.getValue(),r=J.getValue(),u={method:e,url:t,headers:s,body:r};h.setContent(`hola marco ${Date.now()}
 ${JSON.stringify(u,null,2)}`)},j=()=>{y.on("press",H),n.key(["escape","q","C-c"],()=>process.exit(0)),h.setContent(M),n.render()}});var a=require("commander");var v=p(require("axios"),1),D={call:async e=>{console.debug("calling api");let t={data:null},s=null;try{t=await(0,v.default)({method:e.type,url:e.url})}catch(r){s=r}return{response:t,error:s}},save:()=>"save",delete:()=>"delete"},q=D;var g=p(require("chalk"),1),k=p(require("cli-table3"),1),x=a.program.version("1.0.0").description("Una aplicaci\xF3n CLI simple para hacer peticiones http.").addOption(new a.Option("-chk, --check-health","this enables check health mode to make a helth check on given urls.")).addOption(new a.Option("-u, --url <url>","URL to hit, full parth or base url to work with  -up - url path")).addOption(new a.Option("-p, --urlpath <url>","a single ppath or a csv list of url paths to hit (path is a url complement <request_url> = <url> + <path>)")).addOption(new a.Option("-H, --headers <headers>","Headers in JSON format")).addOption(new a.Option("-B, --body <body>","Request body")).addOption(new a.Option("-t, --type <type>","request type GET, POST, ...").choices(["get","post","put","delete","patch","gql"])).addOption(new a.Option("-rq, --request <id>","request to execute")).addOption(new a.Option("-s, --save","Save request.")).addOption(new a.Option("-d, --delete <id>","Delete the request with id:<id>")).addOption(new a.Option("-v, --view <id>","Show all datails freom the request with id:<id>")).addOption(new a.Option("-l, --list","Show all requests according current space."));x.parse(process.argv);var o=x.opts();console.table(o);var _=o.checkHealth??!1,A=process.argv.length>2;if(A){let e={url:o.url,type:o.type,headers:o.headers?JSON.parse(o.headers):{},body:o.body?JSON.parse(o.body):{}},t={save:!!o.save};q.call(e).then(r=>{let u=r.response?.data?r.response.data:r.error?.response?.data,c={status:r.error?r.error.status:r.response?.status,data:u?.length>500?u.slice(0,500)+"...":u,errorMessage:r.error?.message,errorStatus:r.error?.status},b=new k.default({head:[g.default.white("State"),g.default.white("Body")],colWidths:[80,50]}),O={status:c.status,errorMessage:c.errorMessage,errorStatus:c.errorStatus};b.push([JSON.stringify(O),JSON.stringify(c.data)]),console.log(b.toString())}).catch(r=>{})}else{let e=(S(),T(w));console.log("Rendering ================>"),e.renderui()}
