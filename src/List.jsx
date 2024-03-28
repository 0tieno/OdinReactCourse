import PropTypes from 'prop-types'
const List = (props) => {

    const listItems = props.items.map((item => {
        return <li key={item}>{item}</li>
    }))
    
  return (
    <>
        <h1>List items</h1>
        <ul>
            {listItems}
        </ul>
    </>
  );
    
}

List.propTypes = {
    items: PropTypes.array.isRequired
};

export default List