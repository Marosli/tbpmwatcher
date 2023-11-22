# tbpmwatcher
This JavaScript script is designed to monitor real-time resource rates (Wood, Stone, and Iron) on a web page. It provides a historical chart of resource rates and can display an alert if the rates fall below user-defined thresholds.

Prerequisites
  A modern web browser that supports JavaScript.
  Access to the TribalWars market page to obtain the resource rates.

Customize the thresholds for resource rates. When the rates fall below the thresholds, an alert will be displayed.
The script will start monitoring the resource rates and updating the historical chart every 5 seconds.
If any of the resource rates fall below the defined thresholds, a popup window with a "BER!" alert message will appear.

Customization:
You can customize the thresholds for Wood, Stone, and Iron rates by modifying the values of woodThreshold, stoneThreshold, and ironThreshold in the script.
You can also customize the alert message in the openAlertWindow function to display a different message when a threshold is exceeded.
