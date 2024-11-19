<script lang="ts">
    import type { LayoutData } from './$types';
  
    export let data: LayoutData;
</script>
  
<h1>My Layout</h1>
<p>{data.someData}</p>