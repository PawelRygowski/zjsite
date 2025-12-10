import Image from "next/image";

// type PromoIconCardProps = {
//   cardText: string;
//   cardIconUrl: string;
// };
export function PromoIconCard({
  cardText,
  cardIconUrl,
}: {
  cardText: string;
  cardIconUrl: string;
}) {
  return (
    <div className="promo-icon">
      <Image
        width={200}
        height={200}
        className="promo-icon pirate highlight"
        src={cardIconUrl}
        alt="cardText"
      />
      <p className="promo-text">{cardText}</p>
    </div>
  );
}
