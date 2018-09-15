 import * as actions from './Actions';

import * as React from 'react';
// import * as Redux from 'redux';

import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {
// IActions,
 // IAppReducers,
 // IAppStates,
  IStoreProps
  } from './storeTypes';






const mapStateToProps = (state:any): any => {

  return {
    Albums: state.Albums,
    Comments: state.Comments,
    Messages: state.Messages,
    Posts: state.Posts,
    Users: state.Users
  }
};
const mapDispatchToProps = (dispatch: any): any => {
  return {
    loadAbbumsData: ()=>dispatch(actions.loadUsersData()),
    loadCommentsData:  ()=>dispatch(actions.loadCommentsData()),
    loadPostsData:  ()=>dispatch(actions.loadPostsData()),
    loadUsersData:  ()=>dispatch(actions.loadUsersData())
  };
}


class App extends React.Component<any,any> {

  constructor(props:IStoreProps) {
    super(props);
  }
  public componentDidMount() {
    this.props.loadAbbumsData();
    this.props.loadCommentsData();
    this.props.loadPostsData();
    this.props.loadUsersData();
  }
  public render() {
    return (
      <BrowserRouter>
        <div className="container-fluid App">
          <LeftPanel />
          <RightPanel />
        </div>
      </BrowserRouter>
    );
  }
}
export default  connect<any>(mapStateToProps, mapDispatchToProps)(App);

