{
  //mot de passe par defaut
//  const motDepasseParDefaut=[1234,2007,1994,2003,'kadea']
// const bouttonEnvoye= document.getElementById("envoye")

// let  champDeSaisie = document.getElementById("Password")

// function comparerValeurChamp() {

// let  champDeSaisie = document.getElementById("Password").value;
// console.log(champDeSaisie);
// }
// comparerValeurChamp();

/*Si mot de passe saisie est differance de
 mot de passe  valide  retour " echec vous avez saisai un mauvais mot de pass"*/

// alerte il vous reste 4 possibilite 
// si echec retourn page votre compte est verouille contacter "L'admin"
}

const identifiants = ["Joseph", "Chadrack", "Djo", "Deborah"];
const passwords = ["cj01", "drack02", "djo03", "debs04"];
let isTrue;

const connexionBtn = document.getElementById("connexion-btn");

const afficheEntree = () => {
  const inputUser = document.getElementById("user").value;
  const inputPassword = document.getElementById("password").value;
  alert(`Bonjour ${inputUser} votre mot de passe est ${inputPassword}`);
  console.log(inputUser);

  for(const identifiant of identifiants) {
    if(inputUser === identifiant) {
      console.log('Identifiant trouvé !');
      isTrue = true;
    } else {
      console.log('Identifiant non retrouvé !');
      isTrue = false;
    }
  }
  for(const password of passwords) {
    if(inputPassword === password) {
      console.log('Mot de passe trouvé !');
      isTrue = true;
    } else {
      console.log('Mot de passe non retrouvé !');
      isTrue = false;
    }
  }

  // if(isTrue) {
  //   alert(`Bonjour ${inputUser} votre mot de passe est ${inputPassword}`);
  // } else {
  //   console.log('no')
  // }
}

// const userSearch = () => {
//   for(const identifiant of identifiants) {
//     if(inputUser === identifiant) {
//       console.log('Identifiant trouvé !');
//       isTrue = true;
//     } else {
//       console.log('Identifiant non retrouvé !');
//       isTrue = false;
//     }
//   }
// }

// const passwordSearch = () => {
//   for(const password of passwords) {
//     if(password === password) {
//       console.log('Mot de passe trouvé !');
//     } else {
//       console.log('Mot de passe non retrouvé !');
//     }
//   }
// }

connexionBtn.addEventListener("click", afficheEntree);