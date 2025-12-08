const basicInfo = [
  {
    text: "<b>Ziemie Jałowe</b> są wydarzeniem non-profit odbywającym się nieprzerwanie od 2011 roku, którego głównym organizatorem jest S.T.O. </br> Konwent składa się z dwóch segmentów – <b>larpa</b> oraz <b>części programowej</b>, o których przeczytać można w poszczególnych zakładkach strony oraz sekcji FAQ.",
  },
  {
    text: "Najbliższa odsłona wydarzenia odbędzie się<br/>na terenie <b>Battlezone Arena Gliwice</b><br/>w dniach <b>13-19.07.2026</b>",
  },
  {
    text: "Zapraszamy wszystkich miłośników szeroko pojętej fantastyki!",
  },
];

export function fetchBasicInfo() {
  return basicInfo;
}

const basicRules = [
  {
    text: "Wydarzenie ma charakter imprrezy biletowanej – wstęp możliwy jest tylko i wyłącznie po opłaceniu składki oraz otrzymaniu identyfikatora na miejscu.",
  },
  {
    text: "Udział możliwy jest tylko dla osób, które w dniu rozpoczęcia konwentu mają ukończone 18 lat.",
  },
  {
    text: "Wszyscy Uczestnicy zobowiązują się zapoznać z regulaminem wydarzenia oraz go przestrzegać.",
  },
];

export function fetchBasicRules() {
  return basicRules;
}

const payment = {
  paymentRound1: "1 tura przedpłat 13.11.2025 - 31.01.2026 420 zł",
  paymentRound2: "2 tura przedpłat 01.02.2026 - 31.05.2026 530 zł",
  paymentRound3: "3 tura przedpłat 01.06.2026 - 10.07.2026 630 zł",
  onTheSpot: "na miejscu 730 zł",
  accountName: "Marzena Jędrzejowska",
  accountNumber: "08 1870 1045 2078 1064 2860 0001",
  transferTitle: "W tytule prosimy wpisać: IMIĘ NAZWISKO, e-mail",
  paymentOutro:
    "Potwierdzenia zaksięgowania wpłat zostaną przesłane wszystkim Uczestnikom na podane przez nich wcześniej adresy mailowe w tytułach ich przelewów.",
};

export function fetchPayment() {
  return payment;
}

const conditions = [
  {
    text: "Impreza odbywa się na rozbudowanym poligonie treningowo-rekreacyjnym w postaci miasteczka i terenu leśnego. Miejsce to nie jest przystosowane dla osób o ograniczonej mobilności.",
  },
  {
    text: "Na terenie konwentu znajduje się wydzielone pole namiotowe z pobliskim parkingiem oraz osobna strefa (oddzielona wałem, który pokonuje się schodami), w której rozgrywany jest larp i odbywa się przeważająca część atrakcji.",
  },
  {
    text: "W trakcie wszystkich dni Ziem Jałowych gwarantowana jest opieka medyczna realizowana przez lekarzy i ratowników medycznych.",
  },
  {
    text: "Na czas trwania wydarzenia zapewnione są przenośne toalety, prysznice, umywalki i zimna woda.",
  },
  {
    text: "Blisko pola namiotowego znajduje się czajnik i kuchenka gazowa oraz punkt ładowania telefonów komórkowych czy powerbanków.",
  },
  {
    text: "W miasteczku, w którym odbywa się larp i w większości część programowa, znajduje się strefa gastro w postaci jadłodajni „u Snacksa” w której serwowane są odpłatnie śniadania, obiady oraz kolacje. Niedaleko mieści się także saloon – profesjonalni barmani podadzą Ci Twój ulubiony napój za zakupione wcześniej talony.",
  },
  {
    text: "W pobliżu terenu konwentu najbliższe sklepy znajdują się ok. 4 minut jazdy samochodem (Aldi, Lidl, Biedronka, Odido).",
  },
];

export function fetchConditions() {
  return conditions;
}

