
/**
 * interface to represent http request data
 */
export interface IRequestData {
  url: string;
  type: string;
  headers?: { [key: string]: string };
  body?: any;
}


