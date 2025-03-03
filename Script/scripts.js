document.addEventListener("DOMContentLoaded", () => {
    let transformedData;

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
    const educationElement = document.getElementById("education-list");

    // Ensure data is loaded
    if (typeof data === "undefined") {
        console.error("Data object not found!");
        return;
    }

    // Populate contact details
    if (data.contact_name) {
        nameElement.innerHTML = data.contact_name;
        nameElement.setAttribute("href", "https://amitchinara.github.io/resume/");
        nameElement.setAttribute("target", "_blank");
    }

    if (data.contact_details) {
        emailElement.setAttribute("href", `mailto:${data.contact_details.email}`);
        emailElement.innerHTML = data.contact_details.email;

        phoneElement.setAttribute("href", `tel:${data.contact_details.number}`);
        phoneElement.innerHTML = data.contact_details.number;

        linkedinElement.setAttribute("href", data.contact_details.linkedin);
        leetcodeElement.setAttribute("href", data.contact_details.leetcode);
    }

    // Populate About section
    aboutElement.innerHTML = data.about || "No information available.";

    // Populate Skills section
    transformedData = "";
    if (data.skills && Array.isArray(data.skills)) {
        data.skills.forEach(skill => {
            transformedData += `<li>${skill}</li>`;
        });
    } else {
        transformedData = "<li>No skills listed.</li>";
    }
    skillsElement.innerHTML = transformedData;

    // Populate Work Experience section
    transformedData = "";
    if (data.work_experience && Array.isArray(data.work_experience)) {
        data.work_experience.forEach(work => {
            let compInfo = `
                <div class="work">
                    <header>
                        <h3 class="company">${work.company_name}</h3>
                        <strong class="designation">${work.designation}</strong>
                        <div class="duration">${work.duration}</div>
                        <div class="location">${work.location}</div>
                    </header>`;

            if (work.role && Array.isArray(work.role)) {
                work.role.forEach(roleElement => {
                    let roleInfo = `<div class="project">
                        <h4>${roleElement.name}</h4>
                        <ul>`;
                    roleElement.points.forEach(roleElementPoint => {
                        roleElementPoint.points.forEach(point => {
                            roleInfo += `<li>${point}</li>`;
                        });
                    });
                    roleInfo += `</ul></div>`;
                    compInfo += roleInfo;
                });
            }
            transformedData += compInfo + `</div>`;
        });
    } else {
        transformedData = "<p>No work experience available.</p>";
    }
    workHistoryElement.innerHTML = transformedData;

    // Populate Education Table
    transformedData = "";
    if (data.education_experience && Array.isArray(data.education_experience)) {
        data.education_experience.forEach(course => {
            transformedData += `
                <tr>
                    <td>${course.name}</td>
                    <td>${course.institution}, ${course.location}</td>
                    <td>${course.duration}</td>
                    <td>${course.score}</td>
                </tr>`;
        });
    } else {
        transformedData = "<tr><td colspan='4'>No education history available.</td></tr>";
    }
    educationElement.innerHTML = transformedData;
});
