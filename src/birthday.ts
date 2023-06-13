export interface Birthday {
  year: number;
  month: number;
  day: number;
}


export function getAge(birthday: Birthday) {
  const today = new Date();
  const thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.day);
  const age = today.getFullYear() - birthday.year;
  return today < thisYearsBirthday ? age-1 : age;
}