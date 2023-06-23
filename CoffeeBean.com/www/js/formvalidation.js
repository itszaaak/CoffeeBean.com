const emailInput = document.getElementById('useremail');                // on recupere les donnes dans chaque champ du formulaire via l'id
const userpwdInput = document.getElementById('userpwd');
const usernameInput = document.getElementById('username');
const dateInput = document.getElementById('birthdate');
const nomInput = document.getElementById('firstname');
const prenomInput = document.getElementById('lastname');

const regexEmail = /^\S+@\S+\.\S+$/;                                    // on cree des expressions regulieres pour valider les donnes
const regexpwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
const regexUsername = /^.{6,}$/;
const regexDate = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
const regexNom = /^[^\d]+$/






function validateInput(inputElement, regex) {                           // fonction pour verifier si la donne rentreé est valide au sein
  inputElement.addEventListener('input', () => {                        // de la regex
    const value = inputElement.value;
    if (!regex.test(value)) {
      inputElement.setCustomValidity('Veuillez saisir une valeur valide');
    }
    else {
      inputElement.setCustomValidity('');
    }
  });
}

function validateDateOfBirth(inputElement, regex) {                     // fonction pour la validation de la date saisie
  inputElement.addEventListener('blur', () => {
    const dateStr = inputElement.value;
    if (regex.test(dateStr)) {
      const [day, month, year] = dateStr.split('/');
      const date = new Date(`${year}-${month}-${day}`);
      const today = new Date();                                         // date d'aujourd'hui pour que la date saisie soit pas 
      if (date instanceof Date && !isNaN(date)&& date<today) {          // posterieure a la date d'aujourdhui
        inputElement.setCustomValidity('');                             // pas d'erreur dans le formulaire
      } 
      else {
        inputElement.setCustomValidity('Veuillez saisir une date de naissance valide');
      }
    } 
    else if (dateStr.length === 0) {
      inputElement.setCustomValidity('');
    } else {
      inputElement.setCustomValidity('Veuillez saisir une date de naissance valide');
    }
  });
}

//on appel les fonctions pour verifier chaque donne
validateInput(nomInput, regexNom);
validateInput(prenomInput, regexNom);
validateDateOfBirth(dateInput, regexDate);
validateInput(usernameInput, regexUsername);
validateInput(userpwdInput, regexpwd);
validateInput(emailInput, regexEmail);



