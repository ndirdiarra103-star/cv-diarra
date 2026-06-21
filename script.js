function imprimerCV() {
  window.print();
}
function telechargerCV() {
  const cv = document.querySelector(".cv");

  const option = {
    margin: 10,
    filename: "CV_MAME_DIARRA_NDIR.pdf",
    Image: { type: "jpeg", quality: 0.98 },
    html2canavas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  };
  html2pdf().set(option).from(cv).save;
}
function envoyerMessage() {
  // Récupérer les valeurs
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Vérifier que les champs ne sont pas vides
  if (nom === "" || email === "" || message === "") {
    alert("⚠️ Veuillez remplir tous les champs !");
    return;
  }

  // Afficher le message de confirmation
  const confirmation = document.getElementById("confirmation");
  confirmation.style.display = "block";

  // Vider les champs après envoi
  document.getElementById("nom").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Cacher le message après 4 secondes
  setTimeout(function () {
    confirmation.style.display = "none";
  }, 4000);
}
const texte =
  "Je suis une étudiante en Licence Informatique 2, passionnée par le développement web et les nouvelles technologies. J'aime apprendre le HTML et le CSS pour créer de belles pages web.";

let index = 0;
const element = document.getElementById("texte-anime");

function ecrire() {
  if (index < texte.length) {
    element.innerHTML += texte.charAt(index);
    index++;
    setTimeout(ecrire, 30);
  }
}

ecrire();
