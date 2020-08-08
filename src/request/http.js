import axios from 'axios'

axios.interceptors.request.use(config => config)

axios.interceptors.response.use(response => {
  // console.log(response)
  return response.data
})

export default axios