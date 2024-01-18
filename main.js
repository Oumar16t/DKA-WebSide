const registrationForm = document.getElementById('subForm');
const userTable = document.getElementById('table');
const button = document.getElementById('sub_btn');

button.addEventListener('click', function(event) {

    var gender = "";

    if (document.getElementById('male').checked == true){
        gender = "Men";
    }
    if (document.getElementById('female').checked == true){ 
        gender = "Women";
    }
    if (document.getElementById('nonBinary').checked == true){ 
        gender = "Other";
    }



    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const birth = document.getElementById('birthDate').value;
    const phone = document.getElementById('phoneNumber').value;

    if (firstName && lastName && email && birth && phone) {
        const newRow = userTable.insertRow(-1); 
    
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        cell1.textContent = firstName;
        cell2.textContent = lastName;
        cell3.textContent = email;
        cell4.textContent = gender;
        cell5.textContent = birth;
        cell6.textContent = phone;

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('birthDate').value = '';
        document.getElementById('phoneNumber').value = '';
    }
    else {
        alert('Please fill out all fields');
    }
});