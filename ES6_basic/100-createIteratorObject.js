export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const employees = Object.values(report.allEmployees).flat();
      let index = 0;
      return {
        next() {
          return index < employees.length
            ? { value: employees[index++], done: false }
            : { done: true };
        },
      };
    },
  };
}
