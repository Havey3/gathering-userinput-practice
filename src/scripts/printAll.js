const printAll = () => {
    document.querySelector("#print").innerHTML = "";
    getFromApi()
        .then(fromApi => {
            fromApi.forEach(employee => {
                document.querySelector("#print").innerHTML += printFunction(employee)
            })
        })
}