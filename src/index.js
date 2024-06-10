export const last = (array) => {
	let length = array == null ? 0 : array.length;
	return length ? array[length - 1] : undefined;
};

