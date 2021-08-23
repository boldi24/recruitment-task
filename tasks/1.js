/*

#1 Task - Sleep the code

[Description]
  - Create a function that will delay the execution of the async function for given period of time in seconds.

[Extra] 
  - How would you test this function? 

-------------------------------------------------------------------

[Example]
  const someAsyncFunction = async () => {
    ... // performs some logic
    await sleep(5); // delays execution for 5 seconds
    ... // continues the work 
  };
*/


const sleep = (ms) => ms; // implementation goes here


(async () => {
  console.log('Started', new Date().toLocaleTimeString());

  await sleep(10000);

  console.log('Finished', new Date().toLocaleTimeString());
})();
