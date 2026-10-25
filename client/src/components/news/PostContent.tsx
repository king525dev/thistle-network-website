import Image from "next/image";
import type { NewsPost } from "@/types/news";

type PostContentProps = {
  post: NewsPost;
};

/** The post text and its optional image. */
export default function PostContent({ post }: PostContentProps) {
  return (
    <>
      <div className="post-body">{post.postBody}</div>
      {post.postImage && (
        <Image
          src={post.postImage.url}
          alt={post.postImage.alternativeText ?? "Update image"}
          width={post.postImage.width ?? 900}
          height={post.postImage.height ?? 560}
          className="post-img"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      )}
    </>
  );
}
