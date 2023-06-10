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
