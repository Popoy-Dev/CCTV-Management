import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'antd/dist/antd.css'; 

import Header from './views/layout/Header'
import Dashboard from './views/pages/Dashboard';
import UsersGroups from './views/pages/UsersGroups';
import Assets from './views/pages/Assets';
import ManageAssets from './views/pages/ManageAssets';
import WorkOrder from './views/pages/WorkOrder';
import ScheduleWorkOrder from './views/pages/ScheduleWorkOrder';
function App() {
  return (
   <>
 <div id="wrapper">
  <Router>
    
<Header>


</Header>
<Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/usersgroups">
            <UsersGroups />
          </Route>
          <Route path="/assets">
            <Assets />
          </Route>
          <Route path="/manage-assets">
            <ManageAssets />
          </Route>
          <Route path="/work-orders">
            <WorkOrder />
          </Route>

          <Route path="/schedule-work-order">
            <ScheduleWorkOrder />
          </Route>

          
        </Switch>
    </Router>
    
    </div>   
   </>   
  );
}

export default App;
