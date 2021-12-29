import Navbar from "./Navbar"
import { Switch,Route } from "react-router-dom"
import Home from '../vies/Home'
import Search from '../vies/Search'
import Collection from '../vies/Collection'

const Content = () => {
    return (
        <div className="flex-auto overflow-auto">
            <Navbar />
           <div className="px-8 pt-4">
           <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/search'  component={Search} />
                <Route path='/collection'  component={Collection} />
            </Switch>
           </div>
          
        </div>
    )
}

export default Content
