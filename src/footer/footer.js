export default function footer() {
	const element = document.createElement("footer");
	const wrapper = document.createElement("div");
	const para = document.createElement("p");
	para.innerHTML = "made with love by Paul Kuyer"; // with love?
	const span = document.createElement("span");
	span.classList.add("socialBtns");
	const github = document.createElement("a");
	github.innerHTML = "GH"; // find icon
	github.setAttribute("href", "https://github.com/pckuyer");
	const linkedin = document.createElement("a");
	linkedin.innerHTML = "LI"; // find icon
	linkedin.setAttribute(
		"href",
		"https://www.linkedin.com/in/paul-kuyer-8405a411b/"
	);

	span.appendChild(github);
	span.appendChild(linkedin);
	para.appendChild(span);
	wrapper.appendChild(para);
	element.appendChild(wrapper);

	return element;
}
