<script>
    export let showTooltip,staticWidget;
</script>

<style>
    div.tooltip {
        position: absolute;
        height: 30px;
        bottom: 101px;
        right: 9px;
        border-radius: 4px;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background: #0a59f7;
        border: 1px solid #ffffff;
        white-space: nowrap;
        padding: 8px;
    }
    div.afterTooltip {
        width: 4px;
        height: 4px;
        bottom: 99px;
        position: absolute;
        right: 28px;
        transform: rotate(46deg);
        background: #0a59f7;
        border-bottom: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
    }
</style>

<div style="display: {!showTooltip ? 'none' : 'flex'};">
    <div class="tooltip" style="height:{staticWidget && "11px"};padding:{staticWidget && "6px"} ">Click to Unmute</div>
    <div class="afterTooltip">&nbsp;</div>
  </div>