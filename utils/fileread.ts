import { existsSync, readFileSync } from 'fs';
import { IAppConfiguration, IRequestFile } from "@/types";
import { logger } from '@/utils/logger';
import { EDebugLevel } from '@/types';

/**
 * Determines if a string is a JSON string or a file with a .json extension.
 * If it's a JSON string, it loads it into an IRequestFile variable.
 * If it's a file, it validates if it exists and if so, loads the content as in the first step.
 * It also validates that the file content doesn't contain any JavaScript injection.
 * @param input - The input string or file path.
 * @returns An IRequestFile object if the input is valid JSON, otherwise null.
 */
export function loadJsonInput(input: string, config: IAppConfiguration): any | null {
    let requestFile: any | null = null; // how to represent a json
  
    // Check if it's a JSON string
    try {
      requestFile = JSON.parse(input) as IRequestFile;
      // lets use it as context 
      logger('parsed as string', EDebugLevel.Verbose, config.currentLogLevel)
    } catch (error) {
        // If it's not a JSON string, check if it's a file
        if (input.endsWith('.json') && existsSync(input)) {
            logger(`parsing as a file: ${input}`)
            try {
                const fileContent = readFileSync(input, 'utf-8');
                // console.debug(fileContent)
                // Validate for JavaScript injection (basic check)
                if (fileContent.includes('<script>') || fileContent.includes('eval(')) {
                    console.error('Potential JavaScript injection detected in file:', input);
                    return null;
                }
        
                requestFile = JSON.parse(fileContent) as IRequestFile;
                // console.debug(requestFile)
            } catch (error) {
                console.error('Error loading or parsing JSON file:', input, error);
            }
        } else {
            console.error('Invalid input: Not a JSON string or a valid JSON file.');
        }
    }
  
    return requestFile;
  }