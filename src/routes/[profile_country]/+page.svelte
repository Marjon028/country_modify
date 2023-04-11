<script>
export let data
const response = data.response;





</script>


<h1>{response.name.common}</h1> 
<img src={`${response.flags.png}`}>
{#if response.independent}
<h1> INDEPENDENT</h1>
{:else}
<h1>NOT INDEPENDENT</h1>
    
{/if}


<div><h9>{response.capital}</h9></div>
<div><h9>{response.tld}</h9></div>

{#each Object.entries(response.name.nativeName) as [datas1 , official] }
<div><h9>{datas1.toUpperCase()}</h9></div>

<div><h9>{official.official}</h9></div>
    
{/each}
    
{#each Object.entries(response.currencies) as [datas1 , datas2] }
<div><h9 class="text-2xl font-bold" >{datas1.toUpperCase()}</h9></div>

<div><h9>Symbol: {datas2.symbol}</h9></div>
    
{/each}
    

    
