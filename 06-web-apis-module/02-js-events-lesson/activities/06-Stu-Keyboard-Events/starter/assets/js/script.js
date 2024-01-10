function keydownAction(event) {
  // Access key code and key
  var keycode = event.code;
  var key = event.key;

  // Update the content of the HTML element with id "key"
  document.querySelector("#key").textContent = key;

  // Update the content of the HTML element with id "code"
  document.querySelector("#code").textContent = keycode;

  // Update the content of the HTML element with id "status"
  document.querySelector("#status").textContent = "Keydown";
}

function keyupAction() {
  // Update the content of the HTML element with id "status" on keyup
  document.querySelector("#status").textContent = "Keyup";
}

// Add Event Listener for "keyup" event
document.addEventListener("keyup", keyupAction);

// Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
