const start_date_data = "2021-08";

let yearsOfExperience = calculateYearsOfExperience(start_date_data);

const contact_name_data = "AMIT CHINARA";

const contact_details_data = {
  email: "amitchinara@gmail.com",
  number: "+91 8093386767",
  linkedin: "https://www.linkedin.com/in/amitchinara/",
  leetcode: "https://leetcode.com/u/amitchinara/"
};

const about_data = `Software developer with ${yearsOfExperience} years of experience building scalable backend systems and APIs using Java and Spring Boot. Experienced in microservices architecture, REST API development, performance optimization, and cloud-ready deployments. Skilled at collaborating with cross-functional teams to build high-performance systems capable of handling large-scale traffic.`;

const skills_data = [
  `Java8`, `Spring Boot`, `Oracle DB`, `MongoDB`, `HTML`, `CSS`, `JavaScript`, 
    `TypeScript`, `React JS`, `Maven`, `JUnit`, `Node JS`, `Jest`, `Python`, 
    `Linux Script`, `Git`, `Docker`, `Django`
];

const work_experience_data = [
  {
    company_name: "Accenture in India",
    designation: "Application Development Analyst",
    duration: "Sept 2022 - Present",
    location: "Bengaluru",
    role: [
        {
            name: `FullStack Developer`,
            points: [
                `Designed and implemented REST API middleware for a leading telecom company using <em><b>Java 8</b></em> and <em><b>Spring Boot</b></em>, delivering scalable and efficient solutions.`,
                `Optimized API performance by crafting and fine-tuning complex <em><b>SQL</b></em> queries, significantly reducing response times.`,
                `Followed best coding practices and ensured code quality through static analysis tools like <em><b>SonarQube</b></em> and comprehensive testing with <em><b>JUnit</b></em>.`,
                `Delivered high-quality, bug-free code, meeting strict deadlines and adhering to industry standards.`,
                `Built a custom log aggregation and processing tool using <em><b>Bash</b></em> scripting, enhancing observability of service performance.`,
                `Enabled the team to easily debug latency issues, reducing troubleshooting time and pinpointing root causes more effectively.`,
                `Designed and developed dynamic web components using <em><b>React.js (v18.0.1)</b></em>, enhancing user interface interactivity and responsiveness.`,
                `Built a visually appealing UI to showcase the product catalog for a telecom-based client, optimizing user experience.`,
                `Created a Call-to-Action (<em><b>CTA</b></em>) form for customer inquiries, improving engagement and lead generation.`,
                `Led the migration of APIs from <em><b>MuleSoft</b></em> to <em><b>Node.js</b></em>, leveraging <em><b>TypeScript</b></em> to deliver robust and maintainable code.`,
                `Ensured end-to-end delivery, including the setup of <em><b>oracle database</b></em> interactions, error handling, and security.`,
                `Utilized <em><b>Jest</b></em> for comprehensive testing to maintain high code reliability.`,
                `Spearheaded initiatives to optimize API execution times, achieving significant reductions through <em><b>SQL</b></em> query optimizations and efficient backend design.`,
                `Actively contributed to team discussions on architectural decisions and performance improvements.`,
                `Shared insights on debugging techniques and best practices, fostering a collaborative and high-performing team environment.`,
                `Successfully delivered high-impact backend solutions, solving challenging problems with innovative and intuitive approaches.`,
                `Demonstrated ownership and expertise in handling diverse tasks ranging from API design to performance monitoring and optimization.`
            ]
        },
        {
            name: `Gen AI Developer`,
            points: [
                `Developed an AI-powered chatbot integrated with <em><b>Cohere API</b></em> via secure endpoints to provide role recommendations based on user input.`,
                `Built an AWS Lambda-based architecture to process and respond to user queries in a scalable, event-driven manner.`,
                `Implemented a role retrieval service using a knowledge base to fetch and suggest relevant job roles based on user descriptions.`,                
                `Designed a data pipeline using <em><b>AWS SQS</b></em> to handle asynchronous processing of incoming data.`,                
                `Converted incoming data into vector embeddings and stored them in <em><b>OpenSearch</b></em> for efficient semantic search and retrieval.`,                
                `Developed a Lambda function to detect new roles, fetch relevant data, and push updates to SQS for downstream processing.`,                
                `Enabled semantic matching of user input with stored embeddings to improve accuracy of role recommendations.`,
                `Ensured secure API communication and optimized system performance through efficient event-driven workflows.`
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
  education_experience: education_experience_data
};