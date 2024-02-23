import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface CardProps {
  imageUrl: string;
  author: string;
  date: string;
  tag: any[];
  title: string;
  slug?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  author,
  date,
  tag,
  title,
  slug,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className="card transform transition-all ease-in hover:scale-[1.025] hover:shadow-lg min-h-[350px]"
      onClick={() => {
        router.push(`${pathname}/${slug}`);
      }}
    >
      <Image
        src={imageUrl}
        alt="Card Image"
        className="card-image"
        width={300}
        height={200}
      />

      <div className="card-info py-[.5rem]">
        <div className="meta flex justify-between text-[.75rem] text-[#28281e] border-b-[1px] pb-[.5rem]">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <h2 className="card-title pt-[.4rem] text-lg font-bold mb-1">
          {title}
        </h2>
        <div className="tags flex flex-wrap">
          {tag.map((tagname, index) => {
            return <span key={index} className="text-[#55ee6ac9] font-semibold px-1 py-[0.1rem] mx-1 my-1 text-[0.8rem] border border-[#55ee6ac9] ">
              {tagname.name}
            </span>
          })}
        </div>
      </div>

      <style jsx>{`
        .author-info {
          display: flex;
          justify-content: space-between;
        }
        .card {
          display: flex;
          flex-direction: column;
          padding: 0.4rem;
          max-width: 300px;
          text-align: left;
        }
        .card:hover {
          background-color: #fff;
          border-radius: 1rem;
        }
        .card:hover .card-title {
          color: #5637cd;
        }
        .imageContainer {
          display: flex;
          justify-content: center;
        }

        .card-image {
          width: 100%;
          max-height: 28vh;
          object-fit: cover;
        }

        .details {
          margin-top: 10px;
        }

        .data {
          font-size: 10px;
        }

        .card-title {
          // margin-top: 10px;
        }

        .card-description {
          // margin-top: 10px;
          // color: #555;
        }
      `}</style>
    </div>
  );
};

export default Card;
