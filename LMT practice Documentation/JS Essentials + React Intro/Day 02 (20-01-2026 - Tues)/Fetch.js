async function loadUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const list = document.getElementById("userList");

  users.forEach(user => {
    const li = document.createElement("li");
    li.innerText = user.name;
    list.appendChild(li);
  });
}

loadUsers();
