const registrationForm = document.getElementById("registration-form");
const userDetailsTable = document.getElementById("user-details");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const image = document.getElementById("image").value;
    const gender = document.getElementById("gender").value;
    const skills = document.getElementById("skills").value;

    // Create a new row in the table to display user details
    const newRow = userDetailsTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = gender; // Display gender
    cell5.innerHTML = skills; // Display skills

    // Create an <img> element for the image cell
    const img = document.createElement("img");
    img.src = image; // Set the image source
    cell6.appendChild(img); // Append the <img> element to the cell

    // Store user details in LocalStorage
    const user = {
        name: name,
        email: email,
        phone: phone,
        image: image,
        gender: gender,
        skills: skills,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form
    registrationForm.reset();
    location.reload();
});

// Retrieve and display stored user details
const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
for (const user of storedUsers) {
    const newRow = userDetailsTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    cell1.innerHTML = user.name;
    cell2.innerHTML = user.email;
    cell3.innerHTML = user.phone;
    cell4.innerHTML = user.gender;
    cell5.innerHTML = user.skills;

    // Create an <img> element for the image cell
    const img = document.createElement("img");
    img.src = user.image; // Set the image source
    img.className = "user-image"; // Add the user-image class
    cell6.appendChild(img); // Append the <img> element to the cell

}
