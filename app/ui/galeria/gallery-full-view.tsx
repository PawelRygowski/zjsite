"use client";

import { CldImage } from "next-cloudinary";

interface GalleryFullViewProps {
  galleryData: {
    public_id: string;
    secure_url: string;
  }[];
}

export default function GalleryFullView({ galleryData }: GalleryFullViewProps) {
  if (!galleryData || galleryData.length === 0) {
    return <p>Brak zdjęć!</p>;
  }

  return (
    <div className="gallery-container">
      {galleryData.map((img) => (
        <div key={img.public_id} className="gallery-item">
          <CldImage
            src={img.public_id}
            width={400}
            height={400}
            alt={img.public_id}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
}
