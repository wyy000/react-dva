import createLoading from 'dva-loading'
import ReactDom from 'react-dom'
import dva from 'dva'

import './index.css'

// 1. Initialize
const app = dva()

// 2. Plugins
app.use(createLoading())

// 3. Model
app.model(require('./models/global').default)

try {
  window.require = function(id) {
    switch (id) {
      case 'react-dom':
        return ReactDom
      default:
        break
    }
  }
} catch (err) {
  console.log(err)
}

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
