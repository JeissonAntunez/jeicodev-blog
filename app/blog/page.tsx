import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/site";
import BlogExplorer from "@/components/BlogExplorer";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Explora tus próximas ideas", description: "Explora artículos de tecnología, deporte y vida práctica. Busca una lectura y encuentra un siguiente paso útil.", alternates: { canonical: "/blog" } };
export default async function BlogIndexPage({searchParams}: {searchParams: Promise<{categoria?: string}>}) {
  const {categoria} = await searchParams;
  const category = categories.find(c=>c.slug===categoria);
  if (category) permanentRedirect(`/categoria/${category.slug}`);
  return <><section className="page-intro"><span className="kicker">LA CURIOSIDAD NO SE TERMINA</span><h1>Tu próxima buena idea.</h1><p>Explora, encuentra y convierte una lectura en algo útil.</p></section><BlogExplorer posts={getAllPosts()} initialCategory=""/></>;
}
