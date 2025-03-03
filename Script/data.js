const start_date_data = "2021-12";
const yearsOfExperience = calculateYearsOfExperience(start_date_data);

const data = {
    contact_name: "AMIT CHINARA",
    contact_details: {
        email: "amitchinara@gmail.com",
        resume: "https://amitchinara.github.io/resume/",
        linkedin: "https://www.linkedin.com/in/amit-chinara-0403b5312/",
        leetcode: "https://leetcode.com/u/amitchinara/",
        number: "+91 8093386767"
    },
    about: `Highly skilled and self-motivated Software Engineer with <strong>${yearsOfExperience}</strong> years of experience in designing, developing, and optimizing scalable applications. Passionate about solving complex problems with clean, efficient, and maintainable code. Adept at working in agile environments, collaborating with cross-functional teams, and delivering high-quality software at great velocity.`,
    skills: ["Java", "Spring Boot", "Oracle DB", "MongoDB", "HTML", "CSS", "JavaScript", "TypeScript", "React JS", "Maven", "JUnit", "Node JS", "Jest", "Python", "Linux Script", "Git", "Docker"],
    work_experience: [
        {
            company_name: "Accenture in India",
            designation: "Application Development Analyst",
            duration: "2022-Sept to Present",
            location: "Bengaluru, Karnataka, India",
            role: [
                {
                    name: "Software Engineer - Fullstack",
                    points: [
                        { name: "REST API Middleware Development", points: ["Designed and implemented REST API middleware using Java and Spring Boot.", "Optimized API performance with SQL tuning.", "Followed best coding practices with SonarQube and JUnit.", "Delivered high-quality, bug-free code."] },
                        { name: "Service Observability & Debugging", points: ["Built a custom log aggregation tool using Bash scripting.", "Enhanced service observability for debugging latency issues."] },
                        { name: "Frontend Development", points: ["Developed dynamic web components using React.js.", "Created a CTA form for customer engagement."] },
                        { name: "Migration from MuleSoft to Node.js", points: ["Led API migration to Node.js with TypeScript.", "Implemented Jest for comprehensive testing."] },
                        { name: "Performance Optimization", points: ["Optimized API execution times through SQL query improvements."] },
                        { name: "Team Collaboration & Mentorship", points: ["Actively contributed to architectural decisions.", "Mentored team members on debugging techniques."] },
                        { name: "Key Achievements", points: ["Successfully delivered high-impact backend solutions.", "Demonstrated expertise in API design and performance monitoring."] }
                    ]
                }
            ]
        },
        {
            company_name: "Highradius",
            designation: "Intern",
            duration: "2021-Dec to 2022-Aug",
            location: "Remote",
            role: [
                {
                    name: "Software Engineer - Frontend",
                    points: [
                        { name: "Frontend Development", points: ["Developed interactive dashboards for business metrics.", "Created gauges, histograms, and time-series charts."] }
                    ]
                }
            ]
        }
    ],
    education_experience: [
        { duration: "2018-2022", name: "B. TECH (COMPUTER SCIENCE ENGINEERING)", institution: "Institute Of Technical Education and Research", location: "BBSR, ODISHA", score: "8.36 CGPA" }
    ]
};

