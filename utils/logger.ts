import { EDebugLevel } from '@/types';


export const logger = (message: any, level: EDebugLevel = EDebugLevel.Info, currentLevel: EDebugLevel = EDebugLevel.Info, context?: Record<string, any>): void => {
  if (level <= currentLevel) {
    const error = new Error();
    const [_, file, line] = error.stack!.split('\n')[2].split(/[:\s]+/);
    let formattedMessage = `[${file}:${line}] ${message}`;
    
    // Imprimir contexto si se proporciona y el nivel es verbose o superior
    if (context && level >= EDebugLevel.Verbose) {
      const tableData = Object.entries(context).map(([key, value]) => [key, value]);
      console.table(tableData);
    }

    if (level === EDebugLevel.Debug) {
      console.debug(formattedMessage);
    } else if (level === EDebugLevel.Verbose) {
      console.info(formattedMessage);
    } else if (level === EDebugLevel.Info) {
      console.info(formattedMessage);
    } else if (level === EDebugLevel.Silent) {
      // Do nothing for silent level
    }
  }
};