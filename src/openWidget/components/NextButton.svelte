<script>
    import { createEventDispatcher } from 'svelte';

    export let has_next,is_opend,staticWidget;
    const dispatch = createEventDispatcher();

    function handleNext() {
        dispatch('handleNext');
    }
</script>

<style>
    div.videorepute-change-video {
        position: absolute;
        width: 32px;
        height: 32px;
        background: rgba(18, 18, 18, 0.2);
        border: 1px solid #ffffff;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        top: 299px;
        left: 16px;
        z-index: 100;
    }
    div.videorepute-has-next-previous {
        stroke: #000000;
        background: rgba(0, 0, 0, 0.08);
    }
</style>
<div
    id="videorepute-next"
    style="left:{ window.innerWidth <= 481 ? '87%' : '327px'};top:{window.innerWidth <= 481 ? '50%' : '299px'};height:{staticWidget && window.innerWidth > 482 && is_opend && "24px"};top:{staticWidget && window.innerWidth > 482 && is_opend && "193px"};left:{staticWidget && window.innerWidth > 482 && is_opend && "216px"};width:{staticWidget && "24px"};height:{staticWidget && window.innerWidth <= 481 && is_opend && "24px"};top:{staticWidget && window.innerWidth <= 481 && is_opend && "24%"};left:{staticWidget && window.innerWidth <= 481 && is_opend && "87%"};top:{staticWidget && window.innerWidth <= 481 && window.innerWidth > 376 && is_opend && "45%"};left:{staticWidget && window.innerWidth <= 481 && window.innerWidth > 376 && is_opend && "91%"}"
    class="videorepute-change-video {has_next ? 'videorepute-has-next-previous' : ''}"
    on:click={handleNext}>
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="#fff0"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.25829 16.7417C4.78329 16.7417 4.31663 16.6167 3.8833
            16.3667C3.01663 15.8667 2.5083 14.9833 2.5083
            13.9833V6.00832C2.5083 5.01665 3.02496 4.125 3.8833 3.625C4.74996
            3.125 5.77495 3.125 6.63329 3.625L13.5416 7.60833C14.4 8.10833
            14.9166 8.99999 14.9166 9.99165C14.9166 10.9833 14.4 11.875
            13.5416 12.375L6.63329 16.3583C6.19995 16.6167 5.73329 16.7417
            5.25829 16.7417ZM5.25829 4.50833C4.99996 4.50833 4.74163 4.57499
            4.5083 4.70832C4.04163 4.98332 3.7583 5.46665 3.7583
            6.00832V13.9833C3.7583 14.525 4.04163 15.0083 4.5083
            15.2833C4.97496 15.55 5.54162 15.5583 6.00829 15.2833L12.9166
            11.3C13.3833 11.025 13.6666 10.5417 13.6666 9.99999C13.6666
            9.45833 13.3833 8.975 12.9166 8.7L6.00829 4.71666C5.77495 4.58333
            5.51662 4.50833 5.25829 4.50833Z"
            fill="white" />
        <path
            d="M16.8667 15.7751C16.525 15.7751 16.2417 15.4918 16.2417
            15.1501V4.8501C16.2417 4.50843 16.525 4.2251 16.8667
            4.2251C17.2084 4.2251 17.4917 4.50843 17.4917
            4.8501V15.1501C17.4917 15.4918 17.2167 15.7751 16.8667 15.7751Z"
            fill="white" />
    </svg>         
</div>