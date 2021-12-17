import fetch from 'dva/fetch'

function parseJSON(response: Response) {
  return response.json()
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  // eslint-disable-next-line no-throw-literal
  throw {
    ...new Error(response.statusText),
    response: response,
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url: string, options: RequestInit): Promise<Response> {
  // @ts-ignore
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data: JSON) => ({ data }))
    .catch((err: Error) => ({ err }));
}

export function arrayBufferRequest (url: string, options?: RequestInit) {
  // @ts-ignore
  return fetch(url, {
    method: 'get',
    responseType: 'arrayBuffer',
    ...options,
  })
    .then((res: Response) => res.arrayBuffer())
    .catch((err: Error) => ({ err }))
}
