import React from "react";

interface CardProps {
  imageUrl: string;
  author: string;
  date: string;
  tag: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  author,
  date,
  tag,
  title,
  description,
}) => {
  return (
    <div className="card transform transition-transform hover:scale-105 hover:shadow-lg">
      <img src={imageUrl} alt="Card Image" className="card-image " />

      <div className="card-info py-[20px]">
        <div className="meta flex justify-between text-xs text-gray-500">
          <span>{author}</span>
          <span>{date}</span>
          <span>#{tag}</span>
        </div>

        <h2 className="card-title pt-[10px] text-lg font-bold mb-2">{title}</h2>

        <p className="card-description text-sm text-gray-700 mb-4">
          {description}
        </p>
      </div>

      <style jsx>{`
        .author-info {
          display: flex;
          justify-content: space-between;
        }
        .card {
          display: flex;
          flex-direction: column;
          border: 1px solid white;
          margin: 10px;
          padding: 15px;
          max-width: 300px;
          text-align: left;
        }
        .card:hover {
          background-color: #f0f0f0; /* Change the background color on hover */
        }
        .imageContainer {
          display: flex;
          justify-content: center;
        }

        .image {
          width: 100%;
          max-height: 200px; /* Set the maximum height for the image */
          object-fit: cover; /* Maintain aspect ratio and cover the container */
        }

        .details {
          margin-top: 10px;
        }

        .data {
          font-size: 10px;
        }

        .title {
          margin-top: 10px;
        }

        .description {
          margin-top: 10px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default Card;
