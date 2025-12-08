import Link from "next/link";
import "./info.css";
import {
  fetchBasicInfo,
  fetchBasicRules,
  fetchConditions,
  fetchPayment,
  fetchWhatToExpect,
} from "@/data/info-data";
export default async function Page() {
  const basicInfo = fetchBasicInfo();
  const basicRules = fetchBasicRules();
  const payment = fetchPayment();
  const conditions = fetchConditions();
  const whatToExpect = fetchWhatToExpect();

  return (
    <>
      <div className="content-container">
        <h1 className="title centered">INFORMACJE PODSTAWOWE</h1>

        <p dangerouslySetInnerHTML={{ __html: basicInfo[0].text }} />
        <br />
        <p
          className="centered"
          dangerouslySetInnerHTML={{ __html: basicInfo[1].text }}
        />
        <br />
        <p dangerouslySetInnerHTML={{ __html: basicInfo[2].text }} />
        <br />
        <h1 className="title centered">ZASADY PODSTAWOWE</h1>
        <ul className="info-list">
          {basicRules.map((rule) => {
            return (
              <li className="info-list-item" key={rule.text}>
                {rule.text}
              </li>
            );
          })}
        </ul>
        <h1 className="title centered">KONTO DO WPŁAT</h1>
        <p className="highlight-green">{payment.paymentRound1}</p>
        <p>{payment.paymentRound2}</p>
        <p>{payment.paymentRound3}</p>
        <p>{payment.onTheSpot}</p>
        <br />
        <p className="bold">{payment.accountName}</p>
        <p className="bold">{payment.accountNumber}</p>
        <p>{payment.transferTitle}</p>
        <p>{payment.paymentOutro}</p>
        <br />
        <h1 className="title centered">WARUNKI PANUJĄCE NA KONWENCIE</h1>
        <ul className="info-list">
          {conditions.map((condition) => {
            return (
              <li key={condition.text} className="info-list-item">
                {condition.text} <br />
                <br />
              </li>
            );
          })}
        </ul>
        <h1 className="title centered">
          CZEGO MOŻNA SIĘ SPODZIEWAĆ NA ZIEMIACH JAŁOWYCH
        </h1>
        <ul className="info-list">
          {whatToExpect.map((expect) => {
            return (
              <li key={expect.title} className="info-list-item">
                <span className="bold">{expect.title} </span>
                {expect.text} <br />
                <br />
              </li>
            );
          })}
        </ul>
        <p>Tu z pewnością poznasz zapaleńców i złapiesz kontakty na lata!</p>
        <br />
        <Link href={"/Lista_ZJ_Rzeczy.pdf"}>
          <div className="highlight-link pirate centered">
            Co spakować do plecaka?
            <br />
            Zajrzyj na naszą listę sugestii
          </div>
        </Link>
      </div>
      <br />
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5228.972011737002!2d18.716566477833357!3d50.27799449976431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711313dc96c5561%3A0xd4eb2b4fa5f7f1e7!2sBattlezone%20-%20Paintball%20i%20Airsoft!5e1!3m2!1sen!2spl!4v1737625577509!5m2!1sen!2spl"
        width="1920"
        height="600"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-frame"
      ></iframe>
    </>
  );
}
