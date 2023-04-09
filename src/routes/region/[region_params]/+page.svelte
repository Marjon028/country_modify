<script>
export let data;
const response = data.datas;

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
    <div>
    <h2>LANGUAGES</h2>
{#each Object.entries(response.translations) as [c1,c2] }
<h9>{c1},</h9>

    
{/each}
</div>