const printFunction = (employees) => {
    return `
    <div class="employees" id="employees-${employees.id}">
    <li>Name: ${employees.firstName} ${employees.lastName}
    <li>Email: ${employees.email}</li>
    <li>Phone: ${employees.phone}</li>
    <li>DOB: ${employees.dateOfBirth}</li>
    <li>Department: ${employees.department}</li>
    <button class="delete-btn" id="delete-${employees.id}">Delete</button>
    <button class="edit-btn" id="edit-${employees.id}">EDIT</button>
    </br>
    </br>
    </div>
    `
}