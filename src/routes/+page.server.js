export async function load({ fetch }) {
    return {x : 1}
}
export const actions = {
    default: async ({ request }) => {
        return { y: (await request.formData()).get('x') }
    }
}