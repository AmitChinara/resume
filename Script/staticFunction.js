const calculateYearsOfExperience = (startDate) => {

    const start = new Date(startDate + "-01");

    const now = new Date();

    const diffMs = now - start;

    const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);

    return years.toFixed(1);

};
