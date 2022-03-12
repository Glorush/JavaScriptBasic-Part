function processOrder() {
  console.log('Porcessing order Customer 1');
  
  // asynchronous callback function
  setTimeout(() =>  {
      console.log('Cocking complated');
  }, 2000);
  console.log("Order Process for customer 1");
}
console.log("Take Order for customer 1")
processOrder();
console.log("Order complated for Customer 1")