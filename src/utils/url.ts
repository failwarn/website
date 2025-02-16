export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_)  {
    return false;
  }
}

export const isValidHTTPMethod = (method: string): boolean => {
  return ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'].includes(method);
}
