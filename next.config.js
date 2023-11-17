/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	exportPathMap: function () {
		return {
			"/": { page: "/" },
		};
	}
};

module.exports = nextConfig;
