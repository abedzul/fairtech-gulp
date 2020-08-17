const dataTc = [
  {
    item:
      "You will receive an email notification with booking details in PDF attached",
  },
  {
    item:
      "Booking confirmation may take up to 24 hours. Please don't book your flights until your request is confirmed by the resort",
  },
  {
    item:
      "To secure your reservation you will have to proceed with an payment within 48 hours after the booking is confirmed",
  },
];

// menampilkan data tc
for (let i = 0; i < dataTc.length; i++) {
  document.getElementById(
    "termsConditions"
  ).innerHTML += `<li> ${dataTc[i].item} </li>`;
}
