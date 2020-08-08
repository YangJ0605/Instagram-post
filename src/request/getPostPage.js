import axios from './http'

export function getData() {
  return axios.get('https://www.castlery.com/api/story_bloks/social-images')
}