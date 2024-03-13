import { redirect } from '@sveltejs/kit';

export const load = ({ cookies, url }) => {
    // Redirect to auth page if user is not logged in
    if (!cookies.get('username')) {
        throw redirect(307, `/api/auth?redirectTo=${url.pathname}`);
    }
};
