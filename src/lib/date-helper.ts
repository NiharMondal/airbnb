export const getToday = () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0); // reset to midnight
	return today;
};
