<script>
    import { createEventDispatcher } from 'svelte';

    export let has_previous,staticWidget,is_opend;
    const dispatch = createEventDispatcher();

    function handlePrevious() {
        dispatch('handlePrevious');
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
    id="videorepute-previous"
    class="videorepute-change-video {has_previous ? 'videorepute-has-next-previous' : ''}"
    style="top:{window.innerWidth <= 481 ? '50%' : '299px'};height:{staticWidget && window.innerWidth > 482 && is_opend && "24px"};top:{staticWidget && window.innerWidth > 482 && is_opend && "193px"};width:{staticWidget && "24px"};height:{staticWidget && window.innerWidth <= 481 && is_opend && "24px"};top:{staticWidget && window.innerWidth <= 481 && is_opend && "24%"};top:{staticWidget && window.innerWidth <= 481 && window.innerWidth > 376 && is_opend && "45%"};left:{staticWidget && window.innerWidth <= 481 && window.innerWidth > 376 && is_opend && "3%"};"
    on:click={handlePrevious}>
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="#fff0"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.7418 16.7416C14.2668 16.7416 13.8002 16.6167 13.3668
            16.3667L6.45849 12.3833C5.60016 11.8833 5.0835 10.9916 5.0835
            9.99998C5.0835 9.00831 5.60016 8.11666 6.45849 7.61666L13.3668
            3.6333C14.2252 3.1333 15.2502 3.1333 16.1168 3.6333C16.9835 4.1333
            17.4918 5.01665 17.4918 6.01665V13.9917C17.4918 14.9833 16.9752
            15.875 16.1168 16.375C15.6835 16.6166 15.2168 16.7416 14.7418
            16.7416ZM14.7418 4.50832C14.4835 4.50832 14.2252 4.57497 13.9918
            4.70831L7.08349 8.69164C6.61682 8.96664 6.3335 9.44997 6.3335
            9.99164C6.3335 10.5333 6.61682 11.0166 7.08349 11.2916L13.9918
            15.275C14.4585 15.55 15.0252 15.55 15.4918 15.275C15.9585 15
            16.2418 14.5166 16.2418 13.975V5.99999C16.2418 5.45832 15.9585
            4.97499 15.4918 4.69999C15.2585 4.58333 15.0002 4.50832 14.7418
            4.50832Z"
            fill="white" />
        <path
            d="M3.1333 15.7751C2.79163 15.7751 2.5083 15.4918 2.5083
            15.1501V4.8501C2.5083 4.50843 2.79163 4.2251 3.1333 4.2251C3.47497
            4.2251 3.7583 4.50843 3.7583 4.8501V15.1501C3.7583 15.4918 3.47497
            15.7751 3.1333 15.7751Z"
            fill="white" />
    </svg>
</div>