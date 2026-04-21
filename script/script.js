const form = document.getElementById("registrationForm");
const tableBody = document.querySelector("#dataTable tbody");


let users = JSON.parse(localStorage.getItem("users")) || [];


function displayData() {
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        let row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.date}</td>
                <td>${user.gender}</td>
                <td>${user.role}</td>
                <td>
                    <button onclick="deleteData(${index})" class="delete-btn">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


function deleteData(index) {
    if (confirm("Are you sure you want to delete this data?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        displayData();
    }
}


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const role = document.getElementById("role").value;

    const newUser = { name, email, age, date, gender, role };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    displayData();
    form.reset();
});

displayData();