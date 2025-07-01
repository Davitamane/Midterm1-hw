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
];
const container = document.querySelector(".user-list");
const btn = document.querySelector(".button");

function drawUI() {
  users.forEach((user) => {
    const HTML = `
        <div class="card">
          <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="${user.avatar}" alt="John Doe" />
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
let uiOn = true;
btn.addEventListener("click", () => {
  if (uiOn) {
    drawUI();
    btn.innerHTML = "Hide users";
    uiOn = !uiOn;
  } else {
    container.innerHTML = "";
    btn.innerHTML = "Show users";
    uiOn = !uiOn;
  }
});
