<script>
export let data;
const datas = data.datas;

</script>

{#each datas as c}
<h1><a href="/region/{c.name.common}">{c.name.common}</a></h1>
    
{/each}