function getWorkingDays(startDate, endDate) {
    let workingDays = 0;

    while (startDate <= endDate) {
        if (startDate.getDay() !== 6 && startDate.getDay() !== 0) {
            workingDays++;
        }

        // Move to the next day
        startDate.setDate(startDate.getDate() + 1);
    }

    return workingDays;
}

const startDate = new Date("2024-05-01"); // May 1, 2024 (Wednesday)
const endDate = new Date("2024-05-30");   // May 30, 2024 (Friday)
const result = getWorkingDays(startDate, endDate);
console.log("Number of working days:", result); // Output: 21
