#!/usr/bin/env node
var p=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var L=Object.prototype.hasOwnProperty;var R=(t,e)=>()=>(t&&(e=t(t=0)),e);var N=(t,e)=>{for(var s in e)p(t,s,{get:e[s],enumerable:!0})},J=(t,e,s,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of H(e))!L.call(t,i)&&i!==s&&p(t,i,{get:()=>e[i],enumerable:!(r=I(e,i))||r.enumerable});return t};var U=t=>J(p({},"__esModule",{value:!0}),t);var S={};N(S,{preview:()=>g,renderui:()=>z,screen:()=>c,sendButton:()=>k});import n from"blessed";var G,c,u,de,m,pe,M,me,B,ge,W,k,g,X,z,O=R(()=>{G=`Lorem ipsum dolor sit amet,
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

Etiam eu rutrum nunc, a eleifend ante. Fusce pharetra purus nec ex placerat pharetra. Aenean auctor, enim vitae sollicitudin rutrum, risus nulla auctor lacus, vel cursus ligula tellus eget nunc. Vestibulum feugiat dictum sem, sit amet auctor orci pulvinar a. Pellentesque at sem dui. Nullam sit amet turpis lacinia, ullamcorper orci sit amet, fringilla elit. Quisque facilisis pellentesque enim, nec vulputate leo malesuada quis. Proin congue ipsum sed aliquet pretium. Etiam placerat vehicula purus vitae malesuada. Suspendisse ullamcorper, quam vel vestibulum consectetur, lectus nibh fringilla velit, at dignissim mauris ex vel justo. Cras volutpat euismod erat, sit amet faucibus lorem gravida id. Sed dapibus nibh ac lectus sagittis, vel efficitur lorem fermentum. Nullam cursus dolor et luctus faucibus. Nullam id gravida nunc.`,c=n.screen({smartCSR:!0}),u=n.form({parent:c,width:"50%",height:"100%",scrollable:!0,keys:!0,vi:!0,mouse:!0,scrollbar:{style:{fg:"white",bg:"blue"}}}),de=n.text({parent:u,top:1,left:2,content:"M\xE9todo:"}),m=n.list({parent:u,top:2,left:2,width:"96%",height:3,keys:!0,mouse:!0,autoCommandKeys:!0,border:{type:"line"},style:{item:{fg:"white",bg:"black",hover:{bg:"green"}},selected:{bg:"green"}},items:["GET","POST","PUT","DELETE"]}),pe=n.text({parent:u,top:6,left:2,content:"URL:"}),M=n.textbox({parent:u,top:7,left:2,width:"96%",height:3,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),me=n.text({parent:u,top:10,left:2,content:"Headers:"}),B=n.textarea({parent:u,top:11,left:2,width:"96%",height:8,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),ge=n.text({parent:u,top:21,left:2,content:"Body:"}),W=n.textarea({parent:u,top:22,left:2,width:"96%",height:10,vi:!0,keys:!0,mouse:!0,border:{type:"line"},style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),k=n.button({parent:u,top:34,left:"center",width:10,height:3,content:"Enviar",border:{type:"line"},vi:!0,keys:!0,mouse:!0,style:{fg:"white",bg:"black",focus:{border:{fg:"green"}}}}),g=n.box({parent:c,left:"50%-1",width:"50%",height:"100%",border:{type:"line"},style:{fg:"white",bg:"black"},scrollable:!0,keys:!0,vi:!0,mouse:!0,scrollbar:{style:{bg:"green",fg:"green"}}}),X=async()=>{let t=m.options?.items?m.options.items[m.selected]:"GET",e=M.getValue(),s=B.getValue(),r=W.getValue(),i={method:t,url:e,headers:s,body:r};g.setContent(`hola marco ${Date.now()}
 ${JSON.stringify(i,null,2)}`)},z=()=>{k.on("press",X),c.key(["escape","q","C-c"],()=>process.exit(0)),g.setContent(G),c.render()}});var V={call:async t=>{console.debug("calling api");let e={data:null},s=null;return e=fetch(t.url,{method:t.type}),e},save:()=>"save",delete:()=>"delete"},f=V;import C from"chalk";import _ from"cli-table3";import{stdout as j}from"process";import a from"chalk";import D from"cli-table3";var F=async t=>{let e=new D({head:[a.white("URL"),a.white("Status")],colWidths:[80,18]});t.forEach(async(s,r)=>{if(s.status==="rejected")e.push([a.blue(r),a.red(s.status)]);else{let i;s.value.status==="Error"?i=a.red:s.value.status>=200&&s.value.status<300?i=a.green:i=a.yellow,e.push([a.blue(s.value.url),i(`${s.value.status} ${s.value.statusText}`)])}}),console.log(`
`+a.bold(`Requesting ${t.length} URLs:`)+`
`),console.log(e.toString())},b=async(t,e)=>{for(let s=0;s<e;s++){let r=[];for(let d of t)r.push(fetch(d));let i=await Promise.allSettled(r);F(i)}};import{Option as l,program as $}from"commander";var v={name:"insomnie",version:"1.1.4",description:"insomnie is a rest client for the terminal (TUI) ",type:"module",main:"./insomnie.js",module:"./insomnie.js",private:!1,engines:{node:">=20",npm:">=10.7"},scripts:{test:'echo "Error: no test specified" && exit 1',buildInline:"esbuild index.ts --bundle --platform=node --minify --packages=external --outfile=insomnie.js",build:"node build.mjs prod","build:dev":"node build.mjs dev",watch:"nodemon --exec 'npm run build:dev' -e ts,mjs,json --ignore insomnie.mjs",changelog:"git cliff > changelog.md","changelog:patch":"git cliff --bump patch -o changelog.md","changelog:minor":"git cliff --bump minor -o changelog.md","docs:dev":"vitepress dev docs --host","docs:build":"vitepress build docs","docs:preview":"vitepress preview docs","release:docs":"node bin/generate_version.js && npm run docs:build && cp version.json docs/.vitepress/dist/"},bin:{insomnie:"./insomnie.js"},keywords:["rest","rest client","tui","cli","http","client"],author:"Marco A. Gallegos Loaeza",license:"GPL-3.0-only",repository:{type:"git",url:"git+https://github.com/marco-gallegos/insomnie"},homepage:"https://github.com/marco-gallegos/insomnie",dependencies:{blessed:"^0.1.81",chalk:"^5.3.0","cli-table3":"^0.6.5",commander:"^12.1.0",figlet:"^1.8.0",zustand:"^5.0.0"},devDependencies:{"@types/blessed":"^0.1.25",esbuild:"^0.24.0",nodemon:"^3.1.7",vitepress:"^1.4.1"}};var y=(t=!1)=>v.version;var q=t=>$.version(y(!0)).description("A Simple terminal CLI and TUI local first http client for developers.").addOption(new l("-chk, --check-health","this enables check health mode to make a helth check on given urls.")).addOption(new l("-tr, --tries <number>","Max try number (on chk is how many times is executed).").default(10)).addOption(new l("-u, --url <url>","URL to hit, full parth or base url to work with  -up - url path")).addOption(new l("-p, --urlpath <url>","a single ppath or a csv list of url paths to hit (path is a url complement <request_url> = <url> + <path>)")).addOption(new l("-H, --headers <headers>","Headers in JSON format")).addOption(new l("-B, --body <body>","Request body")).addOption(new l("-t, --type <type>","request type GET, POST, ...").choices(["get","post","put","delete","patch","gql"])).addOption(new l("-rq, --request <id>","request to execute")).addOption(new l("-s, --save","Save request.")).addOption(new l("-d, --delete <id>","Delete the request with id:<id>")).addOption(new l("-v, --view <id>","Show all datails freom the request with id:<id>")).addOption(new l("-l, --list","Show all requests according current space.")).parse(t);var w=(t,e)=>e?e.split(",").map(r=>r.trim()).map(r=>`${t}${r}`):[t],x=t=>{let e={isJson:!1,isXml:!1,isHtml:!1,isText:!1,isBinary:!1},s=t.get("content-type");return e.isJson=s?.includes("json"),e.isXml=s?.includes("xml"),e.isHtml=s?.includes("html"),e.isText=s?.includes("text"),e};var K=q(process.argv),o=K.opts(),T=o.checkHealth??!1,Q=process.argv.length>2;o.type==="gql"&&(console.debug("Graphql is not implemented  :c (not yet 7u7)"),process.exit(0));if(T){let t=w(o.url,o.urlpath);await b(t,o.tries),process.exit(0)}if(Q&&!T){let t={url:o.url,type:o.type,headers:o.headers?JSON.parse(o.headers):{},body:o.body?JSON.parse(o.body):{}},e=null,s=null;try{e=await f.call(t)}catch(E){s=E}s!==null&&(console.log("Error Calling API",s),process.exit(1)),console.log("parsing response data ...");let r=null,i=x(e.headers);i.isJson&&(r=await e.json()),(i.isHtml||i.isXml||i.isText)&&(r=await e.text()),console.log("printing response data ...");let d={status:e.status,data:r},h=new _({style:{border:[],header:[]},head:[C.white("State")],wordWrap:!0,colWidths:[j.columns<50?50:Math.floor(j.columns/2)]}),P={url:t.url,status:d.status};h.push([JSON.stringify(P,null,1)]),console.log(h.toString()),console.log(C.yellow("Response Body:")),console.log(JSON.stringify(d.data,null,1))}else{let t=(O(),U(S));console.log("Rendering ================>"),t.renderui(),process.exit(0)}
