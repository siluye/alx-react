const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

export { getFullYear, getFooterCopy}