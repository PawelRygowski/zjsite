import { fetchRegulaminData } from "../data/regulamin-data";
import { Metadata } from "next";
import { teko } from "../layout";
import "./regulamin.css";

export const metadata: Metadata = {
  title: "Regulamin",
};

export default async function Page() {
  const regulaminData = await fetchRegulaminData();

  return (
    <div className="content-container">
      <h1 className={`regulamin-header ${teko.className}`}>
        Regulamin konwentu Ziemie Jałowe
      </h1>
      <ul className="regulamin-list">
        {regulaminData.map((item) => (
          <li className={`regulamin-item ${teko.className}`} key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
