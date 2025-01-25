/**
 * 是否移动端
 */
const isMobile = () => {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
};

export default isMobile;
