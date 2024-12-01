export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  export function getPostTimeAgo(postDate: string): string {
    const postDateObj = new Date(postDate);
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - postDateObj.getTime();
    const diffSeconds = diffTime / 1000;
  
    if (diffSeconds < 60) {
      return "À l'instant";
    }
  
    const isToday = currentDate.toDateString() === postDateObj.toDateString();
    const yesterday = new Date();
    yesterday.setDate(currentDate.getDate() - 1);
    const isYesterday = yesterday.toDateString() === postDateObj.toDateString();
  
    const formatTime = (date: Date) => `${date.getHours()}h${String(date.getMinutes()).padStart(2, '0')}`;
  
    if (isToday) {
      return `Aujourd'hui à ${formatTime(postDateObj)}`;
    }
  
    if (isYesterday) {
      return `Hier à ${formatTime(postDateObj)}`;
    }
  
    const diffDays = diffSeconds / (3600 * 24);
  
    if (diffDays < 7) {
      const dayOfWeek = postDateObj.toLocaleDateString('fr-FR', { weekday: 'long' });
      return `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)} à ${formatTime(postDateObj)}`;
    }
  
    const diffMonths = diffDays / 30;
    const day = postDateObj.getDate();
    const month = postDateObj.toLocaleString('fr-FR', { month: 'long' });
  
    if (diffMonths < 12) {
      return `Le ${day} ${month} à ${formatTime(postDateObj)}`;
    }
  
    const year = postDateObj.getFullYear();
    return `Le ${day} ${month} ${year}`;
  }
  
export function getScheduleDateStr(dateStr: string): string {
  const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  const dateObj = new Date(dateStr.replace(" ", "T")); // Convertit le format SQL en ISO 8601
  const currentDate = new Date();

  // Vérifie si la date est passée
  if (dateObj < currentDate) {
    return "Terminé";
  }

  // Formatage de l'heure
  const hours = dateObj.getHours();
  const minutes = String(dateObj.getMinutes()).padStart(2, '0'); // Ajoute un zéro si nécessaire
  const timeStr = `${hours}h${minutes}`;

  // Gestion des cas spécifiques (Aujourd'hui et Demain)
  const isToday = currentDate.toDateString() === dateObj.toDateString();

  const tomorrow = new Date();
  tomorrow.setDate(currentDate.getDate() + 1);
  const isTomorrow = tomorrow.toDateString() === dateObj.toDateString();

  if (isToday) {
    return `${timeStr}, Aujourd'hui `;
  }

  if (isTomorrow) {
    return `${timeStr}, Demain`;
  }

  // Cas généraux
  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];

  return `${timeStr} - ${dayOfWeek} ${day} ${month}`;
}
  