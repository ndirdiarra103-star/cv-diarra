function imprimerCV() {
  window.print();
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
// Animation machine à écrire
const element = document.getElementById("texte-anime");

if (element) {
  // vérifie que l'élément existe avant d'écrire
  const texte =
    "Je suis une étudiante en Licence Informatique 2, passionnée par le développement web et les nouvelles technologies.";
  let index = 0;

  function ecrire() {
    if (index < texte.length) {
      element.innerHTML += texte.charAt(index);
      index++;
      setTimeout(ecrire, 30);
    }
  }
  ecrire();
}

// Appliquer le mode sauvegardé au chargement
if (localStorage.getItem("mode") === "sombre") {
  document.body.classList.add("sombre");
  document.getElementById("btnMode").textContent = "☀️ Mode Clair";
}

// Bouton mode sombre
document.getElementById("btnMode").addEventListener("click", function () {
  document.body.classList.toggle("sombre");

  if (document.body.classList.contains("sombre")) {
    this.textContent = "☀️ Mode Clair";
    localStorage.setItem("mode", "sombre");
  } else {
    this.textContent = "🌙 Mode Sombre";
    localStorage.setItem("mode", "clair");
  }
});
