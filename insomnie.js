#!/usr/bin/env node
var p=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var P=Object.prototype.hasOwnProperty;var N=(e,t)=>()=>(e&&(t=e(e=0)),t);var R=(e,t)=>{for(var r in t)p(e,r,{get:t[r],enumerable:!0})},T=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of C(t))!P.call(e,a)&&a!==r&&p(e,a,{get:()=>t[a],enumerable:!(s=O(t,a))||s.enumerable});return e};var E=e=>T(p({},"__esModule",{value:!0}),e);var y={};R(y,{preview:()=>h,renderui:()=>J,screen:()=>d,sendButton:()=>v});import i from"blessed";var D,d,n,ee,m,te,H,se,U,re,V,v,h,$,J,q=N(()=>{D=`Lorem ipsum dolor sit amet,
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

Etiam eu rutrum nunc, a eleifend ante. Fusce pharetra purus nec ex placerat pharetra. Aenean auctor, enim vitae sollicitudin rutrum, risus nulla auctor lacus, vel cursus ligula tellus eget nunc. Vestibulum feugiat dictum sem, sit amet auctor orci pulvinar a. Pellentesque at sem dui. Nullam sit amet turpis lacinia, ullamcorper orci sit amet, fringilla elit. Quisque facilisis pellentesque enim, nec vulputate leo malesuada quis. Proin congue ipsum sed aliquet pretium. Etiam placerat vehicula purus vitae malesuada. Suspendisse ullamcorper, quam vel vestibulum consectetur, lectus nibh fringilla velit, at dignissim mauris ex vel justo. Cras volutpat euismod erat, sit amet faucibus lorem gravida id. Sed dapibus nibh ac lectus sagittis, vel efficitur lorem fermentum. Nullam cursus dolor et luctus faucibus. Nullam id gravida nunc.`,d=i.screen({smartCSR:!0}),n=i.form({parent:d,width:"50%",height:"100%",scrollable:!0,keys:!0,vi:!0,mouse:!0,scrollbar:{style:{fg:"white",bg:"blue"}}}),ee=i.text({parent:n,top:1,left:2,content:"M\xE9todo:"}),m=i.list({parent:n,top:2,left:2,width:"96%",height:3,keys:!0,mouse:!0,autoCommandKeys:!0,border:{type:"line"},style:{item:{fg:"white",bg:"black",hover:{bg:"green"}},selected:{bg:"green"}},items:["GET","POST","PUT","DELETE"]}),te=i.text({parent:n,top:6,left:2,content:"URL:"}),H=i.textbox({parent:n,top:7,left:2,width:"96%",height:3,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),se=i.text({parent:n,top:10,left:2,content:"Headers:"}),U=i.textarea({parent:n,top:11,left:2,width:"96%",height:8,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),re=i.text({parent:n,top:21,left:2,content:"Body:"}),V=i.textarea({parent:n,top:22,left:2,width:"96%",height:10,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),v=i.button({parent:n,top:34,left:"center",width:10,height:3,content:"Enviar",border:{type:"line"},vi:!0,keys:!0,mouse:!0,style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),h=i.box({parent:d,left:"50%-1",width:"50%",height:"100%",border:{type:"line"},style:{fg:"white",bg:"black"},scrollable:!0,keys:!0,vi:!0,mouse:!0,scrollbar:{style:{bg:"green",fg:"green"}}}),$=async()=>{let e=m.options?.items?m.options.items[m.selected]:"GET",t=H.getValue(),r=U.getValue(),s=V.getValue(),a={method:e,url:t,headers:r,body:s};h.setContent(`hola marco ${Date.now()}
 ${JSON.stringify(a,null,2)}`)},J=()=>{v.on("press",$),d.key(["escape","q","C-c"],()=>process.exit(0)),h.setContent(D),d.render()}});import{Option as u,program as j}from"commander";import L from"axios";var I={call:async e=>{console.debug("calling api");let t={data:null},r=null;try{t=await L({method:e.type,url:e.url})}catch(s){r=s}return{response:t,error:r}},save:()=>"save",delete:()=>"delete"},b=I;import w from"chalk";import A from"cli-table3";import{stdout as B}from"process";import o from"chalk";import M from"cli-table3";var F=async e=>{let t=new M({head:[o.white("URL"),o.white("Status")],colWidths:[80,18]});e.forEach(async(r,s)=>{if(r.status==="rejected")t.push([o.blue(s),o.red(r.status)]);else{let a;r.value.status==="Error"?a=o.red:r.value.status>=200&&r.value.status<300?a=o.green:a=o.yellow,t.push([o.blue(r.value.url),a(`${r.value.status} ${r.value.statusText}`)])}}),console.log(`
`+o.bold(`Requesting ${e.length} URLs:`)+`
`),console.log(t.toString())},f=async(e,t)=>{for(let r=0;r<t;r++){let s=[];for(let c of e)s.push(fetch(c));let a=await Promise.allSettled(s);F(a)}};var x=j.version("1.0.0").description("Una aplicaci\xF3n CLI simple para hacer peticiones http.").addOption(new u("-chk, --check-health","this enables check health mode to make a helth check on given urls.")).addOption(new u("-tr, --tries <number>","Max try number (on chk is how many times is executed).").default(10)).addOption(new u("-u, --url <url>","URL to hit, full parth or base url to work with  -up - url path")).addOption(new u("-p, --urlpath <url>","a single ppath or a csv list of url paths to hit (path is a url complement <request_url> = <url> + <path>)")).addOption(new u("-H, --headers <headers>","Headers in JSON format")).addOption(new u("-B, --body <body>","Request body")).addOption(new u("-t, --type <type>","request type GET, POST, ...").choices(["get","post","put","delete","patch","gql"])).addOption(new u("-rq, --request <id>","request to execute")).addOption(new u("-s, --save","Save request.")).addOption(new u("-d, --delete <id>","Delete the request with id:<id>")).addOption(new u("-v, --view <id>","Show all datails freom the request with id:<id>")).addOption(new u("-l, --list","Show all requests according current space."));x.parse(process.argv);var l=x.opts(),k=l.checkHealth??!1,G=process.argv.length>2;var W=(e,t)=>t?t.split(",").map(s=>s.trim()).map(s=>`${e}${s}`):[e];if(k){let e=W(l.url,l.urlpath);await f(e,l.tries),process.exit(0)}l.type==="gql"&&(console.debug("Graphql is not implemented  :c (not yet 7u7)"),process.exit(0));if(G&&!k){let e={url:l.url,type:l.type,headers:l.headers?JSON.parse(l.headers):{},body:l.body?JSON.parse(l.body):{}},t={save:!!l.save};b.call(e).then(s=>{let a=s.response?.data?s.response.data:s.error?.response?.data,c={status:s.error?s.error.status:s.response?.status,data:a?.length>500?a.slice(0,500)+"...":a,errorMessage:s.error?.message,errorStatus:s.error?.status},g=new A({head:[w.white("State"),w.white("Body")],colWidths:[50,Math.floor(B.columns-53)]}),S={url:e.url,status:c.status,errorMessage:c.errorMessage,errorStatus:c.errorStatus};g.push([JSON.stringify(S,null,1),JSON.stringify(c.data,null,1)]),console.log(g.toString())}).catch(s=>{})}else{let e=(q(),E(y));console.log("Rendering ================>"),e.renderui()}
