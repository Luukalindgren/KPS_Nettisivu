router.get('/', function (req, res, next) {

    axios.get('https://bad-api-assignment.reaktor.com/rps/history/')
    .then(response => {
        res.send(response.data.result);
    }).catch(error => {
        res.send(error.message);
    })
});