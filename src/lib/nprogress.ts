import "nprogress/nprogress.css";

import NProgress from "nprogress";

export const configureNProgress = () => {
  NProgress.configure({ showSpinner: false });

  window.addEventListener("load", () => NProgress.done());
  window.addEventListener("beforeunload", () => NProgress.start());
};
