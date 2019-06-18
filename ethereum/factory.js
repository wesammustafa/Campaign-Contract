import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const  instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa6D1AA92eE789DA9D15DbEC65636Cdafd6574b81'
);

export default instance;