import List from './List'
import PropTypes from 'prop-types'


const App = () => {

  const items = ['item 1', 'item 2', 'item 3']

  return (
    <div>
      <List items= {items}/>
    </div>
  )
}

App.propTypes = {
  items: PropTypes.array.isRequired
}

export default App