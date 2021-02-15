const get = (endpoint: string, params?: {}) => fetch(endpoint, params)

const Network = {
    get
}

export default Network;