import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home/Home.component'
import StudentList from './components/StudentList/StudentList.component';
import Form from './components/Form/Form.component';
import Monsters from './components/Monsters/Monsters.component';

import './App.css';

function App(){
  return(
    <Router>
      <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/studentList" component={StudentList}/>
          <Route exact path="/form" component={Form} />
          <Route exact parth='/monsters' component={Monsters}/>
        </Switch>
    </div>
    </Router>
    
  );
}



export default App;
