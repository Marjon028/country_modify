import {API_URL} from  '$env/static/private'

export async function load({params,fetch}){
    const req = await fetch(`${API_URL}/all?fields=name,cca2`)
    const country_data = await req.json();

    return{
        country_data
    }

    

}