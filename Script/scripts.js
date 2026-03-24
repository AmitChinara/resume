const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const linkedinElement = document.getElementById("linkedin-link");
const leetcodeElement = document.getElementById("leetcode-link");
const aboutElement = document.getElementById("about");
const skillsElement = document.getElementById("skills");
const workHistoryElement = document.getElementById("work-history");
const projectsElement = document.getElementById("projects");
const educationElement = document.getElementById("education");


nameElement.textContent = data.contact_name;

emailElement.href = `mailto:${data.contact_details.email}`;
emailElement.textContent = data.contact_details.email;

phoneElement.href = `tel:${data.contact_details.number}`;
phoneElement.textContent = data.contact_details.number;

linkedinElement.href = data.contact_details.linkedin;
linkedinElement.textContent =
    data.contact_details.linkedin.replace("https://www.linkedin.com/in/", "https://www.linkedin.com/in/");

leetcodeElement.href = data.contact_details.leetcode;
leetcodeElement.textContent =
    data.contact_details.leetcode.replace("https://leetcode.com/u/", "https://leetcode.com/u/");

aboutElement.textContent = data.about;

skillsElement.innerHTML =
    `<ul>
${data.skills.map(skill => `<li>${skill}</li>`).join("")}
</ul>`;

let workHTML = "";
for (const work of data.work_experience) {
    workHTML += `
    <div class="work">
        <header>
            ${work.company_name} - ${work.designation}
        </header>
        <div>${work.duration} | ${work.location}</div>
    `;
    for (const role of work.role) {
        workHTML += `<h4>${role.name}</h4><ul>`;
        for (const point of role.points) {
            workHTML += `<li>${point}</li>`;
        }
        workHTML += `</ul>`;
    }
    workHTML += `</div>`;
}

workHistoryElement.innerHTML = workHTML;
let eduHTML = "";
for (const course of data.education_experience) {
    eduHTML += `
    <tr>
        <td>${course.name}</td>
        <td>${course.institution}</td>
        <td>${course.duration}</td>
        <td>${course.score}</td>
    </tr>
    `;
}

educationElement.innerHTML = eduHTML;