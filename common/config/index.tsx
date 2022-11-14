/* eslint-disable import/no-anonymous-default-export */

const dev = process.env.NODE_ENV !== 'production'

export default {
  server: dev ? 'http://localhost:3000' : 'https://yoururl.com',
  exampleApiUrl: 'https://jsonplaceholder.typicode.com',
}