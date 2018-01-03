import axios from 'axios'

const GITHUB_HOST = 'https://api.github.com'

const toGetQuery = (opts) => {
  return Object.keys(opts).reduce((query, key) => {
    const newquery = query
    query += `&${key}=${opts[key]}`
    return query
  }, '')
}

export const searchRepository = async (opts) => {
  console.log(toGetQuery(opts))
  const res = await axios.get(GITHUB_HOST + `/search/repositories?${toGetQuery(opts)}`)
  if (res.status == 200) { return res.data }
  return []
}

export default {
  searchRepository,
}