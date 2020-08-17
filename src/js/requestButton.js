function checkTc() {
  let tc = document.getElementById("checkTc");

  if (tc.checked == true) {
    document.getElementById("bookButton").style.background = "#40627b";
    document.getElementById("bookButton").disabled = false;
  } else {
    document.getElementById("bookButton").style.background = "#8b9093";
    document.getElementById("bookButton").disabled = true;
  }
}
