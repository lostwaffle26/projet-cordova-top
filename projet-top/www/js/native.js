var deviceName = document.getElementById("deviceName");
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  deviceName.innerHTML = device.model;
  navigator.vibrate(5000);
  navigator.notification.alert("Le téléphone vibre");
}

function onBatteryStatus(status) {
  alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
}


const deviceReady = () => {
  window.screen.orientation.lock("landscape");
  window.addEventListener("batterystatus", onBatteryStatus, false);
  window.addEventListener("deviceready", onDeviceReady, false);
};