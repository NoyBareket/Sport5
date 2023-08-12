
function start() {
    console.log("Start")
    setTimeout(() => {
        console.log("Middle")
    }, 30000);

    setTimeout(() => {
        console.log("Finish")
    }, 180000);
}

start()