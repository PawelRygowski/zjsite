import { fetchPolitykaData } from "../data/polityka-data";
import "./polityka.css";

export default async function Page() {
  const politykaData = fetchPolitykaData();

  return (
    <>
      <h1 className="title centered">Polityka prywatności</h1>
      <ul className="content-container">
        {politykaData.map((item) => (
          <li key={item.id} className="privacy-policy-item">
            <span className="privacy-policy-item-title">{item.title}</span>
            <p
              className="privacy-policy-item-text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></p>
          </li>
        ))}
      </ul>
    </>
  );
}
