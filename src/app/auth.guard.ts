import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const jwtToken = localStorage.getItem('token'); // Utilisez la même clé que celle utilisée dans le service d'authentification
  if (!jwtToken) {
    // Rediriger l'utilisateur vers la page de connexion s'il n'y a pas de jeton JWT
    window.location.href = '/pageAccueil';
    return false;
  }
  return true; // Autoriser l'accès si un jeton JWT est présent
};
