import app from './app'
import * as dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('App is listening on port 3000!')
})
