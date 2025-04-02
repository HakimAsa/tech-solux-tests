const HTTP_METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
} as const //`as const` ensures values are strictly typed

// Extracts the keys of Colors as a TypeScript type
export type httpMethods = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD]

export default HTTP_METHOD
