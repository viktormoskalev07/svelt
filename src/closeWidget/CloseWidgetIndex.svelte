<script>
  import { createEventDispatcher } from 'svelte';
  import CloseButton from "./components/CloseButton.svelte";
  import WidgetText from './components/WidgetText.svelte';
  import WidgetGif from "./components/WidgetGif.svelte"

  
  const dispatch = createEventDispatcher();
  export let desktopStatic,staticTitle,staticWidget,is_opend,rightSize,gif_src,textColor,bgColor,planType,leftSize,widgetInfo,showText;

  function handleOpenVideoRepute(element) {
    dispatch('handleOpenVideoRepute', {
      element: element.target
        });
  }
  function handleCloseText() {
      dispatch('handleCloseText');
  }
</script>


<style>
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
  .hide {
    display: none !important;
  }

  @media (max-width: 481px) {
    div.videoreput-widget-container {
      padding: 0;
    }
  }

</style>

<div
    id="videoreput-widget-closed"
    class="videoreput-widget-container {is_opend ? 'hide' : ''}"
    style="width:{staticWidget && "255px"};height:{staticWidget && "64px"};flex-direction:{window.innerWidth > 482 && rightSize === '20px' ? 'row-reverse' : 'row'};width:{staticWidget && window.innerWidth <= 481 && !is_opend && rightSize==="20px" && "351px"};">
    
    <WidgetGif {staticWidget} on:handleOpenVideoRepute={handleOpenVideoRepute} {gif_src} {showText} />
    
    <WidgetText {desktopStatic} {staticTitle} {staticWidget} on:handleOpenVideoRepute={handleOpenVideoRepute} {textColor} {bgColor} {widgetInfo} {rightSize} {showText} {planType} />
    
    <CloseButton {desktopStatic} {is_opend} on:handleCloseText={handleCloseText} {rightSize} {leftSize} {showText} {staticWidget} />
</div>