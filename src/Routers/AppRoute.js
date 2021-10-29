import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../Components/HomePage/Home"
import Detail from "../Components/PageDetail/Detail"

function AppRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:id' component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute
