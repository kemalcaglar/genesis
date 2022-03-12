if(localStorage.getItem("notificationData") == null){
  var firstData = data[0];
  data.shift();
  data.push(firstData);
  localStorage.setItem(JSON.stringify(data))
}else {
  var dataDay = JSON.parse(localStorage.getItem("notificationData"))
  var firstData = data[0];
  dataDay.shift();
  dataDay.push(firstData);
  localStorage.setItem(JSON.stringify(dataDay))
}