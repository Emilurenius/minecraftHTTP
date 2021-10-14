import RPi.GPIO as GPIO
import requests, time

GPIO.setmode(GPIO.BCM)

GPIO.setup(4, GPIO.OUT)

while True:
    time.sleep(0.1)
    currentState = requests.get("http://localhost:3000/lightState").json()
    print(currentState)

    if currentState == "true":
        GPIO.output(4, True)
    else:
        GPIO.output(4, False)