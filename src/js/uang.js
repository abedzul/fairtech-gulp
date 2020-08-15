// fungsi untuk convert nilai uang
function uang(price) {
  let reverse = price.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return ribuan;
}
