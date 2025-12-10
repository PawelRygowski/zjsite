import "./galeria.css";
import { getAllFoldersWithRandomImages } from "@/data/galeria-data";
import { GalleryFoldersList } from "@/ui/galeria/gallery-folders-list";

export default async function Page() {
  // const galeryData = fetchGaleriaData();

  const folderList = await getAllFoldersWithRandomImages();
  // console.log(folderList);
  return (
    <div className="galery-links-container">
      <GalleryFoldersList foldersWithImages={folderList} />
    </div>
  );
}
