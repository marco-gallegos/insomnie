/**
 * interface to represent app configuration
 * @typedef {Object} AppConfiguration
 * @property {EDebugLevel} currentLogLevel - current log level.
 */
export interface IAppConfiguration {
  currentLogLevel: EDebugLevel;
}

/**
 * interface to represent cli options
 * @typedef {Object} CliOptions
 * @property {boolean} checkHealth - enable check health mode to make a health check on given urls.
 * @property {number} tries - Max try number (on chk is how many times is executed).
 * @property {string} url - URL to hit, full parth or base url to work with  -up - url path
 * @property {string} urlpath - a single ppath or a csv list of url paths to hit (path is a url complement <request_url> = <url> + <path>)
 * @property {string} headers - Headers in JSON format
 * @property {string} body - Request body
 * @property {'get' | 'post' | 'put' | 'delete' | 'patch' | 'gql'} type - request type GET, POST, ...
 * @property {string} request - request to execute
 */
export interface ICliOptions {
  checkHealth: boolean;
  tries: number;
  url: string;
  urlpath: string;
  headers: string;  // Consider using Record<string, string> for headers
  body: string;
  type: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'gql';
  request: string;
  save: boolean;
  delete: string;
  view: string;
  list: boolean;
  debuglevel: 'silent' | 'info' | 'verbose' | 'debug';
  initenv: boolean;
  env: string;
  envfile: string;
}

export interface IRequestFile {
  checkHealth: boolean;
  tries: number;
  url: string;
  urlpath: string;
  headers: string;  // Consider using Record<string, string> for headers
  body: string;
  type: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'gql';
  debuglevel: 'silent' | 'info' | 'verbose' | 'debug';
}

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

export enum EDebugLevel {
  Silent = 0,
  Info = 1,
  Verbose = 2,
  Debug = 3,
}