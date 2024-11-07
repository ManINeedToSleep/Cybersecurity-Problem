// jobData contains a list of cybersecurity job roles, showing how many open positions each role has 
// and what experience levels are needed.
// - Each item in the list is an object with three parts:
//   1. jobRole: The name of the job (e.g., "Cybersecurity Analyst").
//   2. experienceReq: The experience levels (years) needed for the job (e.g., [1, 2, 3] means 1-3 years).
//   3. openRoles: The number of open positions available for that role.
// This setup helps us see the open positions by job and the range of experience levels required, 
// so we can analyze where the biggest gaps might be for each experience level.

const jobData = [
    { jobRole: "Cybersecurity Analyst", experienceReq: [1, 2, 3], openRoles: 32000 },
    { jobRole: "Threat Intelligence Analyst", experienceReq: [2, 3, 4], openRoles: 15000 },
    { jobRole: "Cloud Security Engineer", experienceReq: [3, 4, 5], openRoles: 25000 },
    { jobRole: "Incident Response Manager", experienceReq: [4, 5, 6], openRoles: 18000 },
    { jobRole: "Governance & Compliance Specialist", experienceReq: [5], openRoles: 10000 },
    { jobRole: "Security Architect", experienceReq: [7], openRoles: 8000 }
];

// Function to calculate total talent gap and highest shortage by experience level
function calculateTalentGapAnalysis(data) {
    const levelGaps = {}; // Object to store total openings (gaps) for each experience level
    let totalGap = 0;

    // Loop through each job in the data to calculate gaps by level
    data.forEach(job => {
        job.experienceReq.forEach(level => {
            if (!levelGaps[level]) {
                levelGaps[level] = 0;
            }
            levelGaps[level] += job.openRoles;
            totalGap += job.openRoles;
        });
    });

    // Find the experience level with the highest shortage
    let highestShortageLevel = null;
    let highestGap = 0;

    for (const [level, gap] of Object.entries(levelGaps)) {
        if (gap > highestGap) {
            highestShortageLevel = level;
            highestGap = gap;
        }
    }

    // Print the output in the desired format
    console.log("Cybersecurity Talent Gap Analysis:");
    console.log(`Total Talent Gap: ${totalGap}`);
    console.log(`Highest Shortage: Level ${highestShortageLevel} with a gap of ${highestGap}`);
}

// Call the function to display results
calculateTalentGapAnalysis(jobData);
