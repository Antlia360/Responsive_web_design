/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */



function billingFunction(){
  var shippingname = document.getElementById('shippingName');
  var shippingzip = document.getElementById('shippingZip');
  var billingname = document.getElementById('billingName');
  var billingzip = document.getElementById('billingZip');
  
  if (document.getElementById('same').checked) {
    billingname.value = shippingname.value;
    billingzip.value = shippingzip.value;
  } else {
    billingname.value=null;
    billingzip.value=null;

  }
}