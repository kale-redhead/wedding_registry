import {Link} from 'react-router-dom'
import Auth from './Auth'
import './Header.css'

const Header = () => {
  return(
    <header>
      <div className='Header'>
        <Link to='/' className='title'>Trevor and Kaley's Registry</Link>
        <Auth/>
        {/* <Link to='/items'>Registry</Link> */}
      </div>
    </header>
  )
}

export default Header