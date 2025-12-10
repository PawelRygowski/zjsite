import { fetchLarpData } from "@/data/larp-data";
import "./larp.css";

export default async function Page() {
  const larpData = fetchLarpData();
  return (
    <div className="content-container">
      {larpData.map((larp) => {
        return (
          <div key={larp.id}>
            <br />
            <h1 className="title-small centered">{larp.title}</h1>
            <br />
            <p dangerouslySetInnerHTML={{ __html: larp.text }}></p>
          </div>
        );
      })}
      <div className="larp-outro centered">
        <br />
        <span className="highlight">Ziemie Jałowe - Nowe Horyzonty </span>
        to opowieźć, która zaczyna się tam, gdzie kończą się wszelkie znane
        ścieżki.
        <br />
        <span className="highlight pirate">Dokąd ją poprowadzisz?</span>
      </div>
    </div>
  );
}
