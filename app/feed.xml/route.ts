import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
export const dynamic = "force-dynamic";
const xml=(v:string)=>v.replace(/[<>&"']/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"}[c]!));
export function GET() {
 const items=getAllPosts().filter(p=>!p.demo).map(p=>`<item><title>${xml(p.title)}</title><link>${xml(site.url+"/blog/"+p.slug)}</link><guid>${xml(site.url+"/blog/"+p.slug)}</guid><description>${xml(p.excerpt)}</description><pubDate>${new Date(p.date).toUTCString()}</pubDate></item>`).join("");
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(site.name)}</title><link>${xml(site.url)}</link><description>${xml(site.description)}</description><language>es</language>${items}</channel></rss>`,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"no-store"}});
}