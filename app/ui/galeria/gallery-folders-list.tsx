"use client";

import { CldImage } from "next-cloudinary";
import { FolderWithRandomImage } from "@/data/galeria-data";
import Link from "next/link";

interface GalleryCardsProps {
  foldersWithImages: FolderWithRandomImage[];
}

export function GalleryFoldersList({ foldersWithImages }: GalleryCardsProps) {
  const folders = foldersWithImages || [];

  console.log("folders: " + folders);
  return (
    <div className="gallery-links-container">
      {folders.map((folder) => {
        const encoded = encodeURIComponent(folder.name);

        return (
          <Link
            href={`/galeria/${encoded}`}
            key={folder.name}
            className="gallery-card"
          >
            <h2 className="title centered">{folder.name}</h2>
            <CldImage
              src={folder.image}
              width={300}
              height={300}
              alt={folder.name}
              className="gallery-folder-image"
            />
          </Link>
        );
      })}
    </div>
  );
}
