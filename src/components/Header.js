// import {Link} from 'react-router-dom'
import Auth from './Auth'
import './Header.css'

const Header = () => {
  return(
    <header>
      <div className='Header'>
        <div className='title'>Trevor and Kaley's Registry</div>
        <Auth/>
        {/* <Link to='/'>Home Page</Link>
        <Link to='/items'>Registry</Link> */}
      </div>
    </header>
  )
}

export default Header