import RPi.GPIO as GPIO
import requests, time

GPIO.setmode(GPIO.BCM)

GPIO.setup(17, GPIO.OUT)

while True:
    time.sleep(0.1)
    currentState = requests.get("http://localhost:3000/lightState").json()
    #print(currentState)

    if currentState:
        print("Light on")
        GPIO.output(17, True)
    else:
        #print("light off")
        print(type(currentState))
        GPIO.output(4, False)