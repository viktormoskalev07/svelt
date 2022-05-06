<script>
    import { createEventDispatcher } from 'svelte';
    import CloseButton from "./components/CloseButton.svelte";
    import PrevoiusButton from "./components/PrevoiusButton.svelte";
    import NextButton from "./components/NextButton.svelte";
    import PlayButton from "./components/PlayButton.svelte";
    import CloseVideo from "./components/CloseVideo.svelte";
    import Loader from "./components/Loader.svelte";
    import Tooltip from "./components/Tooltip.svelte";
    import TimerBar from "./components/TimerBar.svelte";
    import SpeedIcon from "./components/SpeedIcon.svelte";
    import VolumeIcon from "./components/VolumeIcon.svelte";
    import FooterPlan from "./components/FooterPlan.svelte";
    import WidgetCount from "./components/WidgetCount.svelte";
    import Swipe from "./components/Swipe.svelte"
    import viewPort from "../useViewPortAction"

    export let currentScroll,desktopStatic,staticWidget,replay,marginLeft,selectShowVideo,planType,iconColor,current,poster,showTooltip,timerWidth,background,currentMinutes,currentSeconds,speedOfVideo,firstHeight,showPlayButton,rangeValue,is_opend,rightSize,leftSize,showSwipeText,has_previous,total,has_next;
    let scrollLastPosition = 0
    let videoId = 0
    const dispatch = createEventDispatcher();

    function handleMute() {
        dispatch('handleMute');
    }
    function loadVideo() {
        dispatch('loadVideo');
    }
    function handleReplay(){
        dispatch('handleReplay')
    }
    function handleSpeedVideo() {
        dispatch('handleSpeedVideo');
    }
    function handleCloseSwipeText() {
        dispatch('handleCloseSwipeText');
    }
    function handlePrevious() {
        dispatch('handlePrevious');
    }
    function handleCloseVideoRepute() {
        dispatch('handleCloseVideoRepute');
    }
    function handlePlayButton() {
        dispatch('handlePlayButton');
    }
    function handleNext() {
        dispatch('handleNext');
    }
    function scrollFunction(element) {
    dispatch('scrollFunction', {
        element: element
        });
    }
    let carousel, sleft;
</script>

<style>
div.videorepute-has-more {
    position: absolute;
    width: 199px;
    height: 339px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    left: 73px;
    bottom: 161px;
}
.videoreput-widget-slider-video {
    width: 375px;
    height: 630px;
    object-fit: cover;
    border-radius: 20px;
    z-index: 0;
}
.hide {
    display: none !important;
}
div.videoreput-widget-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    width: 351px;
    height: 88px;
}
div.hoverBox {
    border-radius: 20px;
    width: 100%;
}
#hoverBox:hover > div.showControls {
    visibility: visible;
    opacity: 1;
}
#hoverBox:hover > div.showVolume {
    visibility: hidden;
    opacity: 0;
}
div.wrapper-footer {
    position: absolute;
    bottom: 0;
    height: 32px;
    background: #000000;
    opacity: 0.3;
    backdrop-filter: blur(20px);
    border-radius: 0px 0px 20px 20px;
}
div.controlls {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 69px;
    left: 16px;
    width: 91.5%;
}
div.video-time {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 24px;
    background: rgba(18, 18, 18, 0.2);
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
}
div.button-controll {
    display: flex;
}

div.showVolume {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 48px;
    right: 1px;
    visibility: visible;
    opacity: 1;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
}
div.showControls {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 700ms ease;
    -moz-transition: all 700ms ease;
    -ms-transition: all 700ms ease;
    -o-transition: all 700ms ease;
    transition: all 700ms ease;
    /* for desktop-widget */
    position: absolute;
    bottom: 6px;
    width: 100%;
}
/* 
video::-webkit-media-controls {
  display: none;
}
video::-webkit-media-controls-start-playback-button {
  display: none;
}
video::-webkit-media-controls-panel {
  display: none !important;
} */

