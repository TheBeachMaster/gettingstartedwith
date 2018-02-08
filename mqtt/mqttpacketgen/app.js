let mqtt = require('mqtt-packet');

const connect = {
    cmd: 'connect',
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    retain: false,
    qos: 0,
    keepalive: 15,
    clientId: 'client_test1',
    username: 'user',
    password: new Buffer('password')
}

console.log(mqtt.generate(connect))