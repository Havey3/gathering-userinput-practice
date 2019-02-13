printAll();

document.querySelector("#add-btn").addEventListener("click", () => {
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const email = document.querySelector("#emailAddress").value
    const phone = document.querySelector("#phoneNumber").value
    const dob = document.querySelector("#birthDay").value
    const department = document.querySelector("#department").value
    const employees = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        dateOfBirth: dob,
        department: department,
    }
    createTask(employees).then(() => {
        printAll()
    })
    console.log(employees)
})

document.querySelector("body").addEventListener("click", () => {
    if (event.target.classList.contains("delete-btn")) {
        const employeesId = event.target.id.split("-")[1];
        fetchDelete(employeesId)
            .then(() => {
                printAll()
            })
    } else if (event.target.classList.contains("edit-btn")) {
        const employeesId = event.target.id.split("-")[1];
        singleApi(employeesId)
            .then((editParam) => {
                document.querySelector(`#employees-${employeesId}`).innerHTML = editForm(editParam)
            })
    } else if (event.target.classList.contains("save-btn")) {
        const employeesId = event.target.id.split("-")[1]

        const editfirst = document.querySelector(`#f-edit-${employeesId}`).value;
        const editLast = document.querySelector(`#l-edit-${employeesId}`).value;
        const editEmail = document.querySelector(`#email-edit-${employeesId}`).value;
        const editPhone = document.querySelector(`#p-edit-${employeesId}`).value;
        const editDate = document.querySelector(`#dob-edit-${employeesId}`).value;
        const editDepartment = document.querySelector(`#d-edit-${employeesId}`).value

        const editList = buildEmployee(editfirst, editLast, editEmail, editPhone, editDate, editDepartment);
        console.log(editList)

        editApi(employeesId, editList)
        .then(printAll)
    }
})










