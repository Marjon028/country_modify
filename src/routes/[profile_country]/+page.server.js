import { API_URL } from "$env/static/private";
/** @type {import('./$types').PageServerLoad} */
export async function load ({params, fetch}){
    const country_params = params.profile_country
   // const req = await fetch(`${API_URL}/name/${country_params}`)
    const req = await fetch(`${API_URL}/name/${country_params}`)
    const response = await req.json()
    return{
        response:response[0]
    }


}