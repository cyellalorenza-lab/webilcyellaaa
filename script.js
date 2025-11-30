// Quote rotator
const quotes = [
  '"Pendidikan adalah senjata paling ampuh untuk mengubah dunia." – Nelson Mandela',
  '"Ing ngarso sung tulodo, ing madyo mangun karso, tut wuri handayani." – Ki Hajar Dewantara',
  '"Education is the most powerful weapon which you can use to change the world." – Nelson Mandela',
  '"Belajar bukan untuk sekolah, tetapi untuk hidup." – Seneca'
];

let currentQuote = 0;
function rotateQuotes() {
  const quoteText = document.getElementById("quote-text");
  if (!quoteText) return;
  quoteText.style.opacity = 0;
  setTimeout(() => {
    currentQuote = (currentQuote + 1) % quotes.length;
    quoteText.textContent = quotes[currentQuote];
    quoteText.style.opacity = 1;
  }, 500);
}
setInterval(rotateQuotes, 5000);

// Progress bar scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const bar = document.getElementById("progress-bar");
  if (bar) bar.style.width = scrollPercent + "%";
});

// Reflection popup
function showReflectionPopup() {
  const pertanyaan = [
    "Apa menurutmu Kualitas Pendidikan yang baik itu penting?",
    "Siapakah nama guru yang menginspirasi kamu?",
    "Maukah kamu menjadi seseorang yang berkontribusi untuk Negaranya sendiri?",
    "Kalau suatu hari Indonesia berhasil meresmikan SDGs 4, apa yang akan kamu lakukan untuk mempertahankannya?",
  ];
  const random = pertanyaan[Math.floor(Math.random() * pertanyaan.length)];
  alert("Refleksi Pribadi:\n\n" + random);
}

// Toggle SDGs detail (dipakai di sdgs4.html jika ada tombol detail)
function toggleSDGsDetail() {
  const detailBox = document.getElementById('sdgs-detail-container');
  const button = document.getElementById('showSDGsDetailButton');
  if (!detailBox || !button) return;

  if (detailBox.style.display === 'none' || detailBox.style.display === '') {
    detailBox.style.display = 'block';
    button.textContent = 'Sembunyikan Detail 17 Tujuan Kami 👆';
    setTimeout(() => {
      detailBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  } else {
    detailBox.style.display = 'none';
    button.textContent = 'Lihat Penjelasan Detail 17 Tujuan Kami';
  }
}
