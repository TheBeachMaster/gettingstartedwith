## Getting Started with Paho Python MQTT Client library 

> In a new directory  - use `sudo` if necessary

```bash
pip install paho-mqtt
```

> Create a new Python application file  `app.py`

In your application file: 

```python
import time as timer
import paho.mqtt.client as mqtt 
from random import randint

broker = "sungura1-angani-ke-host.africastalking.com"
brokerPort = 10883 
client = mqtt.Client("paho_mqtt_client")
username = "paho"
pahopassword = "pahopassword"

def on_subscribe(client, obj, mid, granted_qos):
    print("Subscribed:" + str(mid) + " " + str(granted_qos))
    
def on_connect(client, userdata, flags, rc):
    print("Connected with code: " + str(rc))

def on_diconnect(client, userdata, rc):
    print("Successfully disconected from the broker")

def on_message(client, userdata, message):
    timer.sleep(1)
    print("Received a message from the broker: ", str(message.payload.decode("utf-8")))

def randomize_values(a, b):
    sensor_value = randint(a, b)
    sensor_payload = str(sensor_value)
    return sensor_payload
client.username_pw_set(username, password=pahopassword)
client.on_message = on_message
client.on_subscribe = on_subscribe
client.on_connect = on_connect
client.on_diconnect = on_diconnect
client.connect(broker, brokerPort, 60)
timer.sleep(5)
counter = 0
while (counter < 30):
    client.loop_start()
    payload = randomize_values(10,70)
    client.publish("paho/mqtt/data", payload)
    client.subscribe("paho/mqtt/data")
    counter = counter + 1
    print(counter)
    timer.sleep(2)

print("Good Bye!")
client.loop_stop()
client.disconnect()

```

> Run your application 

```bash
python app.py
```

> Code available

> Code inspired by [this link](https://pypi.python.org/pypi/paho-mqtt/1.1) and [this](https://github.com/eclipse/paho.mqtt.python) 