import { KontaktForm } from "../ui/kontakt/kontakt-form";
import "./kontakt.css";
export default async function Page() {
  return (
    <div className="content-container">
      <h1 className="title centered">Kontakt</h1>
      <KontaktForm />
    </div>
  );
}
