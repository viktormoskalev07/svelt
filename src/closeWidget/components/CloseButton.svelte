<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let desktopStatic,
    rightSize,
    leftSize,
    showText,
    staticWidget,
    is_opend;

  function handleCloseText() {
    dispatch("handleCloseText");
  }
</script>

<div
  class="close-icon"
  style="left:{rightSize === '20px' &&
    window.innerWidth > 482 &&
    '3px'};right:{rightSize === '20px' &&
    window.innerWidth <= 481 &&
    '-7px'};right:{leftSize === '20px' &&
    window.innerWidth <= 481 &&
    '-7px'};right:{leftSize === '20px' &&
    window.innerWidth > 482 &&
    '3px'};visibility:{!showText && 'hidden'};top:{staticWidget &&
    window.innerWidth > 482 &&
    !is_opend &&
    '7px'};right:{staticWidget && '-15px'};right:{staticWidget &&
    window.innerWidth <= 481 &&
    is_opend &&
    '112px'};top:{staticWidget &&
    window.innerWidth <= 481 &&
    !is_opend &&
    '-26px'};right:{staticWidget &&
    window.innerWidth > 482 &&
    !is_opend &&
    '82px'};left:{staticWidget &&
    window.innerWidth > 482 &&
    !is_opend &&
    rightSize === '20px' &&
    '5px'};right:{staticWidget &&
    window.innerWidth > 482 &&
    !is_opend &&
    rightSize === '20px' &&
    ''};top:{staticWidget &&
    window.innerWidth > 482 &&
    !is_opend &&
    rightSize === '20px' &&
    '12px'};right:{leftSize === '20px' &&
    window.innerWidth <= 481 &&
    !is_opend &&
    '89px'};right:{!staticWidget &&
    rightSize === '20px' &&
    window.innerWidth <= 481 &&
    '100px'};right:{!staticWidget &&
    leftSize === '20px' &&
    window.innerWidth <= 481 &&
    '-5px'};right:{staticWidget &&
    window.innerWidth > 482 &&
    window.innerWidth <= 481 &&
    !is_opend &&
    rightSize === '20px' &&
    '103px'};left:{staticWidget &&
    window.innerWidth <= 481 &&
    !is_opend &&
    rightSize === '20px' &&
    '218px'};top:{staticWidget &&
    window.innerWidth <= 481 &&
    desktopStatic &&
    !is_opend &&
    leftSize === '20px' &&
    '-32px'};top:{staticWidget &&
    window.innerWidth > 482 &&
    desktopStatic &&
    !is_opend &&
    leftSize === '20px' &&
    '10px'};top:{staticWidget &&
    window.innerWidth <= 481 &&
    !desktopStatic &&
    !is_opend &&
    rightSize === '20px' &&
    '-24px'};top:{staticWidget &&
    !desktopStatic &&
    window.innerWidth <= 481 &&
    rightSize === '20px' &&
    '-25px'};left:{staticWidget &&
    !desktopStatic &&
    !is_opend &&
    rightSize === '20px' &&
    '196px'};top:{staticWidget &&
    desktopStatic &&
    !is_opend &&
    leftSize === '20px' &&
    '12px'};top:{staticWidget &&
    desktopStatic &&
    window.innerWidth <= 481 &&
    !is_opend &&
    leftSize === '20px' &&
    '-22px'};"
  on:click={handleCloseText}
>
  {#if staticWidget}
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 5.81818C11.9999 9.03148 9.39781 11.6364 6.18795 11.6364C2.97809 11.6364 0.375977 9.03148 0.375977 5.81818C0.375977 2.60489 2.97809 0 6.18795 0C9.39781 0 11.9999 2.60489 11.9999 5.81818Z"
        fill="black"
      />
      <g clip-path="url(#clip0_2812_13088)">
        <path
          d="M8.47517 3.5309C8.3335 3.38908 8.10466 3.38908 7.96299 3.5309L6.18671 5.30544L4.41042 3.52726C4.26876 3.38544 4.03991 3.38544 3.89824 3.52726C3.75658 3.66908 3.75658 3.89817 3.89824 4.03999L5.67453 5.81817L3.89824 7.59635C3.75658 7.73817 3.75658 7.96726 3.89824 8.10908C4.03991 8.2509 4.26876 8.2509 4.41042 8.10908L6.18671 6.3309L7.96299 8.10908C8.10466 8.2509 8.3335 8.2509 8.47517 8.10908C8.61684 7.96726 8.61684 7.73817 8.47517 7.59635L6.69889 5.81817L8.47517 4.03999C8.6132 3.90181 8.6132 3.66908 8.47517 3.5309Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2812_13088">
          <rect
            width="8.71796"
            height="8.72727"
            fill="white"
            transform="translate(1.82812 1.4541)"
          />
        </clipPath>
      </defs>
    </svg>
  {:else}
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="black" />
      <path
        d="M11.15 4.85486C10.955 4.65986 10.64 4.65986 10.445
            4.85486L7.99999 7.29486L5.55499 4.84986C5.35999 4.65486 5.04499
            4.65486 4.84999 4.84986C4.65499 5.04486 4.65499 5.35986 4.84999
            5.55486L7.29499 7.99986L4.84999 10.4449C4.65499 10.6399 4.65499
            10.9549 4.84999 11.1499C5.04499 11.3449 5.35999 11.3449 5.55499
            11.1499L7.99999 8.70486L10.445 11.1499C10.64 11.3449 10.955 11.3449
            11.15 11.1499C11.345 10.9549 11.345 10.6399 11.15 10.4449L8.70498
            7.99986L11.15 5.55486C11.34 5.36486 11.34 5.04486 11.15 4.85486Z"
        fill="white"
      />
    </svg>
  {/if}
</div>

<style>
  div.close-icon {
    position: absolute;
    top: -5px;
  }

  @media (max-width: 481px) {
    div.close-icon {
      top: -19px;
    }
  }
</style>
