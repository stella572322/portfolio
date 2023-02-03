const formatContent = (string) => {
  const splitStr = string.split('*');
  let integrateStr = '';

  splitStr.forEach((str, i) => {
    if (i % 2 === 0) {
      integrateStr += str;
      return undefined;
    }
    integrateStr += `<strong>${str}</strong>`;
    return undefined;
  });

  return integrateStr;
};

export default {
  formatContent,
};
