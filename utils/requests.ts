/**
 * Funtion to generate full urls from -u and -p.
 * 
 * @param baseUrl 
 * @param urlPaths 
 * @returns 
 */
export const generateFullUrls = (baseUrl: string, urlPaths: string): string[] => {
  if (!urlPaths) {
    return [baseUrl];
  }
  const paths = urlPaths.split(',').map(path => path.trim());
  return paths.map(path => `${baseUrl}${path}`);
};

export const parseHeaders = (headers: Headers) => {
  let parsedHeaders:any = {
    isJson: false,
    isXml: false,
    isHtml: false,
    isText: false,
    isBinary: false,
  };
  const contentType = headers.get('content-type');
  parsedHeaders.isJson = contentType?.includes('json');
  parsedHeaders.isXml = contentType?.includes('xml');
  parsedHeaders.isHtml = contentType?.includes('html');
  parsedHeaders.isText = contentType?.includes('text');
  return parsedHeaders;
};
