import {FaSpinner} from "react-icons/fa"
import "./Loader.css"

const Loader = () => {
  return (
    <div>
        <FaSpinner className="loader" style={{color:"#000000"}}/>
    </div>
  )
}

export default Loader