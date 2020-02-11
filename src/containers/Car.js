import { connect } from 'react-redux'
import Car from '../components/Car'
import { addCar } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)
