import { PublicApi } from '../api'

const performRequests = async () => {
  const config = {
    baseURL: 'https://liebherr-nest.onrender.com',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  try {
    const publicApiClient = new PublicApi(config)
    const promises = await Promise.all([
      publicApiClient.getMachinery(''),
      publicApiClient.getConstructions(),
      publicApiClient.getArticles(),
    ])
    console.log('success', promises)
  } catch (error) {
    console.log('error while warming up server', error)
  }
}

performRequests()
