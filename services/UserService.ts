import users from '@/mock/usersMock.json'

/* TODO : router les services sur autre chose que du mock. */
export function signInService(_identifier: string, _password: string): boolean {
    if(verifyCredentials(_identifier, _password)){
        return true
    }
    return false
}


/* Fonctions pour le mock. A supprimer une fois l'api faite. */
function verifyCredentials(_identifier: string, _password: string): boolean {
    const user = users.find(user => user.identifier === _identifier); // Recherche de l'utilisateur

    // Si l'utilisateur est trouvé et que le mot de passe correspond
    if (user && user.password === _password) {
        return true; // Connexion réussie
    }
    return false; // Identifiant ou mot de passe incorrect
}