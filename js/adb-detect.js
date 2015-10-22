function callback() {
  document.getElementById("content").innerHTML = "<h3>Disable your AdBlock, you motherfucker!</h3>";
}

if (window.ads === undefined) {
  callback();
}