<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let rightSize,leftSize,staticWidget,is_opend;

    function CloseVideoRepute() {
        dispatch('CloseVideoRepute');
    }
</script>

<style>
    button.videorepute-close-button {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        align-self: flex-end;
        background: #000000;
        z-index: 10000;
    }
    
    div.closeBox {
        display: flex;
        align-items: flex-end;
        padding-right: 8px;
        flex-direction: column;
        justify-content: center;
    }
    div.closeButtonStatic{
        position:absolute;
        z-index:1;
        top:4px;
        right:4px;
        cursor:pointer;
    }
</style>
<div
class="closeBox"
style=";position:absolute;top:-14px;right:-14px">
    {#if staticWidget}
        <div 
            class="closeButtonStatic"
            style="right:{staticWidget && window.innerWidth > 482 && is_opend && rightSize === '20px' && "256px"}"
            on:click={CloseVideoRepute}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="black"/>
                <path d="M13.9377 6.06895C13.6939 5.8252 13.3002 5.8252 13.0564 6.06895L10.0002 9.11895L6.94395 6.0627C6.7002 5.81895 6.30645 5.81895 6.0627 6.0627C5.81895 6.30645 5.81895 6.7002 6.0627 6.94395L9.11895 10.0002L6.0627 13.0564C5.81895 13.3002 5.81895 13.6939 6.0627 13.9377C6.30645 14.1814 6.7002 14.1814 6.94395 13.9377L10.0002 10.8814L13.0564 13.9377C13.3002 14.1814 13.6939 14.1814 13.9377 13.9377C14.1814 13.6939 14.1814 13.3002 13.9377 13.0564L10.8814 10.0002L13.9377 6.94395C14.1752 6.70645 14.1752 6.30645 13.9377 6.06895Z" fill="white"/>
                </svg>
        </div>
    {:else}
        <button
        id="videorepute-close"
        class="videorepute-close-button"
        style="top:{!staticWidget && window.innerWidth > 482 && is_opend && "1px"};left:{!staticWidget && leftSize==="20px" && window.innerWidth > 482 && is_opend && "-21px"};left:{!staticWidget && rightSize==="20px" && window.innerWidth > 482 && is_opend && "-393px"};top:{window.innerWidth <= 481 ? '6px' : '-13px'};left:{rightSize === '20px' && window.innerWidth > 482 && '-14px'};right:{leftSize === '20px' && window.innerWidth > 482 && '-14px'};
        right:{window.innerWidth <= 481 && '11px'};opacity:{window.innerWidth <= 481 ? '0.3' : '1'};
        border:1px solid black;position:{!staticWidget && window.innerWidth > 482 && "absolute"};"
        on:click={CloseVideoRepute}>
        <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.3002 0.710215C12.9102 0.320215 12.2802 0.320215 11.8902
            0.710215L7.00021 5.59021L2.11022 0.700215C1.72022 0.310215 1.09021
            0.310215 0.700215 0.700215C0.310215 1.09021 0.310215 1.72022
            0.700215 2.11022L5.59021 7.00021L0.700215 11.8902C0.310215 12.2802
            0.310215 12.9102 0.700215 13.3002C1.09021 13.6902 1.72022 13.6902
            2.11022 13.3002L7.00021 8.41021L11.8902 13.3002C12.2802 13.6902
            12.9102 13.6902 13.3002 13.3002C13.6902 12.9102 13.6902 12.2802
            13.3002 11.8902L8.41021 7.00021L13.3002 2.11022C13.6802 1.73022
            13.6802 1.09022 13.3002 0.710215Z"
            fill="white" />
        </svg>
        </button>
    {/if}
</div>