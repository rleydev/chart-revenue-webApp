

export const formatDateHourly = (stringDate) => {
    const date = new Date(stringDate);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit'};
    const formatted = date.toLocaleString('en-US', options);
    return formatted;
};