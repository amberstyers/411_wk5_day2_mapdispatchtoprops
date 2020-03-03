import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar, addCar } from '../redux/action'
// I deleted the one above to see if just removeCar would make this sheeeeet work
// import { removeCar } from '../redux/action'
// import { removeCar } action here

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        removeCar: (index) => dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)