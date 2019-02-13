const getFromApi = () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
}

const createTask = (employees) => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employees)
    })
}
const fetchDelete = (employeesId) => {
    return fetch(`http://localhost:8088/employees/${employeesId}`, {
        method: "DELETE"
    })
}
const singleApi = (employeesId) => {
    return fetch(`http://localhost:8088/employees/${employeesId}`).then(employees => employees.json())
}

const editApi = (idParam, taskObject) => {
    return fetch(`http://localhost:8088/employees/${idParam}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskObject)
    })
}