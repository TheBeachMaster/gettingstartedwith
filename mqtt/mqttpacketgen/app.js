let mqtt = require('mqtt-packet');

const connect = {
    cmd: 'connect',
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    clientId: 'client_test1'
}

console.log(mqtt.generate(connect))