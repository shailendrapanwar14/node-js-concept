// nextTick is used to schedule a callback function in next iteration of event loop
 process.nextTick(()=>{
  console.log("Executed in next interation");
 })
 console.log("Executed in this interation");