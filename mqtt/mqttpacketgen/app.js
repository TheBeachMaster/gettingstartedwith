let mqtt = require('mqtt-packet');

const connect = {
    cmd: 'connect',
    protocolId: 'MQTT',
    dup: false,
    protocolVersion: 4,
    clean: true,
    retain: false,
    topic: null,
    payload: null,
    qos: 0,
    keepalive: 15,
    clientId: 'client_test1',
    username: 'user',
    password: new Buffer('password')
}

var object = {
    cmd: 'publish',
    messageId: 42,
    qos: 1,
    dup: false,
    topic: 'willTopic',
    payload: new Buffer('test'),
    retain: false
}

const publishPacket = {
    cmd: 'publish',
    qos: 1,
    dup: false,
    topic: 'willTopic',
    retain: false,
    payload: 'mqttpayload'
}

const connAck = {
    cmd: 'connack',
    returnCode: 0,
    sessionPresent: false
}

const pubAck = {
    cmd: 'puback',
    messageId: 4660,
    qos: 1,
    topic: 'topic'
}
console.log(mqtt.generate(connect))