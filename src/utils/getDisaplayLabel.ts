
/**
 * this function is used to format the options label
 * @param option {User}
 * @returns {string}
 */
const getDisplayLabel = (option: User) => {
    const parts = option.name.split(' ');
    if (parts.includes('Mrs.')) {
        // lastName, firstName (title)
        return `${''.concat(parts.splice(2).join(' '))} ${parts[1]} (${parts[0]})`
    }
    // lastName, firstName
    return `${parts[parts.length - 1]}, ${parts[0]}`;
}

export default getDisplayLabel;