const start = (port) => {
    const localtunnel = require('localtunnel');

    const tunnel = localtunnel(port, { subdomain: 'cardboardboxuni' }, (err, tunnel) => {
        console.log(tunnel.url);
    });

    tunnel.on('close', () => {
        // When the tunnel is closed
        console.log('tunnel closed');
    });

    process.on("exit", () => {
        tunnel.close();
    })
}


module.exports = start;
