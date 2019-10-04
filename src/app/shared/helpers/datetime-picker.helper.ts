export const setDefaultTime = (date: any) => {
  if (typeof date !== 'undefined' && date !== '' && date !== null) {
    return date.setHours(0, 0, 0, 0);
  }
};
