// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration


/** @type {import("snowpack").SnowpackUserConfig } */
// @ts-ignore
module.exports = {
    mount: {
        public: '/',
        src: '/dist',
    },
    plugins: [
        '@snowpack/plugin-typescript'
    ],
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};
