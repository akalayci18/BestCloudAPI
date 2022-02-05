const app = require('express')();
const PORT = 5500;

app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.status(200).send ({
        firstname: 'Atahan',
        lastname: 'Kalayci'
    });
});