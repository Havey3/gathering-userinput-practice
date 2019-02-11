document.querySelector("#add-btn").addEventListener("click", () => {
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const email = document.querySelector("#emailAddress").value
    const phone = document.querySelector("#phoneNumber").value
    const dob = document.querySelector("#birthDay").value
    const department = document.querySelector("#department").value
    // const gender = document.querySelector("gender").value

    const employees = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        dateOfBirth: dob,
        department: department,
        // gender: gender
    }


    createTask(employees)
    printAll()
    console.log(employees)
})

document.querySelector("#supervisor").addEventListener("click", () => {
    alert("this button is just for looks it doesn't actually do anything =[")
})

const printFunction = (first, last, email, phone, dob, department) => {
    return `<li>${first}</li><li>${last}</li><li>${email}</li><li>${phone}</li><li>${dob}</li><li>${department}</li></br>`
}

const getFromApi = () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
}

const printAll = () => {
    document.querySelector("#print").innerHTML = "";
    getFromApi()
    .then(fromApi => {
        fromApi.forEach(employee => {
            document.querySelector("#print").innerHTML += printFunction(employee.firstName, employee.lastName, employee.email, employee.phone, employee.dateOfBirth, employee.department, employee.gender)
        })
    })
}

const createTask = employees =>
    fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employees)
    })




// When the POST request is complete, get a list of all the employees from the database and print them to the DOM.