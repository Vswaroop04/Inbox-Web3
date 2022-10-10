const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// Here I have used goerli testnet
// it is your choice to use your fav network

const provider = new HDWalletProvider(
    'your mneumonic',
    'https://goerli.infura.io/v3/your infura key'
    );

    const web3 = new Web3(provider);

    const deploy = async () => {
        const accounts = await web3.eth.getAccounts();

        console.log('Attempting to deploy from account', accounts[0]);

        const result = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode, arguments: ['Hi there!'] })
            .send({ gas: '1000000', from: accounts[0] });

        console.log('Contract deployed to', result.options.address);
    };
    deploy();