const politykaData = [
  {
    id: 1,
    title: "Informacje ogólne",
    text: `Administrator danych osobowych:<br/>
„Ziemie Jałowe”<br/>
E-mail kontaktowy: jaloweziemie@gmail.com<br/><br/>

Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników witryny www.ziemiejalowe.pl zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).`,
  },
  {
    id: 2,
    title: "Zakres zbieranych danych",
    text: `Podczas korzystania ze strony www.ziemiejalowe.pl możemy zbierać następujące dane osobowe:<br/><br/>

• Dane dobrowolnie podawane przez użytkowników (np. imię, adres e-mail, numer telefonu, treść wiadomości przesyłanej przez formularz kontaktowy).<br/>
• Dane zbierane automatycznie (adres IP, typ przeglądarki, system operacyjny, czas dostępu, informacje dotyczące urządzenia) w celach analitycznych i statystycznych.`,
  },
  {
    id: 3,
    title: "Cel przetwarzania danych",
    text: `Przetwarzamy dane osobowe w celu:<br/><br/>

• Realizacji kontaktu z użytkownikami (odpowiadania na zapytania, obsługi formularzy kontaktowych).<br/>
• Przeprowadzania analiz statystycznych i optymalizacji strony.<br/>
• Realizacji obowiązków prawnych ciążących na administratorze.<br/>
• Marketingu bezpośredniego (wyłącznie za zgodą użytkownika).`,
  },
  {
    id: 4,
    title: "Podstawa prawna przetwarzania",
    text: `Przetwarzanie danych odbywa się na podstawie:<br/><br/>

• Art. 6 ust. 1 lit. a RODO – zgoda użytkownika (w przypadku celów marketingowych).<br/>
• Art. 6 ust. 1 lit. b RODO – wykonanie umowy lub podjęcie działań na żądanie użytkownika.<br/>
• Art. 6 ust. 1 lit. c RODO – wypełnienie obowiązku prawnego ciążącego na administratorze.<br/>
• Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora (np. zapewnienie bezpieczeństwa strony, analiza statystyczna).`,
  },
  {
    id: 5,
    title: "Udostępnianie danych",
    text: `Dane osobowe użytkowników nie będą przekazywane osobom trzecim, chyba że:<br/><br/>

• Użytkownik wyrazi na to zgodę.<br/>
• Przetwarzanie jest niezbędne do wykonania umowy lub świadczenia usług.<br/>
• Wymaga tego przepis prawa.`,
  },
  {
    id: 6,
    title: "Okres przechowywania danych",
    text: `Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, lub przez okres wymagany przepisami prawa. Po upływie tego okresu dane zostaną usunięte lub zanonimizowane.`,
  },
  {
    id: 7,
    title: "Prawa użytkownika",
    text: `Użytkownik ma prawo do:<br/><br/>

• Dostępu do swoich danych osobowych.<br/>
• Sprostowania nieprawidłowych danych.<br/>
• Usunięcia danych („prawo do bycia zapomnianym”).<br/>
• Ograniczenia przetwarzania danych.<br/>
• Przenoszenia danych.<br/>
• Wniesienia sprzeciwu wobec przetwarzania.<br/>
• Wycofania zgody w dowolnym momencie (bez wpływu na zgodność przetwarzania z prawem, którego dokonano na podstawie zgody przed jej wycofaniem).<br/>
• Złożenia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych.`,
  },
  {
    id: 8,
    title: "Cookies",
    text: `Strona www.ziemiejalowe.pl wykorzystuje pliki cookies w celu:<br/><br/>

• Zapewnienia prawidłowego funkcjonowania witryny.<br/>
• Zbierania anonimowych danych statystycznych.<br/>
• Personalizacji treści i reklam (jeśli użytkownik wyrazi na to zgodę).<br/><br/>

Użytkownik może zmienić ustawienia dotyczące plików cookies w swojej przeglądarce.`,
  },
  {
    id: 9,
    title: "Zabezpieczenia danych",
    text: `Administrator stosuje odpowiednie środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo przetwarzanych danych osobowych oraz chronić je przed nieuprawnionym dostępem, utratą czy zniszczeniem.`,
  },
  {
    id: 10,
    title: "Zmiany w Polityce Prywatności",
    text: `Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności. Wszelkie zmiany będą publikowane na stronie i wchodzą w życie z dniem publikacji. Zalecamy regularne zapoznawanie się z treścią Polityki.`,
  },
  {
    id: 11,
    title: "Kontakt",
    text: `W razie pytań dotyczących przetwarzania danych osobowych lub niniejszej Polityki Prywatności prosimy o kontakt pod adresem e-mail: jaloweziemie@gmail.com`,
  },
];

export function fetchPolitykaData() {
  return politykaData;
}
