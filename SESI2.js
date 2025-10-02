let diskon = 0;
let totalBelanja = 600000;
let hargaAkhir = totalBelanja;

if (totalBelanja > 1000000) {
  diskon = 0.15;
  let potongan = totalBelanja * diskon;
  hargaAkhir = totalBelanja - potongan;

} else if (totalBelanja > 500000) {
  diskon = 0.10;
  let potongan = totalBelanja * diskon;
  hargaAkhir = totalBelanja - potongan;

} else {
  diskon = 0;
  hargaAkhir = totalBelanja;

}

let potongan = totalBelanja * diskon;

console.log("Total anda adalah: Rp" + totalBelanja + "\n" +
"Diskon yang anda dapatkan adalah: Rp" + potongan + "\n" +
"(" + totalBelanja + "-" + potongan + ")" + "\n" +
"Total akhir yang anda harus bayar adalah: Rp" + hargaAkhir
);