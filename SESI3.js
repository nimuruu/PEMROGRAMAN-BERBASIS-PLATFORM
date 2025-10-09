var siswa = [
    {no:1, nama: "Asep", tugas: 80, uts: 95, uas: 85},
    {no:2, nama: "Iwan", tugas: 75, uts: 75, uas: 90},
    {no:3, nama: "Cepi", tugas: 70, uts: 80, uas: 90},
    {no:4, nama: "Agus", tugas: 65, uts: 40, uas: 55},
    {no:5, nama: "Dadang", tugas: 60, uts: 70, uas: 60}
]

function ItungNilaiAkhir (tugas, uts, uas) {
    return (tugas * 0.4) + (uts * 0.3) + (uas * 0.3)
}

console.log("No | Nama   | Tugas | UTS | UAS | Nilai Akhir");
console.log("---------------------------------------------");

for (let i = 0; i < siswa.length; i++) {
  let nilaiAkhir = ItungNilaiAkhir(siswa[i].tugas, siswa[i].uts, siswa[i].uas);
  console.log(`${siswa[i].no}  | ${siswa[i].nama.padEnd(7)} | ${siswa[i].tugas} | ${siswa[i].uts} | ${siswa[i].uas} | ${nilaiAkhir.toFixed(2)}`);
}