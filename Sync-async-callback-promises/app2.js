const takeOrder = (customer , callback) => {
  console.log(`Take Order For ${customer}`);
  callback(customer);
}

const processOrder = (customer, callback) =>{
  console.log( `Processing Order ${customer}`);
  setTimeout(() => {
    console.log("coocked Complated");
    console.log(`Order processing for ${customer}`);
    callback(customer)
  },2000);
};

const OrderComplated = (customer) =>{
  console.log(`Order Complated for ${customer}`);
}


takeOrder('customer 1', (customer) =>{
  processOrder(customer, (customer) =>{
    OrderComplated(customer) ;
  });
});
