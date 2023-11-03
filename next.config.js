/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
    ignoreBuildErrors: true,
	exportPathMap: function () {
		return {
			"/": { page: "/" },
		};
	}
};

module.exports = nextConfig;
