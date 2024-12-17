// User data (replace with API or database calls)
const users = [
    {
        name: "John Doe",
        age: 28,
        bio: "Software engineer",
        img: "profile-pic1.jpg"
    },
    {
        name: "Jane Smith",
        age: 25,
        bio: "Graphic designer",
        img: "profile-pic2.jpg"
    },
    // ...
];

// Card template
const cardTemplate = document.getElementById("card-template");

// Render cards
users.forEach((user, index) => {
    const card = cardTemplate.cloneNode(true);
    card.querySelector("img").src = user.img;
    card.querySelector("h2").textContent = user.name;
    card.querySelector("p").textContent = user.bio;
    document.querySelector(".card-container").appendChild(card);
});

// Add event listeners for like and dislike buttons
document.querySelectorAll(".like-btn, .dislike-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const userId = card.dataset.userId;
        // Update user preferences and database accordingly
        console.log(`User ${userId} liked/disliked`);
    });
});