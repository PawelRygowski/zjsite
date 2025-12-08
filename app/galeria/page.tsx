import Link from "next/link";
import "./galeria.css";
import { fetchGaleriaData } from "@/data/galeria-data";

export default async function Page() {
  const galeryData = fetchGaleriaData();

  return (
    <div className="content-container">
      <div className="galery-links-container">
        {galeryData.map((galery) => {
          return (
            <Link
              key={galery.id}
              className="galery-snapshot"
              href={galery.photoUrl}
            >
              <h1 className="title centered">{galery.photographer}</h1>
              <img src={galery.introPhoto} alt={galery.photographer} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
