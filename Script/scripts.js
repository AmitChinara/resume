document.addEventListener("DOMContentLoaded", () => {
    let transformed_data;

    // Contact details elements
    const nameElement = document.getElementById("contact-name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const linkedinElement = document.getElementById("linkedin-link");
    const leetcodeElement = document.getElementById("leetcode-link");

    // Sections
    const aboutElement = document.getElementById("about-text");
    const skillsElement = document.getElementById("skills-list");
    const workHistoryElement = document.getElementById("work-history");
    const educationElement = document.getElementById("education-list"); // Corrected reference

    if (!nameElement || !emailElement || !phoneElement || !linkedinElement || !leetcodeElement) {
        console.error("One or more elements not found in the DOM");
        return;
    }

    // Populate contact details
    nameElement.innerHTML = data.contact_name;
    emailElement.setAttribute("href", `mailto:${data.contact_details.email}`);
    emailElement.innerHTML = data.contact_details.email;
    phoneElement.setAttribute("href", `tel:${data.contact_details.number}`);
    phoneElement.innerHTML = data.contact_details.number;
    linkedinElement.setAttribute("href", data.contact_details.linkedin);
    linkedinElement.innerHTML = "LinkedIn";
    leetcodeElement.setAttribute("href", data.contact_details.leetcode);
    leetcodeElement.innerHTML = "LeetCode";

    // Populate About section
    aboutElement.innerHTML = data.about;

    // Populate Skills section
    transformed_data = "";
    for (const skill of data.skills) {
        transformed_data += `<li>${skill}</li>`;
    }
    skillsElement.innerHTML = transformed_data;

    // Populate Work Experience section
    transformed_data = "";
    for (const work of data.work_experience) {
        let comp_info = `<div class="work">
                            <header>
                                <h3 class="company">${work.company_name}</h3>
                                <strong class="designation">${work.designation}</strong>
                                <div class="duration">${work.duration}</div>
                                <div class="location">${work.location}</div>
                            </header>`;
        for (const roleElement of work.role) {
            let role_info = `<div class="project">
                                <h4>${roleElement.name}</h4>
                                <ul>`;
            for (const roleElementpoint of roleElement.points) {
                // role_info += `<h4>${roleElementpoint.name}</h4>`;
                for (const point of roleElementpoint.points) {
                    role_info += `<li>${point}</li>`;
                }
            }
            role_info += `</ul>
                        </div></div>`;
            comp_info += role_info;
        }
        transformed_data += comp_info;
    }
    workHistoryElement.innerHTML = transformed_data;

    // Populate Education Table (Ensuring Tabular Format)
    transformed_data = "";
    for (const course of data.education_experience) {
        transformed_data += `
            <tr>
                <td>${course.name}</td>
                <td>${course.institution}, ${course.location}</td>
                <td>${course.duration}</td>
                <td>${course.score}</td>
            </tr>`;
    }
    educationElement.innerHTML = transformed_data; // Ensure it targets the correct <tbody>
});
