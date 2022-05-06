<script>
    import { createEventDispatcher } from 'svelte';

    export let showPlayButton,staticWidget,is_opend;
    const dispatch = createEventDispatcher();

    function handlePlayButton() {
        dispatch('handlePlayButton');
    }
</script>

<style>
    div.playVideoButton {
        z-index: 100;
        cursor: pointer;
        /* position: absolute; */
        background: rgba(18, 18, 18, 0.3);
        backdrop-filter: blur(10px);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.Wrapper{
        background: red;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 45%;
        position: absolute;
    }
</style>

<!-- top:{staticWidget && window.innerWidth <= 481 && window.innerWidth > 376 && is_opend && "37%"};left:{staticWidget && window.innerWidth <= 481 && "146px"};left:{staticWidget && window.innerWidth <= 481 && window.innerWidth > 376 && is_opend && "189px"};top:{staticWidget && window.innerWidth <= 481 && "17%"};left:{!staticWidget && "40%"};left:{window.innerWidth <= 375 && '139px'};left:{staticWidget && "107px"};width:{staticWidget && window.innerWidth > 482 && "50px"};left:{!staticWidget && window.innerWidth <= 481 && is_opend && "40%"};top:{window.innerWidth <= 481 ? '47%' : '44%'};left:{window.chrome && window.innerWidth <= 481 ? '163px' : '147px'}; -->
<div class="Wrapper">
    <div
    class="playVideoButton"
    on:click={handlePlayButton}
    style="opacity:{showPlayButton ? '1' : '0'};height:{staticWidget && window.innerWidth > 482 && "65px"};width:{staticWidget && window.innerWidth > 482 && "65px"}">
    {#if staticWidget && window.innerWidth > 482}
        <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.6665 15.0002V9.06682C1.6665 1.70015 6.88317 -1.31652 13.2665
            2.36682L18.4165 5.33348L23.5665 8.30015C29.9498 11.9835 29.9498
            18.0168 23.5665 21.7002L18.4165 24.6668L13.2665 27.6335C6.88317
            31.3168 1.6665 28.3002 1.6665 20.9335V15.0002Z"
            fill="white"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
    {:else}
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.6665 15.0002V9.06682C1.6665 1.70015 6.88317 -1.31652 13.2665
                2.36682L18.4165 5.33348L23.5665 8.30015C29.9498 11.9835 29.9498
                18.0168 23.5665 21.7002L18.4165 24.6668L13.2665 27.6335C6.88317
                31.3168 1.6665 28.3002 1.6665 20.9335V15.0002Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    {/if}
</div>
</div>