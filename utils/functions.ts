export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

export function getPostTimeAgo(postDate: string): string{
    const postDateObj = new Date(postDate);
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - postDateObj.getTime();
    const diffSeconds = diffTime / 1000;
    const diffMinutes = diffSeconds / 60;
    const diffHours = diffMinutes / 60;
    const diffDays = diffHours / 24;
    const diffMonths = diffDays / 30;
    const diffYears = diffDays / 365;
  
    if (diffSeconds < 0) {
        return "Dans le Futur le Mec! ";
    } else if (diffSeconds > 0 && diffSeconds < 60) {
      return "A l'instant";
    } else if (diffMinutes < 60) {
      return `Il y a ${Math.floor(diffMinutes)} minute${Math.floor(diffMinutes) > 1 ? 's' : ''}`;
    } else if (diffHours < 24) {
      return `Il y a ${Math.floor(diffHours)} heure${Math.floor(diffHours) > 1 ? 's' : ''}`;
    } else if (diffDays < 7) {
      return `Il y a ${Math.floor(diffDays)} jour${Math.floor(diffDays) > 1 ? 's' : ''}`;
    } else if (diffMonths < 12) {
      const weekNumber = Math.ceil((postDateObj.getDate() - 1) / 7); // Calcul du numéro de la semaine
      const month = postDateObj.toLocaleString('fr-FR', { month: 'short' });
      return `Semaine ${weekNumber} ${month}`;
    } else {
      const weekNumber = Math.ceil((postDateObj.getDate() - 1) / 7);
      const month = postDateObj.toLocaleString('fr-FR', { month: 'short' });
      const year = postDateObj.getFullYear();
      return `Semaine ${weekNumber} ${month} ${year}`;
    }
}