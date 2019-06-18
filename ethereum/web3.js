import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.ethereum) {
  // Modern dapp browsers...
  web3 = new Web3(ethereum);
  try {
    // Request account access if needed
    ethereum.enable().then(res => console.log(res));
  } catch (error) {
    // User denied account access...
    console.log(error);
  }
} else if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask.
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  web3 = new Web3(provider);
}

export default web3;