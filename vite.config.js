import { sveltekit } from '@sveltejs/kit/vite';

const config = {
    plugins: [sveltekit()],
    ssr: {
        format: "cjs"
    }
};

export default config;