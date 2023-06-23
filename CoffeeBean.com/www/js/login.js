const loginForm = document.getElementById('login');
const loginButton = document.getElementById('button');
const loginMessage = document.getElementById('sortie');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche la soumission du formulaire

  // Récupère les valeurs des champs de formulaire de connexion
  const username = document.getElementById('username').value;
  const password = document.getElementById('userpwd').value;

  // Crée une instance de l'objet XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Configure la requête AJAX
  xhr.open('POST', '../htbin/login.py'); // on poste avec xml sur le ficheir login.py
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Définit la fonction de rappel appelée lorsque la réponse est reçue
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Affiche le contenu de la réponse dans la zone de message de connexion
      loginMessage.textContent = xhr.responseText;
    }
    else{
      loginMessage.textContent= "un erreur s'est produit";
    }
  };

  // Envoie la requête AJAX avec les données de formulaire de connexion
  xhr.send(`username=${username}&userpwd=${password}`);
});
