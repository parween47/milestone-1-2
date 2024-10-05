"use strict";
const toggleSkill = document.getElementById("toggle");
const skills = document.getElementById('skills');
toggleSkill.addEventListener("click", () => {
    if (skills.style.display == 'none') {
        skills.style.display = 'block';
        toggleSkill.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
        toggleSkill.textContent = 'Show Skills';
    }
});
