import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Cart from './components/Cart'
import Dash from './components/Dash'
import Items from './components/Items'

export default(
    <Switch>
        <Route exact path='/' component={Dash}/>
        <Route exact path='/auth' component={Auth}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/items' component={Items}/>
    </Switch>
)