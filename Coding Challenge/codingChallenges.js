const jobData = [
    {jobRole: "Cybersecurity Analyst", experienceReq: [1, 2, 3], openRoles: 32000},
    {jobRole: "Threat Intelligence Analyst", experienceReq: [2, 3, 4], openRoles: 15000},
    {jobRole: "Cloud Security Engineer", experienceReq: [3, 4, 5], openRoles: 25000},
    {jobRole: "Incident Response Manager", experienceReq: [4, 5, 6], openRoles: 18000},
    {jobRole: "Governance & Compliance Specialist", experienceReq: [5], openRoles: 10000},
    {jobRole: "Security Architect", experienceReq: [7], openRoles: 8000}
];


// jobData contains a list of cybersecurity job roles, showing how many open positions each role has 
// and what experience levels are needed.
// - Each item in the list is an object with three parts:
//   1. jobRole: The name of the job (e.g., "Cybersecurity Analyst").
//   2. experienceReq: The experience levels (years) needed for the job (e.g., [1, 2, 3] means 1-3 years).
//   3. openRoles: The number of open positions available for that role.
// This setup helps us see the open positions by job and the range of experience levels required, 
// so we can analyze where the biggest gaps might be for each experience level.

// Function to print job roles and openings, and calculate total openings for each experience level
function printJobOpeningsAndCalculateLevels(data) {
    const levelOpenings = {}; // Object to store total openings for each experience level

    // Loop through each job in the data
    data.forEach(job => {
        // Print the job role and the number of openings
        console.log(`${job.jobRole}: ${job.openRoles} openings`);

        // Loop through each experience level required by this job
        job.experienceReq.forEach(level => {
            // If the level is not in the levelOpenings object, initialize it to 0
            if (!levelOpenings[level]) {
                levelOpenings[level] = 0;
            }
            // Add the job's openings to this experience level
            levelOpenings[level] += job.openRoles;
        });
    });

    // Print total openings for each experience level
    console.log("\nTotal Openings by Experience Level:");
    for (const [level, openings] of Object.entries(levelOpenings)) {
        console.log(`Level ${level}: ${openings} openings`);
    }
}

// Call the function to display results
printJobOpeningsAndCalculateLevels(jobData);
