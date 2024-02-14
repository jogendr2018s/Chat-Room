const socket = io("http://localhost:8800/");
const container = document.querySelector('.container');
const send1 = document.querySelector('.send');
const message = document.querySelector('.message');
const name= document.querySelector('.name');
const sender= document.querySelector('.sending');

message.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click event propagation to the parent elements
});

sender.addEventListener('click',()=>{
    socket.emit('join',name.value);
    document.getElementById('username-form').remove();

})


function append (message1,direction){
    const html = document.createElement('div');
    html.classList.add(direction);
    html.innerHTML=message1;
    container.appendChild(html)
}
socket.on('joined',value=>{
    append(`${value} joined`,'right')
})
send1.addEventListener('click',()=>{
    var message2= message.value;
    append(message2,'left');
    message.value='';
    socket.emit('send',message2)
})
socket.on('recieve',value=>{
    append(`${value.sender} :  ${value.datar}`,'right')
})
