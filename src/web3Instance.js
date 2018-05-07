import Web3 from 'web3'


let web3 = new Web3(window.web3.currentProvider);

let ABI_DEFINITION = [{"constant":false,"inputs":[{"name":"product","type":"bytes32"},{"name":"peer","type":"bytes32"}],"name":"addProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3146610d"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"products","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x49493187"},{"constant":false,"inputs":[{"name":"addr_","type":"address"},{"name":"name_","type":"bytes32"}],"name":"addPeerList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6ab399af"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userList","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9f4216e8"},{"constant":true,"inputs":[],"name":"getPeerList","outputs":[{"name":"","type":"address[]"},{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb4ee6d5e"},{"constant":true,"inputs":[{"name":"peer","type":"bytes32"}],"name":"getProducts","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd19e7d32"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"}]

let CONTRACT_ADDRESS = "0x7351EDA0905B61588E0e7D8D361e53FECa6BD517"

const contractInstance = new web3.eth.Contract(ABI_DEFINITION, CONTRACT_ADDRESS);

export { contractInstance, web3}
