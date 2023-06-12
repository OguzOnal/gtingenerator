
function generateGTIN() {
  var gtin = "MGMG"; // İbare

  while (gtin.length < 13) {
    gtin += Math.floor(Math.random() * 10); // Rastgele rakam ekle
  }

  return gtin;
}

function generateAndDisplayGTIN() {
  var gtinCode = generateGTIN();
  document.getElementById("gtinDisplay").innerText = gtinCode;
}
