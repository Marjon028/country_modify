
<script >
   
    export let data;
   /**echo "# country_modify" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Marjon028/country_modify.git
git push -u origin main*/

/**git remote add origin https://github.com/Marjon028/country_modify.git
git branch -M main
git push -u origin main*/
</script>

<h1 class="text-2xl font-bold"><a href="/region" > go to region </a></h1>
{#each data.country_data as c,i }
<div style="display: block; border: 0.6px slategrey solid; margin-left: auto; margin-right: auto;">
<h1><a href={`/${c.name.common}`}> {c.name.common}</a> </h1>


<h2>{`${c.cca2}`}</h2>
</div>  
{/each}

