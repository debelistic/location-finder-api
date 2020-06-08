import express from 'express'

const Router = express.Router()


Router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome location finder API V1'
  })
})


export default Router
