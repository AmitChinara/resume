const calculateYearsOfExperience = (startDate) => {
    const start = new Date(startDate + "-01"); // Convert to full date (first of the month)
    const now = new Date(); // Current date
    const diffInMs = now - start; // Difference in milliseconds
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Convert to days
    const daysInYear = 365.25; // Average days in a year accounting for leap years
    const diffInYears = diffInDays / daysInYear; // Convert to years with decimal

    return diffInYears.toFixed(1); // Round to 1 decimal place
}