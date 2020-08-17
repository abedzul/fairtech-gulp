const dataHotel = {
  nama_hotel: "Blue Corner Dive Resort",
  alamat_hotel:
    "Jalan Raya, Jungutbatu, Nusa Lembongan Island, Bali 80771, Indonesia",
  star_hotel: 4,
  check_in: "14 June 2020",
  check_out: "21 June 2020",
  jumlah_tamu: 2,
  nama_kamar: "Double - Bedroom Pool Villa",
  fasilitas_kamar: {
    breakfast: 1,
  },
  harga_kamar: 3050000,
  jumlah_kamar: 7,
};

// menampilkan nama hotel
document.getElementById("namaHotel").innerHTML = dataHotel.nama_hotel;

// menampilkan bintang hotel sesuai value
let bintang = dataHotel.star_hotel;
for (let i = 0; i < bintang; i++) {
  document.getElementById(
    "starHotel"
  ).innerHTML += `<i class="fas fa-star"></i>`;
}

// menampilkan alamat hotel
document.getElementById("alamatHotel").innerHTML = dataHotel.alamat_hotel;

// menampilkan tanggal check in & check out
document.getElementById("checkinHotel").innerHTML = dataHotel.check_in;
document.getElementById("checkoutHotel").innerHTML = dataHotel.check_out;

// menghitung jumlah hari tamu menginap
let dateIn = new Date(dataHotel.check_in);
let dateOut = new Date(dataHotel.check_out);
let diffTime = dateOut.getTime() - dateIn.getTime();
let diffDays = diffTime / (1000 * 3600 * 24);
document.getElementById("malamHotel").innerHTML = diffDays;

// menampilkan jumlah tamu hotel
document.getElementById("tamuHotel").innerHTML = dataHotel.jumlah_tamu;

// menampilkan nama kamar
document.getElementById("namaKamar").innerHTML = dataHotel.nama_kamar;

// menampilkan dan convert harga kamar
document.getElementById("hargaKamar").innerHTML = this.uang(
  dataHotel.harga_kamar
);

// menampilkan jumlah kamar yang dipesan
document.getElementById("jumlahKamar").innerHTML = dataHotel.jumlah_kamar;

// menampilkan fasilitas kamar sesuai kondisi
if (dataHotel.fasilitas_kamar.breakfast) {
  document.getElementById("fasilitasKamar").innerHTML = "Bed & Breakfast";
} else {
  document.getElementById("fasilitasKamar").innerHTML = "Bed";
}

// menghitung dan menampilkan total harga kamar
let total = dataHotel.harga_kamar * dataHotel.jumlah_kamar;
document.getElementById("totalHargaKamar").innerHTML = this.uang(total);

// menghitung dan menampilkan harga pajak kamar
let tax = total * (10 / 100);
document.getElementById("totalPajak").innerHTML = this.uang(tax);

// menghitung dan menampilkan total semua yang harus dibayar
let all = total + tax;
document.getElementById("totalAll").innerHTML = this.uang(all);
