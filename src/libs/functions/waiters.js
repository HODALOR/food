const _calTprice = async (data) => {
  var pr = 0;
  data.forEach((item) => {
    pr += parseInt(item.price) * parseInt(item.qt);
  });
  return pr;
};

const _calTQt = async (data) => {
  var qt = 0;
  data.forEach((item) => {
    qt += parseInt(item.qt);
  });
  return qt;
};

export { _calTQt, _calTprice };
