let transformed_data;

const hyperlinkElement = document.getElementsByTagName("a");
const resumelinkElement = hyperlinkElement[0];
const emaillinkElement = hyperlinkElement[1];
const nameElement = document.getElementById(`name`);
const emailElement = document.getElementById(`email`);
const phoneElement = document.getElementById(`phone`);
const linkedinElement = document.getElementById(`linkedin-link`);
const leetcodeElement = document.getElementById(`leetcode-link`);

const aboutElement = document.getElementById(`about`);
const skillsElement = document.getElementById(`skills`);

const workHistoryElement = document.getElementById('work-history');
const educationElement = document.getElementById('education');


resumelinkElement.setAttribute("href", data.contact_details.resume);
nameElement.innerHTML = data.contact_name;
emaillinkElement.setAttribute("href", `mailto:${data.contact_details.email}`);
emailElement.innerHTML = data.contact_details.email;
phoneElement.setAttribute("href", `tel:${data.contact_details.number}`);
phoneElement.innerHTML = data.contact_details.number;
linkedinElement.setAttribute("href", data.contact_details.linkedin);
linkedinElement.innerHTML = data.contact_details.linkedin;
leetcodeElement.setAttribute("href", data.contact_details.leetcode);
leetcodeElement.innerHTML = data.contact_details.leetcode;

transformed_data = `<ul>`
for (const skill of data.skills) {
    let temp = `<li>${skill}</li>`
    transformed_data += temp;
}
transformed_data += `</ul>`;

aboutElement.innerHTML = data.about;
skillsElement.innerHTML = transformed_data;

transformed_data = `<div class="work">`;
for (const work of data.work_experience) {
    let comp_info = `<div class="work">
                    <header>
                        <div class="company">${work.company_name}</div>
                        <div class="designation"><b>${work.designation}</b></div>
                        <div class="duration">${work.duration}</div>
                        <div class="location">${work.location}</div>
                    </header>`;
    for (const roleElement of work.role) {
        let role_info = `<div class="project">
                                    <h3>${roleElement.name}</h3>
                                        <ul>`;
        for (const roleElementpoint of roleElement.points) {
            role_info += `<h4>${roleElementpoint.name}</h4>`;
            for (const point of roleElementpoint.points) {
                role_info += `<li>${point}</li>`;
            }
        }
        role_info += `</ul>
                    </div>`;
        comp_info += role_info;
    }
    transformed_data += comp_info;
}
transformed_data += `</div>`;

console.log(transformed_data);

workHistoryElement.innerHTML = transformed_data;


transformed_data = '';
for (const course of data.education_experience) {
    let data = `<tr></tr>`
    data += `<td>${course.name}</td>`
    data += `<td>${course.institution}, ${course.location}</td>`
    data += `<td>${course.duration}</td>`
    data += `<td>${course.score}</td>`
    transformed_data += data;
}
educationElement.innerHTML = transformed_data;
transformed_data = undefined;