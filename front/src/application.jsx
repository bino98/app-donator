import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RedBox from 'redbox-react'
import { buildStore } from 'utils/build_store'
import RootContainer from 'routers/root'

const store = buildStore()
const root = document.getElementById('app')

try {
  render(
    (<Provider store={store}>
      <RootContainer />
    </Provider>),
    root,
  )
} catch (e) {
  render(<RedBox error={e} />, root)
}