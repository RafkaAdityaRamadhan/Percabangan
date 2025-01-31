function kategoriUsia(usia) {
    if (usia >= 0 && usia <= 12) {
        return "Bocil";
    } else if (usia >= 13 && usia <= 17) {
        return "abg";
    } else if (usia >= 18 && usia <= 59) {
        return "Dewasa";
    } else if (usia >= 60) {
        return "Kolot";
    } else {
        return "Usia tidak valid"; 
    }
  }
  
  let usia = 12;  
  let kategori = kategoriUsia(usia);
  
  console.log("Usia " + usia + " masih " + kategori);