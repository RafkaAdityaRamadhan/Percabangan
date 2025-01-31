let tahunCek = 2025;
if (tahunCek % 400 === 0) {
    console.log(tahunCek + " adalah tahun kabisat.");
} else if (tahunCek % 100 === 0) {
    console.log(tahunCek + " adalah tahun masehi (bukan tahun kabisat).");
} else if (tahunCek % 4 === 0) {
    console.log(tahunCek + " adalah tahun kabisat.");
} else {
    console.log(tahunCek + " adalah tahun masehi (bukan tahun kabisat).");
}