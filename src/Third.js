const Third = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      !isNaN(value) ? resolve('is Number') : reject('is not Number');
    }, 2000);
  });
};

export default Third;
