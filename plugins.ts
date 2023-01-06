import { IApi } from "umi"
export default (api: IApi) => {
  api.modifyConfig((config) => {
    // config.runtimePublicPath = true
    config.runtimePublicPath = true

    return config;
  })
}
