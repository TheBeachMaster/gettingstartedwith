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

var pub = {
    cmd: 'publish',
    qos: 0,
    dup: false,
    topic: 'user/progmem',
    payload: new Buffer([0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64]),
    retain: false
}

const publishPacket = {
    cmd: 'publish',
    qos: 1,
    dup: false,
    topic: 'user/qos1callback',
    retain: false,
    payload: 'qos1callback',
    messageId: 42
}

const connAck = {
    cmd: 'connack',
    returnCode: 0,
    qos: 1,
    sessionPresent: false
}

const sub = {
    cmd: 'subscribe',
    messageId: 2,
    subscriptions: [{ topic: 'user/qos0', qos: 0 }]
}

const pubAck = {
    cmd: 'puback',
    topic: 'user/qos1',
    messageId: 42,
}

const subAck = {
    cmd: 'suback',
    granted: [0],
    messageId: 2,
    qos: 0,
}

const pubRec = {
    cmd: 'pubrec',
    messageId: 42
}

const unsubPacket = {
    cmd: 'unsubscribe',
    qos: 1,
    messageId: 2,
    dup: false,
    retain: false,
    unsubscriptions: ['user/unsub']
}

const unsubAck = {
    cmd: 'unsuback',
    messageId: 2,
}

console.log(mqtt.generate(pubAck))