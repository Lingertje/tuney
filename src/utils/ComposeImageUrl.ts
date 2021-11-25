const ComposeImageUrl = (path: string, size = "original"): string => {
	return `${process.env.REACT_APP_IMAGE_BASE_URL}${size}${path}`;
};

export default ComposeImageUrl;
