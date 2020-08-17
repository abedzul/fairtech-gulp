function checkTc() {
  let nilai = document.getElementById("checkTc");
  // If the checkbox is checked, display the output text
  if (nilai.checked == true) {
    document.getElementById("bookButton").style.background = "#40627b";
    document.getElementById("bookButton").disabled = false;
  } else {
    document.getElementById("bookButton").style.background = "#8b9093";
    document.getElementById("bookButton").disabled = true;
  }
}
