$(() => {
  // check camera availability
  var socket = io();
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    alert(`Code matched = ${decodedText}`, decodedResult);
  }
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {
      fps: 25,
      qrbox: 250,
      facingMode: "environment",
    },
    /* verbose= */ true
  );
  html5QrcodeScanner.render(onScanSuccess);
});
