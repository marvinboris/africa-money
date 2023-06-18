declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

if (typeof window !== "undefined") window.$ = window.jQuery = require("jquery");

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default OwlCarousel;
