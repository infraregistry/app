import { now, ZonedDateTime } from "@internationalized/date";

export const getTimeSince = (date: Date): string => {
  const inputDate: ZonedDateTime = new ZonedDateTime(date.getFullYear(), date.getMonth() + 1, date.getDate(), "GMT", date.getTimezoneOffset(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  const currentDate: ZonedDateTime = now(inputDate.timeZone);

  const diffYears = currentDate.year - inputDate.year;
  const diffMonths = currentDate.month - inputDate.month;
  const diffDays = currentDate.day - inputDate.day;

  if (diffYears > 0) {
    return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
  } else if (diffMonths > 0) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
  } else if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else {
    return "Today";
  }
};
