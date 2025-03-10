console.log("Content script loaded!");

import { Actions } from "../base/enum.base";
import { downloadFile } from "../shared";

async function main() {
  console.log("loading...");

  const title = document.title || "";
  const blob = new Blob([title], { type: "text/plain" });
  const fname = location.hostname;

  downloadFile(fname, blob);
}

browser.runtime.onMessage.addListener(async (message: any) => {
  if (message.action === Actions.START) {
    console.log("loading...");
    main().catch((err) => {
      const msg = (err as Error).message || "Unknow Error!!";
      console.error(msg);
    });
  }
});
