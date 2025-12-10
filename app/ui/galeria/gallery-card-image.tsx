"use client";

import { CldImage } from "next-cloudinary";
import { FolderWithRandomImage } from "@/data/galeria-data";

interface GalleryCardsProps {
  foldersWithImages: FolderWithRandomImage[];
}

export function GalleryCardImage({ foldersWithImages }: GalleryCardsProps) {
  const folders = foldersWithImages || []; // default empty array
  return (
    <>
      {folders.map((folder) => (
        <div key={folder.name} className="gallery-card">
          <h2 className="title centered">{folder.name}</h2>
          <CldImage
            src={folder.image}
            width={300}
            height={300}
            alt={folder.name}
            className="gallery-image"
          />
        </div>
      ))}
    </>
  );
}
