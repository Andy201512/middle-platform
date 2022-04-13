import { getAction } from "./request"

const testApi = (params: Object) => { return getAction('/test', params) }
const getUserApi = (params: Object) => { return getAction('/user', params) }

export { testApi, getUserApi }