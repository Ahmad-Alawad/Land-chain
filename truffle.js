module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: '0xC69965a7e9034BD63e2955A2FcBC53a92D97568f',
      network_id: 5777, // Match any network id
       gasPrice: 1,   // <--- Twice as much
       gas: 9999999,   // <--- Twice as much
    }
  }
};
