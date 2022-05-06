<script>
    import { createEventDispatcher } from 'svelte';
    import VerifiedText from "./VerifiedText.svelte"

    const dispatch = createEventDispatcher();
    export let desktopStatic,staticTitle,staticWidget,textColor,bgColor,widgetInfo,rightSize,showText,planType;

    function handleOpenVideoRepute() {
        dispatch('handleOpenVideoRepute');
    }
</script>

<style>
.paid {
    margin-top: 10px;
}
div.videoreput-widget-text {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    flex: 2;
    border: 1px solid #000000;
    border-radius: 8px;
    width: 255px;
    height: auto;
    padding: 11px 8px 7px 16px;
}
span.videoreput-widget-title {
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    /* color: #242424; */
}
@media (max-width: 481px) {
    div.videoreput-widget-text {
        display: none;
    }
}
</style>

<div
    on:click={handleOpenVideoRepute}
    class="videoreput-widget-text"
    style="height:{window.innerWidth > 482 && !staticWidget && "80px"};margin-left:{staticWidget && "5px"};width:{staticWidget && "185px"};color: {'#' + textColor};background-color:{'#' + bgColor};margin-left:{window.innerWidth > 482 && rightSize === '20px' ? '0' : '8px'};margin-right:{window.innerWidth > 482 && rightSize === '20px' ? '8px' : '0'};visibility:{!showText && 'hidden'};margin-top:{staticWidget && "9px"};padding:{staticWidget && ""};height:{staticWidget && desktopStatic && "40px"}">
    {#if widgetInfo.title === undefined || widgetInfo.title === '' || widgetInfo.title === null}
        null
    {:else}
        {#if planType === false}
            <span class="videoreput-widget-title paid" style="font-size:{staticWidget && "11px"};line-height:{staticWidget && "16px"};">
                {#if staticWidget}
                    {staticTitle}
                {:else}
                    {widgetInfo.title}
                {/if}
            </span>
        {/if}
        {#if planType === true}
            <span class="videoreput-widget-title" style="font-size:{staticWidget && "11px"};line-height:{staticWidget && "16px"};">
                {#if staticWidget}
                    {staticTitle}
                {:else}
                    {widgetInfo.title}
                {/if}
            </span>
        {/if}
        {#if planType === false}
            <span class="videoreput-widget-title paid" style="font-size:{staticWidget && "11px"};line-height:{staticWidget && "16px"};">
                {#if staticWidget}
                    {staticTitle}
                {:else}
                    {widgetInfo.title}
                {/if}
            </span>
        {/if}
    {/if}
    {#if planType === true}
        <VerifiedText {staticWidget}/>
    {/if}
</div>