import { Modal } from "../shared";

export abstract class TargetBase {
  abstract BaseUrl: string;

  abstract start(modal: Modal): Promise<void>;
  abstract isValidUrl(url: string): boolean;
}
