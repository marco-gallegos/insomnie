import packagejson from '@/package.json'

export const getVersion = (checkUpdates: boolean = false): string => {

  if (checkUpdates === true) {
    // TODO: implement this
  }

  return packagejson.version
}


