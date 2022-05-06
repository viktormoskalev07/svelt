<script>
    export let flag,rangeValue,timerWidth,background,selectShowVideo,marginLeft,staticWidget;

    // let counter=4
    function handleTimeVide() {
    console.log("video timer",selectShowVideo , rangeValue)

    marginLeft = rangeValue + '%'
    selectShowVideo.currentTime = (rangeValue / 100) * selectShowVideo.duration
    // if(Math.ceil(video.target.duration - (video.target.currentTime - video.target.currentTime / 60),10,)===1){
    //     counter--
    //     if(counter ===0){
    //     currentSeconds="00"
    //     }
    //   }
  }
  
</script>

<style>
    div.timerBar {
        position: absolute;
        bottom: 35px;
        margin-left: 16px;
        margin-right: 16px;
    }

  input[type='range'] {
    width: 343px;
    height: 5px;
    padding: 0;
    cursor: pointer;
    border-radius: 10px;
    background: #ffffff;
    border-width: 0px;
    backdrop-filter: blur(56px);
    outline: none;
    -webkit-appearance: none;
    appearance: none;
  }
  input[type='range']::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 2px solid #0a59f7;
    border-radius: 10px;
    -webkit-appearance: none;
  }
  input[type='range']::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 2px solid #0a59f7;
    border-radius: 10px;
    -webkit-appearance: none;
    appearance: none;
  }
  input[type='range']::-ms-thumb {
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 2px solid #0a59f7;
    border-radius: 10px;
    -webkit-appearance: none;
    appearance: none;
  }
  div.wrapper{
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
  }
</style>


{#if flag}
<div class="timerBar" style="left:0;">
    <input
        style="width:{window.innerWidth <= 481 ? '91vw' : timerWidth};background:{background};width:{staticWidget && "228px"}"
        id="timerBar"
        class="timerBar"
        type="range"
        min="0"
        max="100"
        name="foo"
        on:change={handleTimeVide}
        bind:value={rangeValue} />
</div>
{:else}
<div class="wrapper">
  <div
    style="bottom:35px;bottom:{window.chrome && window.innerWidth <= 481 && '43px'};position:absolute;margin-left:0;margin-right:0">
    <input
        style="width:{window.innerWidth <= 481 ? '91vw' : timerWidth};background:{background};"
        id="timerBar"
        class="timerBar"
        type="range"
        min="0"
        max="100"
        name="foo"
        on:change={handleTimeVide}
        bind:value={rangeValue} />
</div>
</div>

{/if}

