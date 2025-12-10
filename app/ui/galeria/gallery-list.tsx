import { getAllFoldersWithRandomImages } from "@/data/galeria-data";
import { GalleryCardImage } from "./gallery-card-image";

export default async function GalleryList() {
  const folderList = await getAllFoldersWithRandomImages();
  return (
    <div className="galery-links-container">
      <GalleryCardImage foldersWithImages={folderList} />
    </div>
  );
}
