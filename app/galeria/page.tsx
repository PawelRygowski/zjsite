import "./galeria.css";
import GalleryFullView from "../ui/galeria/gallery-full-view";
import GalleryList from "../ui/galeria/gallery-list";

export default async function Page() {
  // const galeryData = fetchGaleriaData();

  return (
    <div className="content-container">
      {/* <GalleryFullView /> */}
      <GalleryList />
    </div>
  );
}
