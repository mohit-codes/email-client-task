export const getFilteredEmails = (emails, filterBy) => {
  switch (filterBy) {
    case "READ":
      return emails.filter((email) => email.read);
    case "UNREAD":
      return emails.filter((email) => !email.read);
    case "FAVORITE":
      return emails.filter((email) => email.favorite);
    default:
      return emails;
  }
};

export const formatDate = (date) => {
  const d = new Date(date);

  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const year = d.getFullYear().toString().padStart(4, "0");

  const hour = d.getHours() - 12;

  const min = d.getMinutes().toString().padStart(2, "0");

  const meridiem = hour < 12 ? "am" : "pm";

  return `${day}/${month}/${year}   ${hour}:${min} ${meridiem}`;
};
