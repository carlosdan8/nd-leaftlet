module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New user connected");
    socket.on("userCoordenates", (coords) => {
      console.log(coords);
      socket.broadcast.emit("newUserCoordenates", coords);
    });
  });
};
