import Inferno from 'inferno'
import { Route } from 'inferno-router'
import Layout from './components/layout/Layout'
import NotFound from './components/layout/404'
import Home from './pages/Home'
//import DemoInferno from './components/demo/Demo.Inferno'
//import DemoReact from './components/Demo/Demo.React'
import Docs from './pages/Docs'
import About from './pages/About'
import Contribute from './pages/Contribute'

function ReactDemo() {
    return <div>
        <script src="http://localhost:8082/build/react.js" async="async"/>
        <iframe src=""/>
    </div>
}

/**
 * Routes are defined here.
 */
//<Route path="/demo" component={ DemoInferno }/>
export default (
    <Route component={ Layout }>
        <Route path="/" component={ Home }/>
        <Route path="/demo/react" component={ ReactDemo }/>
        <Route path="/docs/:path*" component={ Docs }/>
        <Route path="/about" component={ About }/>
        <Route path="/docs" component={ Docs }/>
        <Route path="/contribute" component={ Contribute }/>
        <Route path="*" component={ NotFound }/>
    </Route>
)
