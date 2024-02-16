import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface CardProps {
  imageUrl: string;
  author: string;
  date: string;
  tag: string;
  title: string;
  description: string;
  slug?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  author,
  date,
  tag,
  title,
  description,
  slug,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="card transform transition-transform hover:scale-[1.025] hover:shadow-lg" onClick={() => {
      router.push(`${pathname}/${slug}`)
    }}>
      <Image src={imageUrl} alt="Card Image" className="card-image" width={300} height={200} />

      <div className="card-info py-[.5rem]">
        <div className="meta flex justify-between text-[.8rem] text-[#28281e] border-b-[1px] pb-[.5rem]">
          <span>{author}</span>
          <span>{date}</span>
          <span className="text-[#55ee6ac9] px-1 py-[0.1rem] text-[.78rem] border border-[#55ee6ac9]">
            #{tag}
          </span>
        </div>
        <Link href="/">
          <h2 className="card-title pt-[.4rem] text-lg font-bold mb-1">
            {title}
          </h2>
          <p className="card-description text-sm text-gray-500 mb-3">
            {description}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
