import Layout from '../components/Layout'
import Homepage from '../components'
import { store } from "../redux/store"
import { Provider } from 'react-redux'

const HomePage = () => {

  return(
    <Provider store={store}>
      <Layout>
        <Homepage />
      </Layout>
    </Provider>
  )
}

export default HomePage
