const Filters = {
  // const getValuesbyFilterType =  (data, filterType) => {
  //   return
  // },
  getUniqueValuesbyFilterType: (data, filterType) => {
    const valuesbyFilterType = data.map((product) => {
      let value = "";
      product.specifications.forEach((spec) => {
        if (spec.name === filterType) {
          value = spec.value;
        }
      });
      return value;
    });
    return [...new Set(valuesbyFilterType)];
  },
};

export default Filters;
