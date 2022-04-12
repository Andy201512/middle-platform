import { getAction } from "./request"

const testApi = (params: Object) => { return getAction('/test', params) }

export default testApi 