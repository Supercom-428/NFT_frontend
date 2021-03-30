
const PROXY_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:8000'
  : 'https://leda.gojupiter.tech/'

// const JUPITER_URL = 'https://nodes.gojupiter.tech/'
const JUPITER_URL = 'https://jpr4.gojupiter.tech/'

export {
  PROXY_URL,
  JUPITER_URL,
}