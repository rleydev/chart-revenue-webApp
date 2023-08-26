
export const formatDate = (stringDate) => {
    const date = new Date(stringDate)
    const formatted = date.toLocaleDateString()
    return formatted
}