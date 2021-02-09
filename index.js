const tmi = require('tmi.js');

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: ['jttai']
});

client.connect();

client.on('message', (channel, tags, message, self)=>{
  console.log(`${tags['display-name']}: ${message}`);

});

