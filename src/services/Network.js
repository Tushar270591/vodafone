const get = (endpoint, params) => fetch(endpoint, params);

const Network = {
  get,
};

export default Network;
