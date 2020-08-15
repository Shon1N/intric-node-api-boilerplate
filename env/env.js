const portNumber = process.env.PORT;
//TODO: Confirm the port number of the database
const dbPortNumber = 27017;
const dbName = '';
const homeRoot = 'http://localhost:' + portNumber ;
const connesctionStrings = 'mongodb://localhost:' + dbPortNumber + '/' + dbName;


module.exports = {
    portNumber:portNumber,
    dbPortNumber: dbPortNumber,
    dbName: dbName,
    homeRoot: homeRoot,
    connesctionStrings: connesctionStrings
};
