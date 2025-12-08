import Link from "next/link";
import "./formularze.css";

export default async function Page() {
  return (
    <div className="content-container">
      <p>
        Chcesz realnie pomóc w organizacji Ziem Jałowych, a przy tym
        zaoszczędzić oraz zyskać podziw barmanów i szacunek szeryfów? Nic
        prostszego! Wybierz rolę, w kórej się spełnisz i uzupełnij jeden (lub
        więcej) z poniższych formularzy. Pracę w obsłudze wynagradzamy
        benefitami i zwrotami za składki.
      </p>
      <br />
      <p>Role do wyboru:</p>
      <br />
      <ul>
        <li>
          <span className="bold">Obsługa vel Mrówki: </span>dbają o utrzymanie
          postapokaliptycznego (nie)porządku
        </li>
        <br />
        <li>
          <span className="bold">Budowlanka: </span>z wkrętarką za pasem,
          montuje dachy i brakujące części pomieszczeń w weekend przed konwentem
          oraz przywraca teren do stanu pierwotnego po konwencie
        </li>
        <br />
        <li>
          <span className="bold">Event Team (ET):</span>drużyna NPCów do zadań
          specjalnych
        </li>
        <br />
      </ul>

      <p>
        Jak to działa? Opłacacie składkę na ZJ, zapisujecie się w formularzu, a
        my się odezwiemy i ustalimy indywidualny grafik pomocy w obsłudze
        konwentu. Zwroty za wejściówki przelejemy Wam zaraz po konwencie.
        Dokładny opis obowiązków znajdziecie w formularzu
      </p>
      <br />
      <Link
        className="form-link highlight centered"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeZS1d24r2MU42Ljw_dYuedhHYgawSfrtr9NkfbvGb4xPrORg/viewform?fbclid=IwY2xjawOgJMxleHRuA2FlbQIxMABzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeWzJheuhShvR_3JB0RSp4QulDrbEO7fezCwo2xk5p8lojdG_9Ssq6mTQ859U_aem_zySf6TUJIlKIGRJaYQV8Hg"
        target="_blank"
      >
        FORMULARZ ZGŁOSZEŃ DO ET
      </Link>
    </div>
  );
}
