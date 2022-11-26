import { sveltekit } from '@sveltejs/kit/vite';

const config = {
    plugins: [sveltekit()],
    ssr: {
        //external: Object.keys(pkg.depencies || {})
        format: "cjs"
        
    }
};

export default config;