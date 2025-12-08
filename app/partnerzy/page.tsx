import Image from "next/image";
import { fetchPartnersAndSponsorsData } from "@/data/partnerzy-data";
import "./partnerzy.css";

export default async function Page() {
  const partnersData = fetchPartnersAndSponsorsData();

  return (
    <div className="content-container">
      <h2 className="title centered">Partnerzy</h2>
      <div className="partners-grid">
        {partnersData
          .filter((item) => {
            return item.type === "partner" ? true : false;
          })
          .map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
            >
              <Image
                src={item.logo}
                alt={`Partner logo ${item.id}`}
                width={300}
                height={300}
                className="partner-logo"
              />
            </a>
          ))}
      </div>
      <h2 className="title centered">Sponsorzy</h2>
      <div className="sponsors-grid">
        {partnersData
          .filter((item) => {
            return item.type === "sponsor" ? true : false;
          })
          .map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
            >
              <Image
                src={item.logo}
                alt={`Partner logo ${item.id}`}
                width={300}
                height={300}
                className="partner-logo"
              />
            </a>
          ))}
      </div>
    </div>
  );
}
