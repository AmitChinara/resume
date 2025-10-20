let transformed_data;

const hyperlinkElement = document.getElementsByTagName("a");
const resumelinkElement = hyperlinkElement[0];
const emaillinkElement = hyperlinkElement[1];
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const linkedinElement = document.getElementById("linkedin-link");
const leetcodeElement = document.getElementById("leetcode-link");

const aboutElement = document.getElementById("about");
const skillsElement = document.getElementById("skills");
const workHistoryElement = document.getElementById("work-history");
const educationElement = document.getElementById("education");

// ----------------- Contact Info -----------------
resumelinkElement.setAttribute("href", data.contact_details.resume);
nameElement.innerHTML = data.contact_name;
emaillinkElement.setAttribute("href", `mailto:${data.contact_details.email}`);
emailElement.innerHTML = data.contact_details.email;
phoneElement.setAttribute("href", `tel:${data.contact_details.number}`);
phoneElement.innerHTML = data.contact_details.number;
linkedinElement.setAttribute("href", data.contact_details.linkedin);
linkedinElement.innerHTML = data.contact_details.linkedin.replaceAll(`https://www.linkedin.com/in/`, ``);
leetcodeElement.setAttribute("href", data.contact_details.leetcode);
leetcodeElement.innerHTML = data.contact_details.leetcode.replaceAll(`https://leetcode.com/u/`, ``);

// ----------------- About -----------------
aboutElement.innerHTML = data.about;

// ----------------- Skills -----------------
transformed_data = `<ul>`;
for (const skill of data.skills) {
    transformed_data += `<li>${skill}</li>`;
}
transformed_data += `</ul>`;
skillsElement.innerHTML = transformed_data;

// ----------------- Work History -----------------
transformed_data = "";
for (const work of data.work_experience) {
    transformed_data += `
        <div class="work">
            <header>
                <div class="company"><b>${work.company_name}</b></div>
                <div class="designation">${work.designation}</div>
                <div class="duration">${work.duration}</div>
                <div class="location">${work.location}</div>
            </header>
    `;

    for (const role of work.role) {
        transformed_data += `<div class="role">
                                <h3>${role.name}</h3>
                                <ul>`;
        for (const point of role.points) {
            transformed_data += `<li>${point}</li>`;
        }
        transformed_data += `</ul></div>`;
    }

    transformed_data += `</div>`; // close company div
}
workHistoryElement.innerHTML = transformed_data;

// ----------------- Education -----------------
transformed_data = "";
for (const course of data.education_experience) {
    transformed_data += `
        <tr>
            <td>${course.name}</td>
            <td>${course.institution}, ${course.location}</td>
            <td>${course.duration}</td>
            <td>${course.score}</td>
        </tr>
    `;
}
educationElement.innerHTML = transformed_data;
transformed_data = undefined;
