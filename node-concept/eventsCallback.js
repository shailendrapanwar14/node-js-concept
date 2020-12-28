let events = require('events') 
let emitter = new events.EventEmitter()

emitter.on('done', function(results) 
{  console.log('Done: ', results) })