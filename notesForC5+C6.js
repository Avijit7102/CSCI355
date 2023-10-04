// Simulating an asynchronous operation with setTimeout


function performAsyncTask(callback) {
    setTimeout(function () {
      console.log("Asynchronous task is complete.");
      callback(); // call back function
    }, 2000); // here is 2 sec delay 
  }
  
  // Callback function to be executed after the asynchronous task
  function afterAsyncTask() {
    console.log("Callback function executed.");
  }
  
  // Calling the performAsyncTask function with the callback
  performAsyncTask(afterAsyncTask);
  
  console.log("Main program continues..."); // This line is executed before the callback because of 2 sec delay

  // DNS

const dns = require('dns'); // Part of Node.js library

const domainName = 'www.example.com';

dns.lookup(domainName, (err, address) => {     // dns.lookup() directly return a single IP address.
  if (err) {
    console.error(`DNS resolution error: ${err.message}`);
    return;
  }

  console.log(`IP address for ${domainName}: ${address}`);
});



function task1() {
    console.log("Task 1 started");
    for (let i = 0; i < 1000; i++) {}
    console.log("Task 1 completed");
  }
  
  function task2() {
    console.log("Task 2 started");
    for (let i = 0; i < 5000; i++) {}
    console.log("Task 2 completed");
  }
  
  function task3() {
    console.log("Task 3 started");
    for (let i = 0; i < 2000; i++) {}
    console.log("Task 3 completed");
  }
  
  // Execute tasks sequentially
  task1();
  task2();
  task3();
  
  console.log("All tasks have been completed.");
  