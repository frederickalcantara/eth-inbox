const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'call tide couple urge chuckle abstract page bundle retreat fever pool airport',
  'https://rinkeby.infura.io/v3/1fcf214658b94f38a84e928bff2fb4f9'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from account: ${accounts[0]}`);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello World!'] })
    .send({ from: accounts[0], gas: '1000000' });

  console.log(`Contracted deployed to ${result.options.address}`);
};

deploy();