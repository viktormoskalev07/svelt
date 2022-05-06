const script_url = new URL(document.currentScript.src);
const shop_domain = script_url.searchParams.get('shop');

var head = document.getElementsByTagName('HEAD')[0]; 
  
// Create Global CSS
var global_css = document.createElement('link');

global_css.rel = 'stylesheet'; 
global_css.type = 'text/css';
global_css.href = 'https://backend-prod-videorepute.s3.amazonaws.com/widget/global.css'; 
head.appendChild(global_css); 

// Creating bundle CSS
var bundle_css = document.createElement('link');

bundle_css.rel = 'stylesheet'; 
bundle_css.type = 'text/css';
bundle_css.href = 'https://backend-prod-videorepute.s3.amazonaws.com/widget/bundle.css'; 
head.appendChild(bundle_css); 

// Creating HLS script
var hls_script = document.createElement('script');

hls_script.type = 'application/javascript';
hls_script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest'; 
head.appendChild(hls_script); 

// Creating MUX data script
var hls_script = document.createElement('script');

hls_script.type = 'application/javascript';
hls_script.src = 'https://src.litix.io/core/4/mux.js'; 
head.appendChild(hls_script); 


// Creating bundle JS
var bundle_js = document.createElement('script');

bundle_js.type = 'application/javascript';
bundle_js.src = `https://backend-prod-videorepute.s3.amazonaws.com/widget/bundle.js?shop=${shop_domain}`; 
head.appendChild(bundle_js); 