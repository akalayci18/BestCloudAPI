const app = require('express')();
const request = require('request-promise');
const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.status(200).send ({
        firstname: 'Atahan',
        lastname: 'Kalayci'
    });
});

app.get('/temperature', (req, res) => {

    let city=req.query.city;

    var getTemp = {
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=6b1336510c7a5a4d3256187801963143`,
        json: true
    };
    //waits till API call is completed o.w returns an error in JSON format.
    request(getTemp).then(
        (response) => {
            res.send({
                temperature: response.list[0].main.temp
            });
        }
    ).catch(err => {
        res.send({
            message: 'Internal Server Error'
        });
    })
        
});