let listOfSkills = [
	"Java",
	"Spring Boot",
	"Hibernate",
	"JavaScript",
	"MySQL",
	"HTML/CSS",
	"Git",
	"Python",
	"Data Structures",
	"Algorithms",
];

let skill_list = 0;

const textId = setInterval(() => {
	document.getElementById("text_change").innerText = listOfSkills[skill_list];
	skill_list++;
	if (skill_list == listOfSkills.length) {
		skill_list = 0;
	}
}, 2000);
