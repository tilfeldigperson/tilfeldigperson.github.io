var mylobbyid
socket.on("connect", () => {
    socket.on("meldingRes", (arg) =>{
        console.log(arg.pick + " " + arg.lobby)
        
    })
});

socket.on("disconnect", () => {
console.log(socket.id);
});

socket.emit("melding", {pick: MesVal, lobby: mylobbyid});

