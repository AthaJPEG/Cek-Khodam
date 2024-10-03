function checkKhodam() {
  const name = document.getElementById("nameInput").value;
  const resultDiv = document.getElementById("result");

  if (name === "") {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "Silakan masukkan nama Anda.";
    resultDiv.classList.remove("positive", "negative");
    return;
  }

  // Array kemungkinan hasil
  const results = [
    `${name} : Tikus Madagascar`,
    `${name} : Hiu Purbalingga Meduro`,
    `${name} : Kucing Ku Klux Klan`,
    `${name} : Koala Terbang`,
    `${name} : Kelinci Venom`,
    `${name} : Pudding Coklat Pak Hambali`,
    `${name} : Anggrek Mekar Pontianak`,
    `${name} : Ksatria Hitam 1001`,
    `${name} : Lumpur Lapindo Blukutuk`,
    `${name} : Anggur Merah Pak Fuad`,
    `${name} : Pangeran Jomok Masa Kehitaman`,
    `${name} : Mermaid Sungai Andai`,
    `${name} : Tol Aspal Cipularang`,
    `${name} : Penghuni Sungai Mahakam Raja Ksatria Maha Sakti Furry`,
    `${name} : El Kecepatan`,
  ];

  // Pilih hasil acak
  const randomResult = results[Math.floor(Math.random() * results.length)];

  // Tampilkan hasilnya
  resultDiv.style.display = "block";
  resultDiv.innerHTML = randomResult;
}
