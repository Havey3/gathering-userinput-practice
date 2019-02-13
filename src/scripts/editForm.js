const editForm = (editParam) => {
    console.log(editParam)
return `
<div class="jonSnow">
<h1>Edit Employee</h1>
<fieldset id="edit-form">
<div class="attempt">
  <label class="center" for="firstName">First Name</label>
    <input value="${editParam.firstName}" id="f-edit-${editParam.id}" type="text"></br>
    <label class="center" for="lastName">Last Name</label>
    <input value="${editParam.lastName}" id="l-edit-${editParam.id}" type="text"></br>
    <label class="center" for="emailAddress">Email</label>
    <input value="${editParam.email}" id="email-edit-${editParam.id}" type="text"></br>
    <label class="center" for="phoneNumber">Phone Number</label>
    <input value="${editParam.phone}" id="p-edit-${editParam.id}" type="text"></br>
    <label class="center" for="birthDay">Date of Birth</label>
    <input value="${editParam.dateOfBirth}" id="dob-edit-${editParam.id}" type="date"></br>
    <label class="center" for="department">Department</label>
    <select value="${editParam.department}" name="department" id="d-edit-${editParam.id}">
      <option value="Manager">Manager</option>
      <option value="Sales">Sales</option>
      <option value="Reception">Reception</option>
      <option value="Marketing">Marketing</option>
      <option value="IT">IT</option>
      <option value="Design">Design</option>
    </select></br></br>
    <button class="save-btn" id="save-${editParam.id}">SAVE</button>
</fieldset>
</div>
</div>
`
}

