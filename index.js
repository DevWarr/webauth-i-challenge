const server = require("./server");

const PORT = process.env.PORT || 2019;

server.listen(PORT, () => {
    console.log("\n=== Aye, we be listenin' on port " + PORT + " ===\n")
});
