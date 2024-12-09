export interface contact_obj {
    linkedin: string,
    leetcode: string,
    number: string,
}

interface role_obj {
    name: string
    points: subject_obj[]
}

interface subject_obj {
    name: string,
    points: string[],
}

export interface company_obj {
    company_name: string,
    designation: string,
    duration: string,
    location: string,
    role: role_obj[],
}

export interface education_obj {
    duration: string,
    name: string,
    institution: string,
    location: string,
    score: string,
}