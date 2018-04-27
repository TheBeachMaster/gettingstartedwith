var mqtt = require('mqtt-packet')
var parser = mqtt.parser()

// Synchronously emits all the parsed packets
parser.on('packet', function(packet) {
    console.log(packet)

})

parser.parse(new Buffer([

    0x40, 0x2, 0x12, 0x34

]))