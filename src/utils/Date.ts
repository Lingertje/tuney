export const getYear = (date: string): number => {
	const dateObj = new Date(date);
	return dateObj.getFullYear();
};
