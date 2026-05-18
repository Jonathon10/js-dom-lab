/* =========================================================
   F&F CREW SWITCHER — script.js
   ========================================================= */

const CREW = {
  dom: {
    name: "Dominic Toretto",
    bio: "Street racer. Family man. Drives a 1970 Dodge Charger R/T.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Vin_Diesel_by_Gage_Skidmore.jpg/440px-Vin_Diesel_by_Gage_Skidmore.jpg",
    stats: ["Driving: 99", "Loyalty: 100", "Quarter Mile: 9.4s"],
  },
  brian: {
    name: "Brian O'Conner",
    bio: "Ex-FBI. Adrenaline junkie. Drives a Nissan Skyline GT-R R34.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Paul_Walker_Fast_Five_premiere.jpg/440px-Paul_Walker_Fast_Five_premiere.jpg",
    stats: ["Driving: 96", "Charm: 95", "Quarter Mile: 9.7s"],
  },
  letty: {
    name: "Letty Ortiz",
    bio: "Mechanic. Brawler. Heart of the crew. Drives a Plymouth Barracuda.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelle_Rodriguez_2019_by_Glenn_Francis.jpg/440px-Michelle_Rodriguez_2019_by_Glenn_Francis.jpg",
    stats: ["Driving: 94", "Toughness: 99", "Quarter Mile: 9.9s"],
  },
  hobbs: {
    name: "Luke Hobbs",
    bio: "DSS Agent. The size of a small mountain. Drives a Gurkha LAPV.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Dwayne_Johnson_2%2C_2013.jpg/440px-Dwayne_Johnson_2%2C_2013.jpg",
    stats: ["Strength: 100", "Driving: 88", "Intimidation: 99"],
  },
};

/* PART 1 */

const pageTitle = document.getElementById("page-title");
console.log(pageTitle);

const statList = document.getElementsByClassName("stat");
console.log(statList);
console.log(Array.isArray(statList));

const allButtons = document.getElementsByTagName("button");
console.log(allButtons.length);

const firstSwitchBtn = document.querySelector(".switch-btn");
const allSwitchBtns = document.querySelectorAll(".switch-btn");

console.log(firstSwitchBtn);
console.log(allSwitchBtns);

/* PART 2 */

const statArray = [...statList];

statArray.forEach((stat) => {
  console.log(stat.innerText);
});

/* PART 3 */

function showMember(key) {
  const member = CREW[key];

  document.getElementById("member-name").innerText = member.name;
  document.querySelector(".bio").innerText = member.bio;
  document.getElementById("member-photo").src = member.photo;

  const stats = document.getElementById("stats");
  stats.innerHTML = "";

  member.stats.forEach((statText) => {
    const li = document.createElement("li");
    li.className = "stat";
    li.innerText = statText;
    stats.appendChild(li);
  });
}

/* PART 4 */

allSwitchBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.member;
    showMember(key);
  });
});

const removeBtn = document.getElementById("remove-member-btn");

removeBtn.addEventListener("click", () => {
  const crewCard = document.getElementById("crew-card");
  crewCard.parentNode.removeChild(crewCard);
});

/* PART 5 */

const form = document.getElementById("add-member-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("new-name").value;
  const ride = document.getElementById("new-ride").value;

  if (name === "" || ride === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerText = `${name} drives a ${ride} `;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "Remove";

  deleteBtn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });

  li.appendChild(deleteBtn);

  document.getElementById("recruits").appendChild(li);

  document.getElementById("new-name").value = "";
  document.getElementById("new-ride").value = "";
});

/* PART 6 */

document.getElementById("red-btn").addEventListener("click", () => {
  document.getElementById("crew-card").style.backgroundColor = "#5a1a1a";
});

document.getElementById("blue-btn").addEventListener("click", () => {
  document.getElementById("crew-card").style.backgroundColor = "#1a2a5a";
});

document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("crew-card").style.backgroundColor = "#2a2a2a";
});