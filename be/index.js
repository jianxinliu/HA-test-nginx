const express = require('express');
const os = require('os')

createApp(8080)

createApp(8081)

function createApp(port) {
    const app1 = express();
    app1.use(express.json());

    app1.get('/aa', (req, resp) => {
        resp.send('aa: ' + getIp() + ":" + port)
    })

    app1.post('bb', (req, resp) => {
        resp.send(req.body.name)
    })

    app1.listen(port);

    console.log(`lisen on : ${port}`);
}

function getIp() {
    return os.networkInterfaces().eth0[0].address
}