@media (max-width: 481px) {
div.videoreput-widget-container {
    padding: 0;
}
div.videoreput-widget-container-opened {
    height: 100vh;
}
div.hoverBox {
    bottom: 0;
}
.videoreput-widget-slider-video {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
}

/* .videoreput-widget-slider-video::-webkit-media-controls {
    display: none;
}
.videoreput-widget-slider-video::-webkit-media-controls-start-playback-button {
    display: none;
}
.videoreput-widget-slider-video::-webkit-media-controls-panel {
    display: none !important;
} */
div.wrapper-footer {
    width: 100%;
    border-radius: 0;
    bottom:0
}
}
div.showReplay {
    z-index: 100;
    cursor: pointer;
    position: absolute;
    background: rgba(18, 18, 18, 0.3);
    backdrop-filter: blur(10px);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

.app__videos {
  position: relative;
  height: inherit;
  overflow: scroll;
  width: 100%;
  /* max-width: 400px; */
  scroll-snap-type: y mandatory;
  border-radius: 20px;
}

.app__videos::-webkit-scrollbar {
  display: none;
}

.app__videos {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.video {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: white;
  scroll-snap-align: start;
}
div.swipeWrapper{
    width: 100%;
    border-radius: 20px 20px 0 0;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(20px);
    top: 45px;
    display: flex;
}
</style>

<div
    class="videoreput-widget-container-opened {is_opend ? '' : 'hide'}
    background:{window.innerWidth <= 481 && 'rgba(0,0,0,0.6)'};"
    id="videoreput-widget-opened">

    {#if window.innerWidth > 482}
        <CloseButton {is_opend} {staticWidget} {rightSize} {leftSize} on:CloseVideoRepute={handleCloseVideoRepute} />
    {/if}
    
    {#if !showSwipeText}
        <!-- {#if !isLoaded} -->
            {#if window.innerWidth > 482 && !staticWidget}
                {#if has_previous}
                    <!-- previous button -->
                    <PrevoiusButton {staticWidget} {is_opend} {has_previous}  on:handlePrevious={handlePrevious} />
                {/if}
            {/if}

            {#if window.innerWidth > 482 && !staticWidget}
                <div class="videorepute-has-more {total > 1 ? '' : 'hide'}" />
                {#if has_next}
                    <!-- next button -->
                    <NextButton {staticWidget} {is_opend} {has_next} on:handleNext={handleNext} />
                {/if}
            {/if}

            {#if replay}
                <div
                    class="showReplay"
                    on:click={handleReplay}
                    style="opacity:{showPlayButton ? '1' : '0'};top:{window.innerWidth <= 481 ? '46%' : '44%'};left:{window.chrome && window.innerWidth <= 481 ? '169px' : '147px'};left:{window.innerWidth <= 375 && '139px'};">
                    <div style="color:white;font-size:54px;">&#8635;</div>
                </div>
            {:else}
                <PlayButton {is_opend} {staticWidget} {showPlayButton} on:handlePlayButton={handlePlayButton} />
            {/if}
        <!-- {/if} -->
    {/if}

    <div
        id="hoverBox"
        class="hoverBox"
        style="height:{window.innerWidth <= 481 && `${firstHeight}px`};position:absolute;
        border-radius:{window.innerWidth <= 481 && "0"};display:flex;flex-direction:column;align-items:center;background:{window.innerWidth <= 481 &&"#4a4848"};height:{staticWidget && window.innerWidth <= 481 && window.innerWidth > 376 && is_opend && "100vh"};">
                
        {#if window.innerWidth <= 481}
            <CloseVideo on:handleCloseVideoRepute={handleCloseVideoRepute} />
        {/if}
        <div class="app__videos" id="all-videos"  bind:this={carousel}
        on:scroll={()=>{
            if ( document.querySelectorAll('.videoreput-widget-slider-video').length > 0) {
                var windowHeight = window.innerHeight,
                videoEl = document.querySelectorAll('.videoreput-widget-slider-video');
                for (var i = 0; i < videoEl.length; i++) {
                    var thisVideoEl = videoEl[i],
                        videoHeight = thisVideoEl.clientHeight,
                        videoClientRect = thisVideoEl.getBoundingClientRect().top;
                    if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
                    thisVideoEl.play();
                    scrollFunction(thisVideoEl)
                    } else {
                        thisVideoEl.pause();
                    }
                }
            }
        }
        }
            style="display:{window.innerWidth > 482 && "flex"};flex-direction:{window.innerWidth > 482 && "column"};align-items:{window.innerWidth > 482 && "center"};border-radius:{window.innerWidth <= 481 && "20px 20px 0 0"};border-radius:{staticWidget && window.innerWidth > 482 && "14px"}"> 
            <!-- videos -->
        </div> 
        {#if !showSwipeText}
            <!-- {#if isLoaded} -->
                <!-- <Loader {staticWidget} /> -->
            <!-- {:else} -->
                {#if window.innerWidth <= 481}
                    <Tooltip {staticWidget}  {showTooltip} />
                    <TimerBar {currentMinutes} {currentSeconds} flag={false} {staticWidget} {rangeValue} {timerWidth} {background} {selectShowVideo} {marginLeft} />
                    <div class="controlls">
                        <div class="video-time">{currentMinutes}:{currentSeconds}</div>
                        <div class="button-controll"> 
                            <!-- speed icon -->
                            <SpeedIcon {staticWidget} {speedOfVideo} on:handleSpeedVideo={handleSpeedVideo} />
                            <!-- subtitle icon  -->
                            <!-- volume icon  -->
                            <VolumeIcon {staticWidget} flag={false} on:handleMute={handleMute} {iconColor} />
                        </div>
                    </div>
                {:else}
                    <div class="showControls">
                        <Tooltip {staticWidget}  {showTooltip} />
                        <TimerBar {currentMinutes} {currentSeconds} flag={true} {staticWidget} {rangeValue} {timerWidth} {background} {selectShowVideo} {marginLeft}/>
                        <div class="controlls" style="left:{staticWidget && "14px"};">
                            <div class="video-time" style="font-size:{staticWidget && "14px"};">{currentMinutes}:{currentSeconds}</div>
                            <div class="button-controll" style="margin-right:{staticWidget && "6px"};">
                                <!-- speed icon -->
                                <SpeedIcon {staticWidget} {speedOfVideo} on:handleSpeedVideo={handleSpeedVideo} />
                                <!-- subtitle icon  -->
                                <!-- volume icon  -->
                                <VolumeIcon {staticWidget} flag={false} on:handleMute={handleMute} {iconColor} />

                            </div>
                        </div>
                    </div>
                    <div
                        class="showVolume"
                        style="left:{window.chrome && window.innerWidth <= 481 ? '366px' : '328px'};left:{staticWidget && '217px'}">
                            <VolumeIcon {staticWidget} flag={true} on:handleMute={handleMute} {iconColor} />
                    </div>

                {/if}
                    <div class="wrapper-footer" style="width:100%">&nbsp;</div>
                    <FooterPlan {rightSize} {desktopStatic} {leftSize} {is_opend} {planType} {staticWidget} />
                    <WidgetCount {currentScroll} {is_opend} {staticWidget} {current} {total} />
            <!-- {/if}  -->
        {:else}
            <div class="swipeWrapper">
                    <Swipe on:handleCloseSwipeText={handleCloseSwipeText} />
            </div>
        {/if}
    </div>
</div>