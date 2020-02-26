import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './home/Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Login from './login/login';
import register from './register/register';
class App extends React.Component {
    render(){
        return(
            <Router >
                <div style={{margin:'10px'}}>
                    <Route path="/home" component={Home} />
                    <Route path="/home/Page1" component={Page1} />
                    <Route path="/home/Page2" component={Page2} />
                    <Route path="/home/Page3" component={Page3} />
                    <Route path="/home/Page4" component={Page4} />
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={register} />
                </div>
            </Router>

        )
    }
}
export default App;

// const App = () => (
//     <div>This is App</div>
// );
//
// export default App;