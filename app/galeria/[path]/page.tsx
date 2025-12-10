import "server-only";
import { fetchGalleryImagesFromPath } from "@/data/galeria-data";
import GalleryFullView from "@/ui/galeria/gallery-full-view";
import "./../galeria.css";

interface PageProps {
  params: {
    path: string;
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const folderPath = decodeURIComponent(resolvedParams.path);

  const galleryData = await fetchGalleryImagesFromPath(folderPath);

  return <GalleryFullView galleryData={galleryData.resources} />;
}
