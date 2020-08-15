const dataHotel = {
  nama_hotel: "Blue Corner Dive Resort",
  alamat_hotel:
    "Jalan Raya, Jungutbatu, Nusa Lembongan Island, Bali 80771, Indonesia",
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

document.getElementById("namaHotel").innerHTML = dataHotel.nama_hotel;
document.getElementById("alamatHotel").innerHTML = dataHotel.alamat_hotel;
document.getElementById("checkinHotel").innerHTML = dataHotel.check_in;
document.getElementById("checkoutHotel").innerHTML = dataHotel.check_out;
document.getElementById("tamuHotel").innerHTML = dataHotel.jumlah_tamu;
document.getElementById("namaKamar").innerHTML = dataHotel.nama_kamar;
document.getElementById("hargaKamar").innerHTML = this.uang(
  dataHotel.harga_kamar
);
document.getElementById("jumlahKamar").innerHTML = dataHotel.jumlah_kamar;

// kondisi fasilitas kamar
if (dataHotel.fasilitas_kamar.breakfast) {
  document.getElementById("fasilitasKamar").innerHTML = "Breakfast";
}

// menghitung total harga kamar
let total = dataHotel.harga_kamar * dataHotel.jumlah_kamar;
document.getElementById("totalHargaKamar").innerHTML = this.uang(total);

// menghitung pajak kamar
let tax = total * (10 / 100);
document.getElementById("totalPajak").innerHTML = this.uang(tax);

// menghitung total semua
let all = total + tax;
document.getElementById("totalAll").innerHTML = this.uang(all);
