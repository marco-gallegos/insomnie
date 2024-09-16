
/**
 * interface to represent http request data
 */
export interface IRequestData {
  /**
   * url to hit (full path)
   */
  url: string;
  type: string;
  headers?: { [key: string]: string };
  body?: any;
}


