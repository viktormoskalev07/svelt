<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    export let gif_src,showText,staticWidget;

    function handleOpenVideoRepute() {
        dispatch('handleOpenVideoRepute');
    }
</script>


<style>
img.videoreput-widget-gif {
    border-radius: 8px;
    object-fit: cover;
    width: 80px;
    height: 80px;
    border: 1px solid #000000;
}
div.videoreput-widget-gif {
    margin-top: 8px;
}
@media (max-width: 481px) {
img.videoreput-widget-gif {
    width: 110px;
    height: 110px;
}
div.videoreput-widget-gif {
    width: 110px;
    height: 110px;
    border-radius: 8px;
}
}
</style>

<div
    on:click={handleOpenVideoRepute}
    class="videoreput-widget-gif"
    style="display:{window.innerWidth <= 481 && !showText && 'none'}">
        <img class="videoreput-widget-gif" src={gif_src} alt="videorepute" style="width: {staticWidget && window.innerWidth > 482 && "58px"};height:{staticWidget && window.innerWidth > 482 && "58px"}" />
</div>