import type { IController } from '@/controller';

import type { IRequestData } from '@/types';

const requestController: IController = {
  call: async (requestData: IRequestData) => {
    console.debug("Calling API");

    let response: object | null = {
      data: null,
    };
    // let error: object | null = null;

    let requestConfig: any = {
      method: requestData.type,
      // headers: requestData.headers,
      // body: requestData.body
    }

    if (requestData.headers) {
      requestConfig.headers = requestData.headers;
    }

    if (requestData.body) {
      requestConfig.body = JSON.stringify(requestData.body);
    }

    // console.debug(requestConfig)

    response = fetch(requestData.url, requestConfig)

    return response;
  },
  save: () => {
    return "save"
  },
  delete: () => {
    return "delete"
  }
}

export default requestController; 
