//Setup connection for salesforce 
var sf = require('node-salesforce');

const dotenv = require('dotenv'); 
const config = dotenv.config() ;
var username = config.SF_USERNAME; 
var password = config.SF_PASSWORD  ; 
var salesforceConnection = new sf.Connection({
    oauth2 : {
      loginUrl : config.SF_CONNECTIONURL,
      clientId : config.SF_CLIENTID,
      clientSecret : config.SF_CLIENTSECRECT
    }
  });
  salesforceConnection.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
  
 
  });

  // Export All Methods
module.exports = {
    salesforceConnection
    
}