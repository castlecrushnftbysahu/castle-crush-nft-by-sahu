let selectedItem = "";

function buyItem(item){
  selectedItem = item;
  document.getElementById("qrModal").style.display = "block";
}

function sendProof(){
  const msg =
    "payment proof\n\n" +
    "item: " + selectedItem +
    "\npayment done via qr.\n" +
    "screenshot attached.";

  window.open(
    "https://wa.me/919142053259?text=" +
    encodeURIComponent(msg),
    "_blank"
  );
}

function closeQR(){
  document.getElementById("qrModal").style.display = "none";
}

function downloadQR(){
  const img = document.getElementById("qrImage");
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "payment-qr.png";
  a.click();
}
