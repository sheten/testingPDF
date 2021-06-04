import CMSHome from "../components/CMS"
import { store } from "../redux/store"
import { Provider } from 'react-redux'

const CMS = () => {

  return (
    <Provider store={store}>
      <CMSHome />
    </Provider>
  )
}

export default CMS
