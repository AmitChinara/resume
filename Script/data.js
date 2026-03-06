const start_date_data = "2021-12";

let yearsOfExperience = calculateYearsOfExperience(start_date_data);



const contact_name_data = "AMIT CHINARA";


const contact_details_data = {

    email: "amitchinara@gmail.com",

    number: "+91 8093386767",

    linkedin: "https://www.linkedin.com/in/amitchinara/",

    leetcode: "https://leetcode.com/u/amitchinara/"

};



const about_data =
`Software developer with ${yearsOfExperience} years of experience building scalable backend systems and APIs using Java and Spring Boot. Experienced in microservices architecture, REST API development, performance optimization, and cloud-ready deployments. Skilled at collaborating with cross-functional teams to build high-performance systems capable of handling large-scale traffic.`;



const skills_data = [

"Java 8",
"Spring Boot",
"Spring MVC",
"Microservices",
"REST API",
"Oracle DB",
"MongoDB",
"Node.js",
"TypeScript",
"React.js",
"Docker",
"JUnit",
"Git",
"Python"

];



const work_experience_data = [

{
    company_name: "Accenture in India",

    designation: "Application Development Analyst",

    duration: "Sept 2022 - Present",

    location: "Bengaluru",

    role: [
        {
            name: "Full Stack Developer",

            points: [

                "Designed REST APIs using Java 8 and Spring Boot.",

                "Optimized complex SQL queries improving API response time.",

                "Built UI components using React.js.",

                "Migrated APIs from MuleSoft to Node.js using TypeScript.",

                "Implemented backend services handling telecom product catalog and customer requests."

            ]
        }
    ]
},

{
    company_name: "Highradius",

    designation: "Intern",

    duration: "Dec 2021 - Aug 2022",

    location: "Remote",

    role: [
        {
            name: "Frontend Developer",

            points: [

                "Developed data dashboards using React.",

                "Created charts including histograms and time-series graphs."

            ]
        }
    ]
}

];



const projects_data = [

{
    name: "Microservices API Platform",

    tech: "Java, Spring Boot, Microservices, REST API, Docker",

    link: "",

    points: [

        "Developed scalable REST APIs using Java and Spring Boot.",

        "Implemented Microservices architecture for modular backend services.",

        "Designed services capable of handling high concurrent traffic.",

        "Optimized database queries and backend logic improving system performance.",

        "Containerized services using Docker for consistent deployment."

    ]
},

{
    name: "Dynamic Resume Web Application",

    tech: "HTML, CSS, JavaScript",

    link: "https://amitchinara.github.io/resume/",

    points: [

        "Developed a dynamic resume website using JavaScript.",

        "Implemented modular architecture separating data, UI, and rendering.",

        "Automatically calculates total work experience.",

        "Generates resume sections dynamically from JSON-based data."

    ]
},

{
    name: "Log Analysis & Performance Monitoring Tool",

    tech: "Linux, Bash, Performance Debugging",

    link: "",

    points: [

        "Built Bash scripts to parse service logs and identify latency.",

        "Enabled faster debugging of backend service performance.",

        "Helped identify bottlenecks in distributed systems."

    ]
}

];



const education_experience_data = [

{
    duration: "2018 - 2022",

    name: "B.Tech Computer Science",

    institution: "Institute Of Technical Education and Research",

    location: "Bhubaneswar",

    score: "8.36 CGPA"
}

];



const data = {

    contact_name: contact_name_data,

    contact_details: contact_details_data,

    about: about_data,

    skills: skills_data,

    work_experience: work_experience_data,

    projects: projects_data,

    education_experience: education_experience_data

};
