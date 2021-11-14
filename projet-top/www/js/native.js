var deviceName = document.getElementById("deviceName");
document.addEventListener("deviceready", onDeviceReady, false);

const toogleModalOffline = (show) => {
  const modal = document.getElementById("modal-unconnect");
  modal.className = show ? "show" : "";
};


function onBatteryStatus(status) {
  if (status.level <= 25)
    alert("La batterie est faible: " + status.level + "%");
}

function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN] = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI] = 'WiFi connection';
  states[Connection.CELL_2G] = 'Cell 2G connection';
  states[Connection.CELL_3G] = 'Cell 3G connection';
  states[Connection.CELL_4G] = 'Cell 4G connection';
  states[Connection.CELL] = 'Cell generic connection';
  states[Connection.NONE] = 'No network connection';
  if (states[networkState] == states[Connection.WIFI]) {
    alert("connecté au WIFI");
  } else {
    alert('Connection type: ' + states[networkState]);
  }

}

function onOffline() {
  window.open("offline.html");
}

function onOnline() {
  window.open("home.html");
}

var vibrerButton = document.getElementById("vibrerButton");

function onDeviceReady() {
  deviceName.innerHTML = device.model;
  vibrerButton.addEventListener('click', () => {
    navigator.vibrate(5000);
    navigator.notification.alert("Le téléphone vibre");
  })

  window.addEventListener("batterystatus", onBatteryStatus, false);

  document.addEventListener("offline", onOffline, false);
  document.addEventListener("online", onOnline, false);
}