const whatToExpect = [
  {
    title: "Kilkudniowego, immersyjnego larpa",
    text: "w multiwersum „Mrocznej Wieży”, czyli w świecie będącym skrzyżowaniem postapokalipsy i westernu z cyberpunkiem, horrorem oraz magią – i to bez konieczności znajomości tych klimatów czy też wyżej wspomnianego cyklu stworzonego przez Stephena Kinga. Barwne postacie, ciekawe questy, zaskakujące intrygi i wciągająca, wielowątkowa fabuła oraz niezapomniane emocje czy nagłe zwroty akcji - to wszystko w wyjątkowym, sandboxowym wydaniu. W żyjącym miasteczku jest sporo miejsca na inwencję twórczą graczy – my dajemy Ci wszystkie narzędzia a Ty wcielasz się w kogo chcesz i odgrywasz to najlepiej, jak potrafisz.",
  },
  {
    title: "Niespodziewanych sytuacji",
    text: "w końcu przecież trudno jest przewidzieć, jakie spontaniczne akcje pojawią się w tym roku. Wychodzisz za budynek a tam wyścigi zdalnie sterowanych samochodów? Palenie czarownicy na stosie? Pojedynek robo-psów? Wjazd czołgu? Mroczne rytuały? Powrót Elvisa, króla rock and rolla? Najazd robotycznych wilków na miasto? Występ orkiestry kazoo? Polowanie na wampiry? Walki magów, jedi lub klimatyczne jam session? Coś będzie na pewno. Może to właśnie Ty zasłyniesz ze zorganizowania jakiegoś planu o którym marzysz od dawna i za który wszyscy będą Ci później stawiać piwo w barze?",
  },
  {
    title: "Weekendowej części programowej",
    text: "Konkursy, prelekcje, pokazy, warsztaty – wszystko, czego tylko dusza zapragnie. A jeśli czegoś Ci brakuje lub masz jakiś niecodzienny pomysł – napisz! Chętnie pomożemy.",
  },
  {
    title: "Niesamowitej ilości nagród",
    text: "do wygrania zarówno w aukcji za punkty doświadczenia (PD-ki) zdobywane w trakcie larpa, jak i we wszystkich konkursach realizowanych podczas części programowej. Co roku mamy dla Was książki, planszówki, sprzęt turystyczny, repliki NERF, broń otulinową, koszulki, naszywki, vouchery na tatuaże, programy treningowe, craftowe przedmioty, ubrania czy biżuterię... A i tak pewnie o czymś zapomnieliśmy. Wystarczy tylko chcieć, a wyjedziesz od nas z garścią fantów!",
  },
  {
    title: "Turnieju juggera",
    text: "w końcu ten sport ma coś w sobie. Wolisz oglądać krew i pot postapokaliptycznych gladiatorów czy też sam zostaniesz jednym z nich?",
  },
  {
    title: "Kina plenerowego",
    text: "bo nie ma nic lepszego po dniu pełnym wrażeń, niż wygodne rozgoszczenie się pod gołym niebem przy wielkim ekranie oglądając w doborowym towarzystwie filmy wszelkiego rodzaju – i te dobre, i te klasy B.",
  },
  {
    title: "Imprez, których nie da się opisać",
    text: "Na bawce na Ziemiach Jałowych po prostu trzeba być, a znajomi i tak nie uwierzą w połowę Twoich opowieści. Przygotuj się na dziki szał, świetnie skrojoną listę utworów, tańce na beczkach i energię, która nie pozwoli nikomu prędko zejść z parkietu!",
  },
  {
    title: "Koncertów na żywo",
    text: "mamy lokację i nagłośnienie, lasery, dym, zdolnych ludzi i wszystko, czego potrzeba. Koncert na konwencie postapo to niesamowite przeżycie i warto się o tym przekonać!",
  },
  {
    title: "Naprawdę świetnego towarzystwa",
    text: "Społeczność Ziem Jałowych to ludzie nietuzinkowi, tak więc niezależnie, czy szukasz larpowych lub erpegowych kompanów, nerdowych rozmów, niezapomnianych przeżyć, ciekawych warsztatów, rywalizacji w konkursach, odpoczynku w klimacie postapo, tanecznego maratonu do rana czy jeszcze czegoś innego...",
  },
];

export function fetchWhatToExpect() {
  return whatToExpect;
}
