let myObject = {
  greeting: 'Hi, there',

  writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
  },
};

myObject.writeMessage = myObject.writeMessage.bind(myObject);

greeting = 'Hello';
myObject.writeMessage('It is sunny today');

let myFunction = myObject.writeMessage;
myFunction('It is sunny today');
