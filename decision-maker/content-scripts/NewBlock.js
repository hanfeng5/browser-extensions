// let showBlocks = false;

// // Create a block container div and append it to the document
// const blockContainer = document.createElement("div");
// blockContainer.classList.add("blockContainer");
// document.body.appendChild(blockContainer);

// document.documentElement.innerHTML = 

function YesNoDecision() {
  const decision = Math.floor(Math.random() * 2)
  if (decision == 0) {
    alert("Yes!")
  } else {
    alert("No...")
  }
}

function OptionDecision(number) {
    const decisionCount = Math.floor(Math.random() * number + 1)
    const alertString = `Please proceed with Option ${decisionCount}`
    alert (alertString)

}


// Add a message listener that sets the value of "replace"
chrome.runtime.onMessage.addListener((request) => {
  // showBlocks = request["enable"];
  if (request["addYesNoButton"]) { 
    YesNoDecision()
    };

  if (request["addOption"]){
    let input = Number(window.prompt("How many options do you have?"));
    OptionDecision(input);
  } 
  // renderBlocks();
});
