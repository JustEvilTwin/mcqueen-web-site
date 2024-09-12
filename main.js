function kabul() {
  alert("Kullanıcı kabul ediyor.");
  const mq = document.getElementById(1);
  const sally = document.getElementById(2);
  const fra = document.getElementById(3);
  const formy = document.getElementById(4);

  mq.style.display = "none";
  sally.style.display = "block";
  formy.style.display = "block";
  fra.style.display = "none";
}
function red() {
  alert("Kullanıcı reddediyor.");
  const mq = document.getElementById(1);
  const sally = document.getElementById(2);
  const fra = document.getElementById(3);
  const formy = document.getElementById(4);

  fra.style.display = "block";
  sally.style.display = "none";
  mq.style.display = "none";
  formy.style.display = "none";
}
