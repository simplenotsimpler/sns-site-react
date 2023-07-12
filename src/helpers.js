//this is useful if you need the website w/o www
export const cleanUri = (stringUri) => {
  const url = new URL(stringUri);
  const hostName = url.hostname.replace("www.", "");
  const pathName = url.pathname;

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

export function formatWorkDate(stringDate) {
  //try convert to date object
  // const workDate = new Date(stringDate);
  //add midnight to force to UTC always so don't have off by one day bug
  // https://medium.com/fredwong-it/js-datetime-bug-auto-set-back-one-day-53d5d5e3903b
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  const workDate = new Date(`${stringDate} 00:00:00`);

  //check if not a date, e.g. 'Present'
  if (isNaN(workDate)) {
    return stringDate;
  }

  return workDate.toLocaleDateString("default", {
    month: "short",
    year: "numeric",
  });
}

//use find to get single object instead of array
//https://stackoverflow.com/questions/51747519/returning-a-single-value-from-a-filter
export const getProfile = (profiles, profileToRetrieve) =>
  profiles.find((profile) => profile.network === profileToRetrieve);
