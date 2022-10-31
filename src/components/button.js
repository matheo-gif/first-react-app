import PropTypes from 'prop-types'

const button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color}} className='btn'>{text} </button>
    )
}
button.default = {
    color:'dark'
}
button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default button