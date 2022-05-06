<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleCloseVideoRepute() {
        dispatch('handleCloseVideoRepute');
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
</style>

<button
id="videorepute-close"
class="videorepute-close-button"
style="border:1px solid #868484;margin-top: 8px; margin-bottom: 8px; margin-right:8px;background: #868484;"
on:click={handleCloseVideoRepute}>
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