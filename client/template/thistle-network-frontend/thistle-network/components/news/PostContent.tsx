import Image from "next/image";
import type { Media } from "@/types/media";

type PostContentProps = {
  title?: string;
  body: string;
  image?: Media;
};

export default function PostContent({ title, body, image }: PostContentProps) {
  return (
    <div className="post-content">
      {title && <h3 className="post-title">{title}</h3>}
      <p className="post-body">{body}</p>
      {image && (
        <Image
          className="post-img"
          src={image.url}
          alt={image.alternativeText ?? ""}
          width={image.width ?? 900}
          height={image.height ?? 560}
          unoptimized
        />
      )}
    </div>
  );
}
