<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import CloseWidgetIndex from "./closeWidget/CloseWidgetIndex.svelte";
  import OpenWidgetIndex from "./openWidget/OpenWidgetIndex.svelte";
  import { staticResize, widgetResized } from "./resize.js";

  const progress = writable(0);

  // UUID V4
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  if (localStorage.getItem("videorepute-viewer-uuid") == null) {
    localStorage.setItem("videorepute-viewer-uuid", uuidv4());
  }
  let user_viewer_uuid = localStorage.getItem("videorepute-viewer-uuid");
  // BASE VARIABLES
  const env_object = __widget;
  // const base_url = env_object.env.API_URL
  const base_url = "https://develop.api.videorepute.com";

  const env_key = env_object.env.MUX_ENV_KEY;
  // Variables to send proper request to backend
  let shop_domain = "";
  let product_name = "";

  // Variables For analytics information
  let has_impression_sent = false;
  let has_click_sent = false;

  // Gif and video is showed based on these variables
  let playbacl_id = "";
  let gif_src = ``;
  let poster = ``;
  let video_src = "";
  let static_playback_id = "";

  // Video element in widget to get and change for streaming
  let video = "";
  let allVideo = "";

  // Details of widget
  let total = 0;
  let current = -1;
  let currentScroll = 0;
  let total_page = 0;
  let current_page = 0;
  let loaded_until = -1;

  let has_next = false;
  let has_previous = false;

  let responses = [];

  // Keeping the state of the widget
  let is_opend = false;
  let show_widget = false;
  let timeStarted = -1;
  let array = [];

  //widget info
  let widgetInfo = {
    background_color: "",
    color_modal: "",
    id: 0,
    modal_background: "",
    modal_template: "",
    modal_title: "",
    position: "",
    status: "",
    text_color: "",
    text_color_modal: "",
    title: "",
  };
  //check plan type
  let planType = true;

  let rightSize;
  let leftSize;

  let bgColor = "ffffff";
  let bgModalColor = "ffffff";
  let textModalColor = "000000";
  let textColor = "000000";
  let closeWidgetStatic = true;

  let isMarkwtingTest;

  let minutes = 0;
  let seconds = 0;

  let iconColor = "#fff";
  let subtitleIconColor = "#fff";
  let speedIconColor = "#fff";
  let speedOfVideo = 1.0;

  let showTooltip = true;
  let currentMinutes = 0;
  let currentSeconds = 0;
  let showPlayButton = true;
  let timerWidth = "343px";
  let left;
  let marginLeft = 0;
  let element;
  let volumeFlag = false;

  let showText = true;
  let rangeValue = 0;
  let background;

  let changeHeight = false;
  let firstHeight;

  let showSwipeText = false;
  let secondTimer;
  let setPauseTime = 0;
  let pricingCounter = 0;
  let changeVideo = false;

  // let isLoaded=true
  let replay = false;

  let firstVideo;
  let firstIndex = true;
  let singleVideo = true;

  let widgetData;
  let isMarketing = false;

  let staticWidget = false;
  let staticTitle = "What our customers say about this product!";
  let desktopStatic;
  let selectShowVideo;

  let scrollLastPosition = 0;
  let videoId = 0;
  let hasFirstScroll = true;
  let resultData;
  let videoHeightScroll = 0;
  let videoClientRectScroll = 0;
  let widgetResize = "scale(1)";
  let staticWidgetResize = "scale(1)";

  let gift;

  let style;
  function showVideo(playbacl_id, index) {
    console.log(playbacl_id, index);
    if (index <= loaded_until) {
      return;
    }
    loaded_until = index;
    if (firstIndex) {
      firstVideo = playbacl_id;
      singleVideo = true;
    } else {
      singleVideo = false;
    }

    clearInterval(secondTimer);
    firstIndex = false;
    poster = `https://image.mux.com/${playbacl_id}/thumbnail.png?width=214&height=121`;
    video_src = `https://stream.mux.com/${playbacl_id}.m3u8`;
    gift = `https://image.mux.com/${playbacl_id}/thumbnail.png?width=214&height=121`;
    if (isMarketing) {
      gif_src = `https://image.mux.com/${playbacl_id}/animated.gif`;
    }
    const el = document.createElement("div");
    el.style.position = "relative";
    el.style.height = "100%";
    el.style.width = "100%";
    el.style.backgroundColor = "white";
    el.style.scrollSnapAlign = "start";
    el.onclick = function () {
      // if(window.innerWidth > 482){
      if (selectShowVideo.paused) {
        selectShowVideo.play();
        showPlayButton = false;
      } else {
        selectShowVideo.pause();
        showPlayButton = true;
      }
      // }else{
      //   handlePlayButton()
      // }
    };

    const height = staticWidget && "400px";
    const width = staticWidget && "260px";
    const radius = staticWidget && "14px";
    const phoneWidth = staticWidget && window.innerWidth <= 481 && "100%";
    const phoneHeight = staticWidget && window.innerWidth <= 481 && "100%";
    const pWidth = window.innerWidth <= 481 && "100%";
    const pHeight = window.innerWidth <= 481 && "100%";
    const pRadius = window.innerWidth > 482 && "20px 20px 0 0";
    let newVideo;

    if (window.innerWidth > 482 && !isMarketing) {
      newVideo = `<video
                        poster=${gift}
                        preload="metadata"
                        playsinline
                        id="video-player-widget-${index}"
                        class="videoreput-widget-slider-video"
                        style="display:none;border-radius:0;width: 375px;height: 630px;object-fit: cover;z-index: 0;cursor:pointer;height:${height};width:${width};width:${pWidth};height:${pHeight};border-radius:${pRadius};width:${phoneWidth};height:${phoneHeight};">
                        <img src=${poster} type="video/mp4" />
                        <track kind="captions" />
                    </video>`;
    } else {
      newVideo = `<video
                        poster=${gift}
                        preload="metadata"
                        playsinline
                        id="video-player-widget-${index}"
                        class="videoreput-widget-slider-video"
                        style="border-radius:0;width: 375px;height: 630px;object-fit: cover;z-index: 0;cursor:pointer;height:${height};width:${width};width:${pWidth};height:${pHeight};border-radius:${pRadius};width:${phoneWidth};height:${phoneHeight};">
                        <img src=${poster} type="video/mp4" />
                        <track kind="captions" />
                    </video>`;
    }

    el.innerHTML = newVideo;
    allVideo.appendChild(el);
    video = document.getElementById(`video-player-widget-${index}`);

    window.muxPlayerInitTime = Date.now();

    if (typeof mux !== "undefined") {
      mux.monitor(`#video-player-widget-${index}`, {
        debug: false,
        data: {
          env_key: env_key, // required
          player_name: "Widget Player",
        },
      });
      if (isMarkwtingTest) {
        mux.emit(`#video-player-widget-${index}`, "videochange", {
          video_series: shop_domain,
          viewer_user_id: user_viewer_uuid,
          player_init_time: window.muxPlayerInitTime,
        });
      } else {
        mux.emit(`#video-player-widget-${index}`, "videochange", {
          video_id: "" + responses[current]["id"],
          video_title: "" + responses[current]["product"],
          video_series: shop_domain,
          viewer_user_id: user_viewer_uuid,
          player_init_time: window.muxPlayerInitTime,
        });
      }
    }
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Some browers (safari and ie edge) support HLS natively
      video.src = video_src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(video_src);
      hls.attachMedia(video);
    } else {
      console.error("This is a legacy browser that doesn't support MSE");
    }
  }

  async function getResponses(page_number) {
    const response = await fetch(
      `${base_url}/api/v1/response/responses?store=${shop_domain}&product=${product_name}&page=${page_number}`
    );
    return response.json();
  }

  async function sendNewImpression(store_domain, product_handle) {
    const response = await fetch(
      `https://jn5viick6a.execute-api.us-east-1.amazonaws.com/default/CTRServer`,
      {
        method: "POST",
        body: JSON.stringify({
          store_domain: store_domain,
          product_handle: product_handle,
          method: "impression",
        }),
      }
    );
    return response.json();
  }

  async function sendNewClick(store_domain, product_handle) {
    const response = await fetch(
      `https://jn5viick6a.execute-api.us-east-1.amazonaws.com/default/CTRServer`,
      {
        method: "POST",
        body: JSON.stringify({
          store_domain: store_domain,
          product_handle: product_handle,
          method: "click",
        }),
      }
    );
    return response.json();
  }

  async function sendNewVideoImpression(store_domain, product_handle) {
    console.log("video duration is 5 second");
    const response = await fetch(
      `https://jn5viick6a.execute-api.us-east-1.amazonaws.com/default/CTRServer`,
      {
        method: "POST",
        body: JSON.stringify({
          store_domain: store_domain,
          product_handle: product_handle,
          method: "video_impression",
        }),
      }
    );
    return response.json();
  }

  function updateStorate(result, isFromOnmount) {
    total = result.paginated.total_count;
    current = current + 1;
    total_page = result.paginated.last_page;
    current_page = result.paginated.current_page;
    responses = responses.concat(result.data);
    nextLoadingVideo("video-player-widget-0");
    if (isFromOnmount) {
      gif_src = `https://image.mux.com/${responses[current]["playback_id"]}/animated.gif`;
    }
  }

  onMount(async () => {
    firstHeight = window.innerHeight;
    const store_url = new URL(window.location.href);
    const script_url = new URL(document.currentScript.src);
    shop_domain = script_url.searchParams.get("shop");
    const is_product_page = store_url.pathname.includes("/products/");
    const is_thankyou_page = store_url.pathname.includes("thankyou");
    allVideo = document.getElementById("all-videos");

    const is_marketing = script_url.searchParams.get("is_marketing") == "1";
    // const is_marketing = true

    isMarketing = script_url.searchParams.get("is_marketing") == "1";
    // isMarketing = true

    if (is_thankyou_page) {
      const orderId = Shopify.checkout.order_id;
    }

    if (is_marketing) {
      static_playback_id = script_url.searchParams.get("playback_id");
      // static_playback_id = 'kZ7zEugq5wW9ckjshZFQA3EQjzO6jTiq5cM402MIpCMA'
      isMarkwtingTest = true;
    }

    // For Dev:
    shop_domain = "videorepute-pm.myshopify.com";
    /////////

    // For Server:
    // if (is_product_page || is_marketing) {
    /////////////

    // For Dev:
    if (true) {
      /////////////
      if (!is_marketing) {
        product_name = store_url.pathname.substring(
          store_url.pathname.indexOf("/products/") + 10
        );

        selectShowVideo = document.getElementById(`video-player-widget-0`);
        // For Dev:
        product_name = "connor-t-shirt";
        ///////////
        getResponses(1).then((result) => {
          widgetInfo = result.widget;
          resultData = result;
          if (result.widget.position === "bottom_left") {
            leftSize = "20px";
          } else {
            rightSize = "20px";
          }
          bgColor = result.widget.background_color;
          bgModalColor = result.widget.background_color;
          textColor = result.widget.text_color;
          textModalColor = result.widget.text_color_modal;

          if (result.data.length > 0) {
            show_widget = true;
            if (has_impression_sent == false) {
              has_impression_sent = true;
              sendNewImpression(shop_domain, product_name);
            }
            if (result.data.length > 1) {
              has_next = true;
              if (window.innerWidth <= 481 && has_next) {
                showSwipeText = true;
              }
            }
            updateStorate(result, true);
          }
          if (result.plan === "paid") {
            planType = false;
          }
          widgetData = result;
        });
      } else {
        is_opend = true;
        staticWidget = script_url.searchParams.get("static-widget");
        // staticWidget=true
        if (staticWidget) {
          if (script_url.searchParams.get("background_color")) {
            bgColor = script_url.searchParams.get("background_color");
          }
          if (script_url.searchParams.get("background_color")) {
            bgModalColor = script_url.searchParams.get("background_color");
          }
          if (script_url.searchParams.get("text_color")) {
            textColor = script_url.searchParams.get("text_color");
          }
          if (script_url.searchParams.get("desktop_static")) {
            desktopStatic = script_url.searchParams.get("desktop_static");
          }
          if (script_url.searchParams.get("close-widget-static")) {
            const staticStatus = script_url.searchParams.get(
              "close-widget-static"
            );
            if (staticStatus === "true") {
              is_opend = true;
            } else if (staticStatus === "false") {
              is_opend = false;
            }
          }
          if (script_url.searchParams.get("title")) {
            staticTitle = script_url.searchParams.get("title");
          }
          if (script_url.searchParams.get("position")) {
            if (script_url.searchParams.get("position") === "bottom_left") {
              leftSize = "20px";
            } else {
              rightSize = "20px";
            }
          }
        } else {
          leftSize = "20px";
        }
        show_widget = true;
        total = 1;
        total = 1;
        current = 0;
        leftSize = "20px";
        widgetInfo = {
          background_color: "ffffff",
          color_modal: "ffffff",
          id: 0,
          modal_background: "000000",
          modal_template: "",
          modal_title: "What our customers say about this product!",
          position: "",
          status: "",
          text_color: "000000",
          text_color_modal: "000000",
          title: "What our customers say about this product!",
        };
        showVideo(static_playback_id, 0);
      }
    }
    // video.muted = true
    if (video.play) {
      showPlayButton = true;
    } else if (video.paused) {
      showPlayButton = false;
    }
    element = document.getElementById("timerBar");

    // firstwidth = window.innerWidth
  });

  async function handleOpenVideoRepute(element) {
    // selectShowVideo = null
    // showPlayButton = true
    if (window.innerWidth > 482 && !staticWidget) {
      selectShowVideo = null;
      showPlayButton = true;
      has_previous = 0;
      if (
        document.querySelectorAll(".videoreput-widget-slider-video").length > 0
      ) {
        has_next = true;
      }
      var videos = document.getElementsByTagName("video");
      for (var ctr = 0; ctr < videos.length; ctr++) {
        videos[ctr].style.display = "none";
        videos[ctr].parentElement.style.display = "none";
      }
      var selectVideo = document.getElementById(`video-player-widget-0`);
      selectVideo.style.display = "block";
      selectVideo.parentElement.style.display = "block";
    }
    if (hasFirstScroll) {
      selectShowVideo = document.getElementById(`video-player-widget-0`);
      selectShowVideo.currentTime = 0;
    }
    if (!hasFirstScroll && window.innerWidth <= 481) {
      // allVideo.innerHTML.reloa
      selectShowVideo = document.getElementById(`video-player-widget-0`);
      selectShowVideo.currentTime = 0;
    }
    if (!hasFirstScroll && window.innerWidth > 482) {
      selectShowVideo = document.getElementById(`video-player-widget-0`);
      selectShowVideo.currentTime = 0;
    }

    if (selectShowVideo.hasAttribute("controls")) {
      selectShowVideo.removeAttribute("controls");
    }
    selectShowVideo.controls = false;
    selectShowVideo.removeAttribute("controls");

    current = 0;

    if (volumeFlag) {
      selectShowVideo.muted = false;
    } else if (!volumeFlag) {
      selectShowVideo.muted = true;
    }

    showPlayButton = false;
    if (is_opend === false) {
      showPlayButton = false;

      is_opend = true;
      if (has_click_sent == false) {
        has_click_sent = true;
        sendNewClick(shop_domain, product_name);
      }
    }

    let index = 4;
    selectShowVideo.addEventListener("timeupdate", function (ev) {
      if (parseInt(ev.target.currentTime / 60, 10) <= 9) {
        currentMinutes = `0${parseInt(ev.target.currentTime / 60, 10)}`;
      } else {
        currentMinutes = parseInt(ev.target.currentTime / 60, 10);
      }

      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) <= 9
      ) {
        currentSeconds = `0${Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        )}`;
      } else {
        currentSeconds = Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        );
      }

      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) === 1
      ) {
        index--;
        if (index === 0) {
          currentSeconds = "00";
        }
      }
    });
    if (selectShowVideo.paused) {
      showPlayButton = false;
    } else {
      showPlayButton = true;
    }

    if (showSwipeText) {
      selectShowVideo.pause();
    } else {
      selectShowVideo.play();
    }

    selectShowVideo.addEventListener("timeupdate", (event) => {
      marginLeft = rangeValue + "%";
      if (selectShowVideo !== null && selectShowVideo !== undefined) {
        let barLength =
          (selectShowVideo.currentTime / selectShowVideo.duration) * 100;
        rangeValue = barLength.toString();
        if (rangeValue === "100") {
          if (window.innerWidth > 482) {
            if (has_next) {
              handleNext();
            } else {
              if (singleVideo) {
                showPlayButton = true;
              } else {
                replay = true;
              }
            }
          } else {
            // handlePlayButton()
            selectShowVideo.pause();
            showPlayButton = true;
          }
        }
        background = `linear-gradient(to right, #0A59F7 0%, #0A59F7 ${rangeValue}%, rgb(255,255,255) ${rangeValue}%, rgb(255,255,255) 100%)`;
      }
    });

    // selectShowVideo.play()
    selectShowVideo.autoplay = true;

    showPlayButton = false;
    if (
      (is_opend === false && element.target.id !== "videorepute-close") ||
      is_opend === false
    ) {
      showPlayButton = false;

      is_opend = true;
      if (has_click_sent == false) {
        has_click_sent = true;
        sendNewClick(shop_domain, product_name);
      }
    }
  }

  function handleCloseVideoRepute() {
    if (is_opend === true) {
      is_opend = false;
    }
    hasFirstScroll = false;
    if (selectShowVideo) {
      selectShowVideo.currentTime = 0;
      selectShowVideo.pause();
    }
  }

  let prevData = 0;

  function handleNext() {
    selectShowVideo.pause();

    if (window.innerWidth > 482) {
      var videos = document.getElementsByTagName("video");
      for (var ctr = 0; ctr < videos.length; ctr++) {
        videos[ctr].style.display = "none";
        videos[ctr].parentElement.style.display = "none";
      }
      var selectedVideo = document.getElementById(
        `video-player-widget-${prevData + 1}`
      );
      selectedVideo.style.display = "block";
      selectedVideo.parentElement.style.display = "block";
    }
    video = document.getElementById(`video-player-widget-${prevData + 1}`);
    selectShowVideo = video;
    changeVideo = true;
    pricingCounter == 0;
    showPlayButton = false;
    nextLoadingVideo(`video-player-widget-${prevData + 1}`);
    let index = 4;
    selectShowVideo.addEventListener("timeupdate", function (ev) {
      if (parseInt(ev.target.currentTime / 60, 10) <= 9) {
        currentMinutes = `0${parseInt(ev.target.currentTime / 60, 10)}`;
      } else {
        currentMinutes = parseInt(ev.target.currentTime / 60, 10);
      }

      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) <= 9
      ) {
        currentSeconds = `0${Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        )}`;
      } else {
        currentSeconds = Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        );
      }
      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) === 1
      ) {
        index--;
        if (index === 0) {
          currentSeconds = "00";
        }
      }
    });

    if (selectShowVideo.paused) {
      selectShowVideo.play();
    } else {
      selectShowVideo.pause();
    }
    selectShowVideo.addEventListener("timeupdate", (event) => {
      marginLeft = rangeValue + "%";
      if (selectShowVideo !== null && selectShowVideo !== undefined) {
        let barLength =
          (selectShowVideo.currentTime / selectShowVideo.duration) * 100;
        rangeValue = barLength.toString();
        if (rangeValue === "100") {
          if (has_next) {
            handleNext();
          } else {
            if (singleVideo) {
              showPlayButton = true;
            } else {
              replay = true;
            }
          }
        }
        background = `linear-gradient(to right, #0A59F7 0%, #0A59F7 ${rangeValue}%, rgb(255,255,255) ${rangeValue}%, rgb(255,255,255) 100%)`;
      }
    });
    selectShowVideo.play();
    handlePlayButton();
  }

  function handlePrevious() {
    selectShowVideo.pause();
    // isLoaded=true
    replay = false;
    showPlayButton = false;
    changeVideo = true;

    if (has_previous) {
      if (window.innerWidth > 482) {
        var videos = document.getElementsByTagName("video");
        for (var ctr = 0; ctr < videos.length; ctr++) {
          videos[ctr].style.display = "none";
          videos[ctr].parentElement.style.display = "none";
        }
        var selectedVideo = document.getElementById(
          `video-player-widget-${current - 1}`
        );
        selectedVideo.style.display = "block";
        selectedVideo.parentElement.style.display = "block";
      }
      video = document.getElementById(`video-player-widget-${current - 1}`);
      selectShowVideo = video;
      current = current - 1;
      if (current == 0) {
        has_previous = false;
      }
      // showVideo(responses[current]['playback_id'])
      if (current + 1 < total) {
        has_next = true;
      }
    }
    let index = 4;
    selectShowVideo.addEventListener("timeupdate", function (ev) {
      if (parseInt(ev.target.currentTime / 60, 10) <= 9) {
        currentMinutes = `0${parseInt(ev.target.currentTime / 60, 10)}`;
      } else {
        currentMinutes = parseInt(ev.target.currentTime / 60, 10);
      }

      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) <= 9
      ) {
        currentSeconds = `0${Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        )}`;
      } else {
        currentSeconds = Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        );
      }

      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) === 1
      ) {
        index--;
        if (index === 0) {
          currentSeconds = "00";
        }
      }
    });

    if (selectShowVideo.paused) {
      selectShowVideo.play();
    } else {
      selectShowVideo.pause();
    }
    selectShowVideo.addEventListener("timeupdate", (event) => {
      marginLeft = rangeValue + "%";
      if (selectShowVideo !== null && selectShowVideo !== undefined) {
        let barLength =
          (selectShowVideo.currentTime / selectShowVideo.duration) * 100;
        rangeValue = barLength.toString();
        if (rangeValue === "100") {
          if (has_next) {
            handleNext();
          } else {
            if (singleVideo) {
              showPlayButton = true;
            } else {
              replay = true;
            }
          }
        }
        background = `linear-gradient(to right, #0A59F7 0%, #0A59F7 ${rangeValue}%, rgb(255,255,255) ${rangeValue}%, rgb(255,255,255) 100%)`;
      }
    });
    selectShowVideo.play();
    handlePlayButton();
  }

  function cssVariables(node, variables) {
    setCssVariables(node, variables);
    return {
      update(variables) {
        setCssVariables(node, variables);
      },
    };
  }
  function setCssVariables(node, variables) {
    for (const name in variables) {
      node.style.setProperty(`--${name}`, variables[name]);
    }
  }

  function handlePlayButton() {
    if (volumeFlag) {
      selectShowVideo.muted = false;
    } else if (!volumeFlag) {
      selectShowVideo.muted = true;
    }
    if (selectShowVideo.paused) {
      showPlayButton = false;
    } else {
      showPlayButton = true;
    }

    let index = 4;
    selectShowVideo.addEventListener("timeupdate", function (ev) {
      if (parseInt(ev.target.currentTime / 60, 10) <= 9) {
        currentMinutes = `0${parseInt(ev.target.currentTime / 60, 10)}`;
      } else {
        currentMinutes = parseInt(ev.target.currentTime / 60, 10);
      }

      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) <= 9
      ) {
        currentSeconds = `0${Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        )}`;
      } else {
        currentSeconds = Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        );
      }

      if (
        Math.ceil(
          ev.target.duration -
            (ev.target.currentTime - ev.target.currentTime / 60),
          10
        ) === 1
      ) {
        index--;
        if (index === 0) {
          currentSeconds = "00";
        }
      }
    });

    if (selectShowVideo.paused) {
      selectShowVideo.play();
    } else {
      selectShowVideo.pause();
    }
    selectShowVideo.addEventListener("timeupdate", (event) => {
      marginLeft = rangeValue + "%";
      if (selectShowVideo !== null && selectShowVideo !== undefined) {
        let barLength =
          (selectShowVideo.currentTime / selectShowVideo.duration) * 100;
        rangeValue = barLength.toString();
        if (rangeValue === "100") {
          currentMinutes = "00";
          currentSeconds = "00";
          if (window.innerWidth > 482) {
            if (has_next) {
              handleNext();
            } else {
              if (singleVideo) {
                showPlayButton = true;
              } else {
                showPlayButton = true;
                replay = true;
              }
            }
          } else {
            // allVideo.scroll(0, 100)
            selectShowVideo.pause();
            showPlayButton = true;
          }
        }
        background = `linear-gradient(to right, #0A59F7 0%, #0A59F7 ${rangeValue}%, rgb(255,255,255) ${rangeValue}%, rgb(255,255,255) 100%)`;
      }
    });
    selectShowVideo.play();
    selectShowVideo.playbackRate = speedOfVideo;
    showPlayButton = false;
  }

  function handleMute() {
    showTooltip = false;
    if (iconColor === "#fff") {
      iconColor = "#121212";
      selectShowVideo.muted = false;
      volumeFlag = true;
    } else {
      iconColor = "#fff";
      selectShowVideo.muted = true;
      volumeFlag = false;
    }
  }

  function handleReplay() {
    replay = false;
    for (let index = 0; index < widgetData.data.length; index++) {
      handlePrevious();
    }
    handlePlayButton();
    showPlayButton = false;
    firstIndex = true;
  }

  function handleSubtitleButton() {
    if (subtitleIconColor === "#fff") {
      subtitleIconColor = "#121212";
    } else {
      subtitleIconColor = "#fff";
    }
  }

  function handleSpeedVideo() {
    if (speedOfVideo === 1.5 || speedOfVideo === 2) {
      speedIconColor = "#121212";
    } else {
      speedIconColor = "#fff";
    }
    if (speedOfVideo == 1) {
      speedOfVideo = 1.5;
    } else if (speedOfVideo == 1.5) {
      speedOfVideo = 2;
    } else if (speedOfVideo === 2) {
      speedOfVideo = 1;
    }
    selectShowVideo.playbackRate = speedOfVideo;
  }

  function handleCloseText() {
    showText = false;
  }

  window.addEventListener("resize", function (event) {
    firstHeight = window.innerHeight;
  });

  function handleCloseSwipeText() {
    showSwipeText = false;
    showPlayButton = false;
    handlePlayButton();
    selectShowVideo.currentTime = 0;
  }

  function loadVideo() {
    // isLoaded=false
  }

  function scrollFunction(element) {
    selectShowVideo = document.getElementById(element.detail.element.id);
    let el = element.detail.element.id;
    nextLoadingVideo(el);
    currentScroll = el.substr(20);
    selectShowVideo.playbackRate = speedOfVideo;
    selectShowVideo.currentTime = 0;
    handlePlayButton();
    selectShowVideo.play();
    showPlayButton = false;
    // if (has_next) {
    //     if (current + 1 < responses.length) {
    //       current = current + 1
    //       showVideo(responses[current]['playback_id'], current)
    //       if(current + 1 < total){
    //       showVideo(responses[current + 1]['playback_id'], current + 1)
    //       }
    //       if(current + 2 < total){
    //       showVideo(responses[current + 2]['playback_id'], current + 2)
    //       }
    //     } else if (current + 1 == responses.length && current_page < last_page) {
    //       updateStorate(current_page + 1,false)
    //     } else {
    //       has_next = false
    //     }

    //     if (current + 1 == total) {
    //       has_next = false
    //     }

    //     if (current != 0) {
    //       has_previous = true
    //     }
    //   }
  }

  let isRunNexLoadingVideo = true;
  let lastVideo = false;
  function nextLoadingVideo(video_id) {
    let id = Number(video_id.slice(video_id.length - 1, video_id.length));
    if (prevData === 0 && isRunNexLoadingVideo) {
      isRunNexLoadingVideo = false;
      showVideo(responses[id].playback_id, id);
      showVideo(responses[id + 1].playback_id, id + 1);
    }
    if (id + 1 < responses.length) {
      if (prevData < id) {
        prevData = id;
        showVideo(responses[id + 1].playback_id, id + 1);
      }
    }
  }

  setInterval(() => {
    widgetResize = widgetResized(window.innerHeight);
    staticWidgetResize = staticResize(window.innerHeight);
  }, 100);
