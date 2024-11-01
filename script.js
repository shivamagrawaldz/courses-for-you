function filterCourses() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        const courseName = course.getAttribute("data-name").toLowerCase();
        course.style.display = courseName.includes(query) ? "block" : "none";
    });
}

function browseAll() {
    document.getElementById("search-bar").value = "";
    document.querySelectorAll(".course").forEach(course => course.style.display = "block");
}

function openTelegram(courseName) {
    const message = `Hello, I am interested in the ${courseName} course. can you give me more information on this.`;
    window.open(`https://t.me/coursesdotcode?text=${encodeURIComponent(message)}`, '_blank');
}
