const Second = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof value == 'string') {
        resolve(value);
      } else {
        reject(false);
      }
    }, 2000);
  });
};

export default Second;
