function hitungGaji() {
    // Input
    let gajiPokok = 7000000;
    let jamKerja = prompt("Masukkan jumlah jam kerja Sarip dalam seminggu:");
    jamKerja = parseInt(jamKerja); // Ubah input menjadi angka
  
    // Proses
    let totalGaji;
    if (jamKerja > 40) {
      let jamLembur = jamKerja - 40;
      let gajiLembur = jamLembur * 100000;
      totalGaji = gajiPokok + gajiLembur;
    } else {
      totalGaji = gajiPokok;
    }
  
    // Output
    alert("Total gaji Sarip adalah: Rp. " + totalGaji);
  }
  