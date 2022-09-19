let listOfSkills = [
	"Spring Boot",
	"Hibernate",
	"JavaScript",
	"MySQL",
	"HTML/CSS",
	"Git",
	"Python",
	"Data Structures",
	"Algorithms",
	"Java",
];

let skill_list = 0;

const textId = setInterval(() => {
	document.getElementById("text_change").innerText = listOfSkills[skill_list];
	skill_list++;
	if (skill_list == listOfSkills.length) {
		skill_list = 0;
	}
}, 1500);

const myCarouselElement = document.querySelector("#carouselExampleFade");
const carousel = new bootstrap.Carousel(myCarouselElement, {
	interval: 2000,
});

GitHubCalendar(".calendar", "Shishir-1995", {
	responsive: true,
	tooltips: true,
	global_stats: false,
});
