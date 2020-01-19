contract.on("ValueChanged", (author, oldValue, newValue, event) => {
  // Called when anyone changes the value

  console.log(author);
  // "0x14791697260E4c9A71f18484C9f997B308e59325"

  console.log(oldValue);
  // "Hello World"

  console.log(newValue);
  // "Ilike turtles."

  // See Event Emitter below for all properties on Event
  console.log(event.blockNumber);
  // 4115004
});