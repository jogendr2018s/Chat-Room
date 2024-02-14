const io = require('socket.io')(8800)
const users={}
io.on('connection',socket =>{
    socket.on('join',value=>{
        users[socket.id]=value;
        console.log(users);
        socket.broadcast.emit('joined',value);
    })
    socket.on('send',value=>{
        socket.broadcast.emit('recieve',{'datar':value,'sender':users[socket.id]})
    })
    socket.on('disconnected',value=>{
        socket.broadcast.emit('recieve',{'datar':disconnected,'sender':users[socket.id]})
    })
})


