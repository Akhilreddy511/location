var express = require('express');
const ipstack = require('ipstack')

var app = express();
const PORT = process.env.PORT || 4000;
app.use((req) => {
    var ipAddress = (req.ip).split(":");
    var a = ipAddress[ipAddress.length - 1];
    console.log(a)

    var ip = a
    var access_key = 'c66ea5fd3b7a531870dd58e6bbab7bb2';
    ipstack(ip, access_key, (err, response) => {
        console.log(response)
    })

}
)


app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`am listen at port no:${PORT}`)
})