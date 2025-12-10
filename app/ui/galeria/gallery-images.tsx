"use client";
import { CldImage } from "next-cloudinary";

type SearchResult = {
  public_id: string;
};

export default function GalleryImages({ images }: { images: SearchResult[] }) {
  console.log(images);
  return (
    <div className="images-container">
      {images.map((img: SearchResult) => (
        <div key={img.public_id}>
          <CldImage
            className="gallery-image"
            width="400"
            height="400"
            src={img.public_id}
            alt="Gallery image"
          />
        </div>
      ))}
    </div>
  );
}
