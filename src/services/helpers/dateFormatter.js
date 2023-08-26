
export const formatDate = (stringDate) => {
    const date = new Date(stringDate)
    const options = { year: 'numeric', month: 'short', day: 'numeric'};
    const formatted = date.toLocaleString('en-US', options);
    return formatted
}