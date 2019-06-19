import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const  instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0E4b1282b665e24959e3bC21d3724895F4b4e319'
);

export default instance;