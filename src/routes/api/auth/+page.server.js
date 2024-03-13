import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, cookies, url }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        if (!username || !password) {
            console.log("something is null or empty")
            throw redirect(303, url.searchParams.get('redirectTo') || '/');
        }
        cookies.set('username', username, { path: '/' });
        throw redirect(303, url.searchParams.get('redirectTo') || '/');
    },
};
