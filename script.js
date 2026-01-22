let selectedItem = "";
let selectedPrice = 0;

function buyItem(item, price){
  selectedItem = item;
  selectedPrice = price;

  const upiLink =
    "upi://pay?pa=9142053259@upi&pn=CastleCrush&am=" +
    price +
    "&cu=INR&tn=" +
    encodeURIComponent(item);

  const qrURL =
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
    encodeURIComponent(upiLink);

  document.getElementById("qrImage").src = qrURL;
  document.getElementById("qrModal").style.display = "block";
}

function sendProof(){
  const msg =
    "payment proof\nitem: " +
    selectedItem +
    "\namount: ₹" +
    selectedPrice;

  window.open(
    "https://wa.me/919142053259?text=" +
    encodeURIComponent(msg),
    "_blank"
  );
}

function closeQR(){
  document.getElementById("qrModal").style.display="none";
}

function downloadQR(){
  const img = document.getElementById("qrImage");
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "payment-qr.png";
  a.click();
}
