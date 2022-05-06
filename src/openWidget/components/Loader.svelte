<script>
    export let staticWidget;
</script>
<style>
    .loader {
        z-index: 100;
        position: fixed;
        width: 80px;
        height: 80px;
    }
    .loader div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #0a59f7;
        border-radius: 50%;
        animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #0a59f7 transparent transparent transparent;
    }
    .loader div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loader div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loader div:nth-child(3) {
        animation-delay: -0.15s;
    }  
    @keyframes loader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

<div class="loader"
    style="top:{window.innerWidth <= 481 ? '46%' : '44%'};left:{window.innerWidth <= 481 ? '169px' : '147px'};left:{window.innerWidth <= 375 && '139px'};top:{staticWidget && "43%"};left:{staticWidget && "119px"};">
    <div style="width:{staticWidget && "50px"};height:{staticWidget && "50px"};"></div>
    <div style="width:{staticWidget && "50px"};height:{staticWidget && "50px"};"></div>
    <div style="width:{staticWidget && "50px"};height:{staticWidget && "50px"};"></div>

</div>