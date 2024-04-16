export function dateFormat(dateInMiliseconds: number, type: 'date' | 'time') {
  switch (type) {
    case 'date':
      const unformattedDate = new Date(dateInMiliseconds);
      const day = unformattedDate.getDate().toString().padStart(2, '0');
      const month = (unformattedDate.getMonth() + 1)
        .toString()
        .padStart(2, '0');
      const year = unformattedDate.getFullYear().toString().slice(2);
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;

    case 'time':
      return new Date(dateInMiliseconds).toLocaleTimeString('pt-BR').substring(0, 5);
    default:
      return new Date().toLocaleDateString();
  }
}