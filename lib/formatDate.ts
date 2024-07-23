function formatDate(dateString: string): string {
  const dateParts = dateString.split(/[-./]/);
  if (dateParts.length !== 3) {
    return "Incorrect date";
  }

  const [yearStr, monthStr, dayStr] = dateParts;
  const day = parseInt(dayStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  const year = parseInt(yearStr, 10);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 0 || month > 11 || year < 1) {
    return "Incorrect date";
  }

  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const monthName = months[month];

  return `${day} ${monthName} ${year}`;
}

export default formatDate;