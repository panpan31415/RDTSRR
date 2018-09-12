import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="container-fluid App">
          <LeftPanel />
          <RightPanel />
        </div>
      </Router>
    );
  }
}

export default App;
