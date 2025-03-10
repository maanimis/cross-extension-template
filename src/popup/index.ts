console.log("Popup loaded!");

import { Actions, Buttons } from "../base/enum.base";
import { RequestContextOptions } from "../base/interface.base";

async function getActiveTab() {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  return tab;
}

function setupButton(action: string, callback: () => void) {
  document.getElementById(action)?.addEventListener("click", async () => {
    try {
      await callback();
      window.close();
    } catch (error) {
      showError("[ERROR] An unexpected error occurred.", error);
    }
  });
}

async function sendMessageToTab(tabId: number, data: RequestContextOptions) {
  try {
    await browser.tabs.sendMessage<RequestContextOptions>(tabId, data);
    console.log(`Message sent to content script`);
  } catch (error) {
    showError("Failed to send message", error);
  }
}

function showError(message: string, error?: unknown) {
  alert(message);
  console.error(message, error ?? "");
}

async function main() {
  console.log("Ready!");

  const tab = await getActiveTab();
  const tabID = tab?.id;
  if (!tabID) {
    return showError("[ERROR] Can't find tabID!");
  }

  setupButton(Buttons.TITLE, () =>
    sendMessageToTab(tabID, { action: Actions.START })
  );
}

document.addEventListener("DOMContentLoaded", main);
