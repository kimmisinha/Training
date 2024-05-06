function getWorkingDays(startDate, endDate) {
    let currentDate = new Date(startDate);
    console.log(currentDate)
    let workingDays = 0;

    while (currentDate <= endDate) {
        if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
            // console.log(currentDate.getDate())
            workingDays++;
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return workingDays;
}

const startDate = new Date("2024-05-01"); // May 1, 2024 (Wednesday)
const endDate = new Date("2024-05-30");   // May 10, 2024 (Friday)
const result = getWorkingDays(startDate, endDate);
console.log("Number of working days:", result); // Output: 7
