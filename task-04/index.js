/**
 * პირობა იხილეთ HTML ფაილში
 */

const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 6,
    name: "Jessica Garcia",
    email: "jessica@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 7,
    name: "Daniel Rodriguez",
    email: "daniel@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 8,
    name: "Ashley Martinez",
    email: "ashley@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 9,
    name: "Kevin Anderson",
    email: "kevin@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 10,
    name: "Brittany Thomas",
    email: "brittany@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
];
const container = document.getElementById("userList");
const search = document.querySelector(".search-input");

function renderUsers(users) {
  container.innerHTML = "";
  users.forEach((user) => {
    const HTML = `
        <div class="card">
          <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="${user.avatar}" alt="${user.id}" />
              </div>
              <div class="user-details">
                <h3>${user.name}</h3>
                <p class="user-email">${user.email}</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="user-id">User ID: ${user.id}</p>
          </div>
        </div> 
    `;
    container.insertAdjacentHTML("beforeend", HTML);
  });
}
renderUsers(users);
search.addEventListener("input", () => {
  const text = search.value.toLowerCase();
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(text);
  });
  renderUsers(filteredUsers);
});
