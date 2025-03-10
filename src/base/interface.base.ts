export interface ResponseContextOptions<T = unknown> {
  success: boolean;
  msg?: string;
  data?: T & { error?: string };
}

export interface RequestContextOptions<T = unknown> {
  action: string;
  data?: T & { error?: string };
}

export interface IStorage {
  isEnable: boolean;
}
