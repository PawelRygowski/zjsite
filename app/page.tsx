import { Metadata } from "next";
import TowerTop from "@/public/tower-top.webp";
import GrubaBottom from "@/public/gruba-bottom.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Page() {
  return (
    <main>
      <Image src={TowerTop} alt="Ziemie Jałowe" className="home-banner" />
      <div className="content-container">
        <p className="paragraph">
          W <span className="highlight">Świecie Pośrednim</span> powiadają, że
          &quot;świat poszedł naprzód&quot;. Zaczynasz coraz bardziej to
          rozumieć przemierzając bezkresne jałowe ziemie, na których dostrzec
          można czasem ledwie żyjące osady lub zdewastowane miasta wśród
          pozostałości dawnych technologii.
        </p>
        <p className="paragraph">
          Wiesz już, że gdzieś tam, pośrodku wszystkiego stoi{" "}
          <span className="highlight">Wieża</span> scalająca wszystkie światy i
          choć nie bardzo to wszystko rozumiesz, to pragniesz za wszelką cenę
          przetrwać w miejscu, w którym niczego nie można być pewnym - ani
          potworów, ani ludzi.
        </p>
        <p className="paragraph centered">
          Czy spróbujesz zapisać swoje imię na kartach tej historii?
        </p>
        <br />

        <video
          className="centered"
          autoPlay
          loop
          playsInline
          muted
          preload="none"
          aria-label="Video player"
        >
          <source src={`/video-main.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br />
        <p className="paragraph">
          <span className="highlight">Ziemie Jałowe</span> to tygodniowy konwent
          tworzony przez fanów i dla fanów szeroko rozumianej fantastyki
          nieprzerwanie już od piętnastu lat. Nasz <b>larp</b> jako jedyny w
          Polsce utrzymany jest w klimacie postapokaliptycznego westernu z
          domieszką cyberpunku, horroru oraz magii. Uczestnicy biorą udział w
          wyjątkowej, cyklicznej i niezwykle immersyjnej grze inspirowanej serią
          „Mroczna Wieża” Stephena Kinga, przy czym jednocześnie larp otwarty
          jest na graczy nieznających wydarzeń z poprzednich edycji ani treści
          książek pisarza.
        </p>
        <p className="paragraph">
          Podczas weekendowej części programowej każdy spragniony wrażeń na
          pustkowiach wędrowiec znajdzie coś dla siebie - od prelekcji,
          konkursów, dobrego jedzenia i warsztatów po fantastyczne towarzystwo,
          koncerty czy legendarne już imprezy. Dołącz do nas i stań się częścią
          tej historii, społeczności oraz świata.
        </p>
      </div>
      <Image src={GrubaBottom} alt="Ziemie Jałowe" className="home-bottom" />
    </main>
  );
}
