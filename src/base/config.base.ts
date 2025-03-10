import { IStorage } from "./interface.base";

export abstract class ConfigBase implements IStorage {
  abstract readonly isEnable: boolean;
}
