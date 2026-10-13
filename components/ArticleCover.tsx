import Image from "next/image";
import ArticleVisual from "./ArticleVisual";

type Props = {
  visual: string;
  image?: string;
  imageAlt?: string;
  large?: boolean;
  priority?: boolean;
};
export default function ArticleCover({ visual, image, imageAlt = "", large = false, priority = false }: Props) {
  if (!image) return <ArticleVisual kind={visual} large={large}/>;
  return <div className={`article-visual cover-photo ${large ? "visual-large" : ""}`}>
    <Image src={image} alt={imageAlt} fill priority={priority} sizes={large ? "(max-width: 760px) 100vw, 1180px" : "(max-width: 760px) 100vw, (max-width: 980px) 50vw, 400px"} style={{objectFit:"cover"}}/>
  </div>;
}
