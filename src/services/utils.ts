export const ucfirst = (str: string): string => {
	return str?.charAt(0).toUpperCase() + str?.slice(1);
}

export const _int = (str: string): number => {
	return parseInt(str);
}