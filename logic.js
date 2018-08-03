const mongoose = require('mongoose');
const assert = require('assert');
mongoose.Promise = global.Promise;

//connect to mlab database
// const db = mongoose.connect('mongodb://waspadmin:kBm0z7LD0v8a8dcya0JZ@ds113122.mlab.com:13122/wasp');

/**
 * @function  [newProject]
 */
const newProject = (name, repo) => {
  //download files
  console.log(name);
  console.log(repo);
};


module.exports = {  newProject  };