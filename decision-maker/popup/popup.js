const checkbox = document.getElementById("enable");
const addYesNoButton = document.getElementById("add-YesNo");
const addOption = document.getElementById("add-option");

// Add event listeners to the checkbox and button
checkbox.addEventListener("change", (e) => updateContentScript(false));
addYesNoButton.addEventListener("click", (e) => updateContentScript(true));
addOption.addEventListener("click", (e) => updateContentScript(true));


async function updateContentScript(clicked) {
  const message = { enable: checkbox.checked, addYesNoButton: clicked, addOption: clicked };
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  // const response = await chrome.tabs.sendMessage(tab.id, message);
  const response =  await chrome.tabs.sendMessage(tab.id, message);

  // You can do something with response from the content script here
  console.log(response);
}
