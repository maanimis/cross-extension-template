import {
  RequestContextOptions,
  ResponseContextOptions,
} from "./interface.base";

export class ResponseMessageBase<T = unknown>
  implements ResponseContextOptions<T>
{
  public success: boolean;
  public msg?: string;
  public data?: T & { error?: string };

  constructor(opts: ResponseContextOptions<T> = { success: false }) {
    this.success = opts.success;
    this.msg = opts.msg;
    this.data = opts.data;
  }
}

export class RequestMessageBase<T = unknown>
  implements RequestContextOptions<T>
{
  public action: string;
  public data?: T & { error?: string };

  constructor(opts: RequestContextOptions<T>) {
    this.action = opts.action;
    this.data = opts.data;
  }
}
