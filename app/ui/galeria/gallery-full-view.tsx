import { fetchAllGalleryImages } from "@/data/galeria-data";
import GalleryImages from "./gallery-images";

export default async function GalleryFullView() {
  const allGalleryImages = await fetchAllGalleryImages();
  return (
    <div className="gallery-container">
      <h1 className="title-small centered">fotograf</h1>
      <GalleryImages images={allGalleryImages.resources} />
    </div>
  );
}
