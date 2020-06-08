import express from  'express'
import { config } from 'dotenv'
import Routes from './routes'

config()
const app = express()
app.use(Routes)
const port = process.env.PORT



app.listen(port, () => console.log('app started at port', port))
export default app
