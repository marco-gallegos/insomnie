import { IRequestFile } from "@/types"
import { loadJsonInput } from "@/utils/fileread"
import { IAppConfiguration } from "@/types";
import { EDebugLevel } from "@/types";
import { existsSync } from 'fs';
import { logger } from "./logger";


/**
 * Load environment file json.
 * @param fileName 
 */
export const loadEnv = (fileName:string, config:IAppConfiguration) => {
  // if fileName doesnt exist on fs just return null and log a bad try
  if (!fileName || !existsSync(fileName)) {
    logger('file doesnt exist');
    logger(fileName);
    return null;
  }
  const envData:IRequestFile = loadJsonInput(fileName, config) as IRequestFile;
  return envData;
}

export const getLogLevel = (debuglevel:string) => {
  switch (debuglevel) {
    case 'silent':
      return EDebugLevel.Silent;
    case 'info':
      return EDebugLevel.Info;
    case 'verbose':
      return EDebugLevel.Verbose;
    case 'debug':
      return EDebugLevel.Debug;
  }
};

export function replaceKeysWithJsonValues(jsonData: any, config:IAppConfiguration): any {
  const keysToReplace: string[] = [];
  const valuesToReplace: any[] = [];
  // Find keys with the specified pattern and their corresponding values
  function findKeys(obj: any) {
      for (const key in obj) {
          if (typeof obj[key] === 'string' && obj[key].match(/{{(.*?)}}/)) {
              keysToReplace.push(key);
              valuesToReplace.push(obj[key]);
          } else if (typeof obj[key] === 'object') {
              findKeys(obj[key]);
          }
      }
  }

  findKeys(jsonData);
  logger('keysToReplace', EDebugLevel.Verbose, config.currentLogLevel)
  logger(JSON.stringify(keysToReplace), EDebugLevel.Verbose, config.currentLogLevel)
  logger('valuesToReplace', EDebugLevel.Verbose, config.currentLogLevel)
  logger(JSON.stringify(valuesToReplace), EDebugLevel.Verbose, config.currentLogLevel)

  // Replace keys with their corresponding values in the JSON
  function replaceValues(obj: any) {
      for (const key in obj) {
          if (keysToReplace.includes(key)) {
              const index = keysToReplace.indexOf(key);
              const value = valuesToReplace[index];
              const matches = value.match(/{{(.*?)}}/g);

              if (matches) {
                  let replacedValue = value;
                  for (const match of matches) {
                      const keyToReplace = match.substring(2, match.length - 2);
                      if (obj.hasOwnProperty(keyToReplace)) {
                          replacedValue = replacedValue.replace(match, obj[keyToReplace]);
                      } else {
                          logger(`Key '${keyToReplace}' not found in JSON.`, EDebugLevel.Verbose, EDebugLevel.Verbose);
                      }
                  }
                  obj[key] = replacedValue;
              }
          } else if (typeof obj[key] === 'object') {
              replaceValues(obj[key]);
          }
      }
  }

  replaceValues(jsonData);

  return jsonData;
}

export function replaceEnv(templateString: string, data: any): string {
  // Find all template placeholders using a regular expression
  const placeholders = templateString.match(/{{(.*?)}}/g);

  // If no placeholders are found, return the original string
  if (!placeholders) {
    return templateString;
  }

  // Replace each placeholder with the corresponding value from the data object
  let replacedString = templateString;
  for (const placeholder of placeholders) {
    const key = placeholder.substring(2, placeholder.length - 2); // Extract the key from the placeholder
    if (data.hasOwnProperty(key)) {
      replacedString = replacedString.replace(placeholder, data[key]);
    } else {
      // Handle missing keys (e.g., log a warning or throw an error)
      console.warn(`Key '${key}' not found in data object.`);
    }
  }

  return replacedString;
}
