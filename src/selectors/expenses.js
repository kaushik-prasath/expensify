export default (expenses, {text, sortBy, startDate, endDate}) => {
  
    return expenses.filter((expense) => {
      const lowercaseDescription = expense.description.toLowerCase();
      const textLowerCase = text.toLowerCase();

      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = lowercaseDescription.includes(textLowerCase) ? true : false;

      
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {

      if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
      }

      if(sortBy === 'amount'){
        return a.amount > b.amount ? -1 : 1;
      }
    });

};