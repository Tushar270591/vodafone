import Network from "./Network";
const authConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const urls = {
  getData: "/phones.json",
};
const PhonesData = {
  getData: () =>
    Network.get(urls.getData, {
      headers: {
        ...authConfig.headers,
      },
    }),

  getPaginatedData: (data, page) => {
    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    return data.slice(startIndex, endIndex);
  },

  getFilteredData: (data, filterParams) => {
    return data
      .filter((product) => {
        let isFiltered = false;
        product.specifications.forEach((spec) => {
          if (spec.name === "Brand") {
            isFiltered =
              filterParams["Brand"].length === 0 ||
              filterParams["Brand"].indexOf(spec.value) !== -1;
          }
        });
        return isFiltered;
      })
      .filter((product) => {
        let isFiltered = false;
        product.specifications.forEach((spec) => {
          if (spec.name === "Operation System") {
            isFiltered =
              filterParams["Operation System"].length === 0 ||
              filterParams["Operation System"].indexOf(spec.value) !== -1;
          }
        });
        return isFiltered;
      });
  },
};

export default PhonesData;
