fetch("db.json")
.then(
    function(response){
        console.log(response.json())
    }
)