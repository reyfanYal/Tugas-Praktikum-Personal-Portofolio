const modal = document.getElementById("join")
const BtnOpen = document.getElementById("btnJoinUs")
const BtnClose = document.querySelector(".close-btn")

BtnOpen.addEventListener("click", function(event){
    event.preventDefault()
    modal.style.display="flex"
})

BtnClose.addEventListener("click", function(){
    modal.style.display = "none"
})

window.addEventListener("click", function(event){
    if(event.target === modal){
        modal.style.display="none"
    }
})

const form = document.getElementById("registrationGenre");
const tabelBody = document.querySelector("#DataTabel tbody");


let users = JSON.parse(localStorage.getItem("users")) || [];

function tampil(){
    tabelBody.innerHTML = "";

    users.forEach((u, index) => {
        let row = `
            <tr>
                <td>${u.nama}</td>
                <td>${u.email}</td>
                <td>${u.usia}</td>
                <td>${u.ttl}</td>
                <td>${u.jk}</td>
                <td>${u.status}</td>
                <td>
                    <!-- 3. Perbaikan tanda kutip ganda pada atribut tombol -->
                    <button onclick="deleteData(${index})" class="delete-btn">Delete</button>
                </td>
            </tr>
         `;
         tabelBody.innerHTML += row;
    });
}

form.addEventListener("submit", function(e){
    e.preventDefault();


    const nama = document.getElementById("Nama").value;
    const email = document.getElementById("email").value;
    const usia = document.getElementById("Usia").value;
    const ttl = document.getElementById("ttl").value;
    

    const jk = document.querySelector("input[name='jk']:checked").value;
    const status = document.getElementById("Status").value;

   
    const userbaru = { nama, email, usia, ttl, jk, status };

  
    users.push(userbaru);
    
    
    localStorage.setItem("users", JSON.stringify(users));

    
    tampil();

    
    form.reset();

   
    modal.style.display = "none";
});


tampil();


function deleteData(index) {
    
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    tampil();
}