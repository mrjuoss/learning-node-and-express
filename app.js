import express from 'express'
import morgan from 'morgan'
import StudentRoute from './routes/StudentRoute.js'

const server = express()
const port = 3001

const buildUrl = (version, path) => `/api/${version}/${path}`
const STUDENTS_BASE_URL = buildUrl('v1', 'students');

server.use(morgan('tiny'));
server.use(STUDENTS_BASE_URL, StudentRoute);

server.listen(port, () => {
  console.log(`Server started on port : ${port}`)
})
