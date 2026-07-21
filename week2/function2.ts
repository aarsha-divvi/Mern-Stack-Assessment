function calculateSalary(basicSalary: number, bonus: number): number {
  return basicSalary + bonus;
}

let finalSalary: number = calculateSalary(150000, 50000);
console.log("Final Salary:", finalSalary);
