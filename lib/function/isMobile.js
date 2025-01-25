/**
 * 是否移动端
 */
const isMobile = () => {
	if (typeof window === 'undefined') return false; // 处理SSR场景
	const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
	return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
};

export default isMobile;
