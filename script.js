let selectedItem = "";

function buyItem(item){
  selectedItem = item;
  document.getElementById("qrModal").style.display = "block";
}

function closeQR(){
  document.getElementById("qrModal").style.display = "none";
}

function sendProof(){
  const msg =
    "Payment Proof\n\nItem: " +
    selectedItem +
    "\nPayment done via QR.";

  window.open(
    "https://wa.me/919142053259?text=" +
    encodeURIComponent(msg),
    "_blank"
  );
}

function downloadQR(){
  const img = document.getElementById("qrImage");
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "payment-qr.png";
  a.click();
}
