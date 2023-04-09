import { API_URL } from "$env/static/private";

export async function load ({fetch}){
    const req = await fetch(`${API_URL}/region/europe`)
const datas = await req.json();
    return{
        datas :datas
    }

}