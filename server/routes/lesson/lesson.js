const List = require('./../../models/List');
require('dotenv').config();

module.exports = (router) => {
  router.get('/list/baseList', async (req, res) => {
    try{
      const id = process.env.BASE_LIST_ID;
      const list = await List.findById(id);
      res.status(200).send(list);
    } catch(err) {
      return  console.error(err);
    }
  });
};