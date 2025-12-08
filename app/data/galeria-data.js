const galeriaData = [
  {
    id: 1,
    photographer: "fot. Jarek Daniel Kula",
    introPhoto:
      "https://ziemiejalowe.pl/wp-content/uploads/2025/09/JarekKula2025sroda-111.webp",
    photoUrl:
      "https://ziemiejalowe.pl/galeria-jarek-kula-2?preview_id=847&preview=true",
  },
  {
    id: 2,
    photographer: "fot. Kasia Pazur",
    introPhoto:
      "https://ziemiejalowe.pl/wp-content/uploads/2025/09/KasiaPazdurZJ2025-40.webp",
    photoUrl:
      "https://ziemiejalowe.pl/galeria-kasia-pazdur-2?preview_id=852&preview=true",
  },
  {
    id: 3,
    photographer: "fot. Darek Kocurek",
    introPhoto:
      "https://ziemiejalowe.pl/wp-content/uploads/2025/11/DSC_0221m.jpg",
    photoUrl: "https://ziemiejalowe.pl/galeria-darek-kocurek",
  },
];

export function fetchGaleriaData() {
  return galeriaData;
}
