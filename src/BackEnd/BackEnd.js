import axios from 'axios'

const Order = axios.create(
    {
        baseURL:'https://react-burger-app-98bc4-default-rtdb.firebaseio.com/',

    }
)

export default Order