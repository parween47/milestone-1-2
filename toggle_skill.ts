const toggleSkill = document.getElementById("toggle") as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement
toggleSkill.addEventListener("click", () => {
    if (skills.style.display =='none') {
        skills.style.display='block'
        toggleSkill.textContent='Hide Skills'
    } else {
        skills.style.display='none'
        toggleSkill.textContent='Show Skills'
    }
}
)