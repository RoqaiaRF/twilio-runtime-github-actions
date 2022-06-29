const axios = require('axios');
const qs = require('query-string');

exports.handler = function(context, event, callback) {

  let twiml = new Twilio.twiml.MessagingResponse();

  let { 
      ApiVersion,
      SmsSid,
      SmsStatus,
      SmsMessageSid,
      NumSegments,
      ToState,
      From,
      MessageSid,
      AccountSid,
      ToCity,
      FromCountry,
      ToZip,
      FromCity,
      To,
      FromZip,
      ToCountry,
      Body,
      NumMedia,
      FromState,
      Latitude,
      Longitude,
      Address
   
  } = event;

  let requestBody = {
      ApiVersion,
      SmsSid,
      SmsStatus,
      SmsMessageSid,
      NumSegments,
      ToState,
      From,
      MessageSid,
      AccountSid,
      ToCity,
      FromCountry,
      ToZip,
      FromCity,
      To,
      FromZip,
      ToCountry,
      Body,
      NumMedia,
      FromState, 
      Latitude,
      Longitude,
      Address,
  };

    let url1 = "https://bot.snapbot.app";
    let url2 = "https://app.respond.io/twilio/whatsapp/webhook/";

   const config = {
     headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
     }};

 
  Promise.all([
       axios.post(url1, qs.stringify(requestBody), config),
       axios.post(url2, qs.stringify(requestBody), config)
       ]).then(result => {
           callback(null, twiml);
       }).catch(err => {
           console.log(err);
           callback(err);
       });
};
