const page = document.getElementById("page");
const title = document.getElementById("title");

function toggle() {
    page.classList.toggle("active");

    title.innerText = page.classList.contains("active")
        ? "Join Us"
        : "Welcome";
}