</script>

<main>
  <div
    id="videorepute-main"
    class="videoreput-widget {is_opend ? 'open' : 'close'}
    {show_widget ? '' : 'hide'}"
    style="transform:{staticWidget
      ? staticWidgetResize
      : widgetResize};transform-origin:{leftSize === '20px' &&
      'bottom left 0px'};transform-origin:{rightSize === '20px' &&
      'bottom right 0px'};bottom:{is_opend &&
      window.innerWidth <= 481 &&
      '0'};bottom:{!is_opend &&
      window.innerWidth <= 481 &&
      '35px'};border-radius:20px;z-index:99;left:{leftSize === '20px' &&
    window.innerWidth <= 481 &&
    !is_opend
      ? '-220px'
      : leftSize === '20px' &&
        window.innerWidth <= 481 &&
        is_opend &&
        !staticWidget
      ? '0'
      : leftSize};right:{rightSize};height:{staticWidget &&
      is_opend &&
      '400px'};height:{staticWidget &&
      !is_opend &&
      '64px'};width:{staticWidget &&
      is_opend &&
      '255px'};border-radius:{staticWidget &&
      is_opend &&
      '14px'};width:{staticWidget &&
      window.innerWidth <= 481 &&
      is_opend &&
      '100%'};z-index:{staticWidget && '1000'};bottom:{staticWidget &&
      window.innerWidth <= 481 &&
      !is_opend &&
      '49px'};left:{staticWidget &&
      window.innerWidth <= 481 &&
      !is_opend &&
      '-124px'};left:{staticWidget &&
      window.innerWidth <= 481 &&
      is_opend &&
      '0'};left:{staticWidget &&
      window.innerWidth > 482 &&
      !is_opend &&
      rightSize === '20px' &&
      ''};width:{staticWidget &&
      window.innerWidth > 482 &&
      !is_opend &&
      leftSize === '20px' &&
      '351px'};width:{staticWidget &&
      window.innerWidth > 482 &&
      !is_opend &&
      rightSize === '20px' &&
      '255px'};left:{staticWidget &&
      window.innerWidth > 482 &&
      is_opend &&
      rightSize === '20px' &&
      ''};left:{staticWidget &&
      desktopStatic &&
      window.innerWidth <= 481 &&
      !is_opend &&
      rightSize === '20px' &&
      '-28px'};left:{staticWidget &&
      window.innerWidth <= 481 &&
      !is_opend &&
      rightSize === '20px' &&
      '-28px'};left:{staticWidget &&
      window.innerWidth <= 481 &&
      !is_opend &&
      rightSize === '20px' &&
      '0'};"
  >
    <!-- close mode -->
    <CloseWidgetIndex
      {desktopStatic}
      {is_opend}
      {staticTitle}
      {staticWidget}
      on:handleOpenVideoRepute={handleOpenVideoRepute}
      on:handleCloseText={handleCloseText}
      {rightSize}
      {gif_src}
      {textColor}
      {bgColor}
      {planType}
      {leftSize}
      {widgetInfo}
      {showText}
    />

    <!-- open mode -->
    <OpenWidgetIndex
      {currentScroll}
      {style}
      on:scrollFunction={scrollFunction}
      on:handleReplay={handleReplay}
      {desktopStatic}
      {staticWidget}
      {replay}
      {selectShowVideo}
      {marginLeft}
      on:handleMute={handleMute}
      on:handleNext={handleNext}
      on:handleSpeedVideo={handleSpeedVideo}
      on:handleCloseSwipeText={handleCloseSwipeText}
      on:handleCloseVideoRepute={handleCloseVideoRepute}
      on:handlePlayButton={handlePlayButton}
      on:handlePrevious={handlePrevious}
      on:loadVideo={loadVideo}
      {iconColor}
      {current}
      {poster}
      {showTooltip}
      {timerWidth}
      {background}
      {currentMinutes}
      {currentSeconds}
      {speedOfVideo}
      {firstHeight}
      {showPlayButton}
      {rangeValue}
      {is_opend}
      {rightSize}
      {leftSize}
      {showSwipeText}
      {has_previous}
      {total}
      {has_next}
      {planType}
    />
  </div>
</main>

<style>
  /* main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    scroll-snap-type: y mandatory;
    overflow: scroll;
  width: 100%;
  scroll-snap-type: y mandatory;
  } */
  .main::-webkit-scrollbar {
    display: none;
  }

  .main {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  div.videoreput-widget.close {
    position: fixed;
    width: 351px;
    height: 88px;
    bottom: 20px;
  }

  div.videoreput-widget.open {
    position: fixed;
    width: 375px;
    height: 630px;
    bottom: 20px;
    box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    z-index: 10000;
  }
  .hide {
    display: none !important;
  }

  @media (max-width: 481px) {
    /* div.hoverBox l{
      bottom: 0;
    } */
    div.videoreput-widget.open {
      height: 100vh;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
    }
    div.videoreput-widget.close {
      bottom: 20px;
      border-radius: 10px;
    }
  }
</style>
