<script>
    export let current,total,staticWidget,is_opend,currentScroll;
</script>

<style> 
div.videoreput-widget-response-count {
    position: absolute;
    bottom: 1px;
    right: 20px;
    color: white;
}
span.videoreput-widget-response-count {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
}
.curent {
    font-weight: bold;
    font-size: 20px;
}
span.total {
    font-weight: normal;
    font-size: 14px;
    margin-left: -2px;
    margin-top: 2px;
    color: white;
}
span.divider {
    margin-left: -3px;
    color: white;
}
</style>


<div class="videoreput-widget-response-count" style="bottom:{staticWidget && "5px"};right:{staticWidget && "14px"};right:{staticWidget && window.innerWidth <= 481 && is_opend && "20px"};bottom:{!staticWidget && window.innerWidth <= 481 && "1px"}">
    <span class="videoreput-widget-response-count">
         <span class="curent">
            {#if window.innerWidth < 481}
                {parseInt(currentScroll) + 1}
            {:else}
                {current + 1}
            {/if}
        </span>
         <span class="divider">
             /
             <span class="total" />
             {total}
         </span>
     </span>
 </div>