import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const ManagerDropdown = () => {
    const { user_id, first_name, last_name, role } = sessionStorage
    const navigate = useNavigate()

    const logoutUser = () => {
      // remove the logged users details from session storage
      sessionStorage.removeItem('user_id')
      sessionStorage.removeItem('first_name')
      sessionStorage.removeItem('last_name')
      sessionStorage.removeItem('role')

     
      // navigate to sign in component
      navigate('/signin')
    }

    return (
        <div>
         
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Welcome {first_name}
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
              <Link to="/updateprofile" className="dropdown-item">Update Profile</Link>
              </li>
              <li>
              <Link to="/updatepassword" className="dropdown-item">Update Password </Link>
              </li>
              <li>
                <button onClick={logoutUser} className="dropdown-item">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )
}



export default ManagerDropdown