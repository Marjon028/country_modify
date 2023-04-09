import { API_URL } from "$env/static/private";

export async function load ({params,fetch}){
    const params_data = params.region_params;

    const req = await fetch (`${API_URL}/translation/${params_data}`)
    const datas = await req.json();
    return{
        datas: datas[0]
    }

}