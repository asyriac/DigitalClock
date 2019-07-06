const sec = document.querySelector('.time');
const time = setInterval(()=>{
  const now = new Date();
  sec.innerText = `${now.getHours()<10) ? ("0" + now.getHours()) : now.getHours()}:${(now.getMinutes()<10) ? ("0" + now.getMinutes()) : now.getMinutes()}:${(now.getSeconds()<10) ? ("0" + now.getSeconds()) : now.getSeconds()}`
},10);
