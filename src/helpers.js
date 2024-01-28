import { format, parseISO } from "date-fns";

//this is useful if you need the website w/o www
export const cleanUri = (stringUri) => {
  const url = new URL(stringUri);
  const hostName = url.hostname.replace("www.", "");

  //remove trailing slash
  //regex per https://stackoverflow.com/questions/37832681/remove-trailing-from-the-end-of-url
  const pathName = url.pathname.replace(/\/+$/, "");

  return hostName + pathName;
};

//this is useful if just need bit after first /
export const getPathName = (stringUri) => {
  const url = new URL(stringUri);
  return url.pathname;
};

export function formatYear(stringDate) {
  return new Date(stringDate).getFullYear();
}

export function formatWorkDate(stringDate, includeDay = false) {
  //try convert to date object
  // const workDate = new Date(stringDate);
  //add midnight to force to UTC always so don't have off by one day bug
  // https://medium.com/fredwong-it/js-datetime-bug-auto-set-back-one-day-53d5d5e3903b
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  // const workDate = new Date(`${stringDate} 00:00:00`);

  //use parseISO instead so works w/ GitHub dates which have the time on them already
  // https://stackoverflow.com/questions/48172772/time-zone-issue-involving-date-fns-format
  const workDate = parseISO(stringDate);

  //check if not a date, e.g. 'Present'
  if (isNaN(workDate)) {
    return stringDate;
  }

  //add format with day so can use in info sheets
  if (includeDay == true) {
    return format(workDate, "yyyy-MM-dd");
  }

  return format(workDate, "MMM yyyy");
}

//use find to get single object instead of array
//https://stackoverflow.com/questions/51747519/returning-a-single-value-from-a-filter
export const getProfile = (profiles, profileToRetrieve) =>
  profiles.find((profile) => profile.network === profileToRetrieve);
