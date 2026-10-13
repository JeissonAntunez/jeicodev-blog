const {test}=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const os=require("node:os");
const ts=require("typescript");
test("publicación: revisión, fecha, categorías, demos y rutas",()=>{
 const root=process.cwd(); const temp=fs.mkdtempSync(path.join(os.tmpdir(),"blog-publication-")); const dir=path.join(temp,"content","posts"); fs.mkdirSync(dir,{recursive:true});
 const previousCwd=process.cwd(); const previousNode=process.env.NODE_ENV; const previousDemo=process.env.SHOW_DEMO_CONTENT;
 const loader=require.extensions[".ts"];
 require.extensions[".ts"]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
 const write=(slug,extra={})=>{const data={title:"Prueba",excerpt:"Extracto",date:"2020-01-01T09:00:00-05:00",author:"Autor",category:"tecnologia",status:"published",reviewed:true,...extra};fs.writeFileSync(path.join(dir,slug+".mdx"),"---\n"+Object.entries(data).map(([k,v])=>k+": "+JSON.stringify(v)).join("\n")+"\n---\n\nContenido de prueba");};
 try {
 process.chdir(temp); process.env.NODE_ENV="production"; delete process.env.SHOW_DEMO_CONTENT;
 write("publicado");write("borrador",{status:"draft"});write("sin-revisar",{reviewed:false});write("futuro",{date:"2999-01-01T09:00:00-05:00"});write("fecha-invalida",{date:"no-date"});write("categoria-invalida",{category:"otra"});write("demo",{demo:true});
 const {getAllPosts,getPostSource}=require(path.join(root,"lib","posts.ts"));
 assert.deepEqual(getAllPosts().map(p=>p.slug),["publicado"]);
 for(const slug of ["borrador","sin-revisar","futuro","fecha-invalida","categoria-invalida","demo","../secret","no-existe"]) assert.equal(getPostSource(slug),null,slug);
 const scheduled=Date.now()+60000;write("programado",{date:new Date(scheduled).toISOString()}); assert.equal(getPostSource("programado"),null);
 const now=Date.now;try{Date.now=()=>scheduled;assert.ok(getPostSource("programado"));}finally{Date.now=now;}
 process.env.SHOW_DEMO_CONTENT="true"; assert.ok(getPostSource("demo"));
 assert.ok(getPostSource("publicado").meta.minutes>=1);
 }finally{
 process.chdir(previousCwd); if(previousNode===undefined)delete process.env.NODE_ENV;else process.env.NODE_ENV=previousNode;
 if(previousDemo===undefined)delete process.env.SHOW_DEMO_CONTENT;else process.env.SHOW_DEMO_CONTENT=previousDemo;
 if(loader)require.extensions[".ts"]=loader;else delete require.extensions[".ts"];
 // Only remove the test-created temporary directory after verifying its boundary.
 const resolved=path.resolve(temp);assert.ok(resolved.startsWith(path.resolve(os.tmpdir())+path.sep)&&path.basename(resolved).startsWith("blog-publication-"));fs.rmSync(resolved,{recursive:true,force:true});
 }
});

