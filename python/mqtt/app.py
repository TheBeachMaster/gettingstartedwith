import time as timer
import paho.mqtt.client as mqtt 
from random import randint

broker = "sungura1-angani-ke-host.africastalking.com"
brokerPort = 10883 
client = mqtt.Client("paho_mqtt_client")
username = "paho"
pahopassword = "pahopassword"

# fired when ckeint succesfully subscribes to a topic
def on_subscribe(client, obj, mid, granted_qos):
    print("Subscribed:" + str(mid) + " " + str(granted_qos))

# fired when a client successfully connects to the server    
def on_connect(client, userdata, flags, rc):
    print("Connected with code: " + str(rc))

# fired when a client disconnects from the server
def on_diconnect(client, userdata, rc):
    print("Successfully disconected from the broker")

# fired when a client receives a message from the subscribed topic
def on_message(client, userdata, message):
    timer.sleep(1)
    print("Received a message from the broker: ", str(message.payload.decode("utf-8")))

# create a bunch of random values and convert the values(int) to string . Stringify
def randomize_values(a, b):
    sensor_value = randint(a, b)
    sensor_payload = str(sensor_value)
    return sensor_payload

# supply authentication details to a connnecting client
client.username_pw_set(username, password=pahopassword)

# callbacks to be triggered when stuff happens : Event loops
client.on_message = on_message
client.on_subscribe = on_subscribe
client.on_connect = on_connect
client.on_diconnect = on_diconnect

# connction details (broker url, broker port, keepalive<=60)
client.connect(broker, brokerPort, 60)

# strange behavior where the publsihing occurs faster than the on_connect event is fired first
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
