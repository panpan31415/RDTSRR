// import * as actions from './Actions';

import * as React from 'react';

// import * as Redux from 'redux';

import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

import { BrowserRouter } from 'react-router-dom';

// import { connect } from 'react-redux';
// import {
//   IAppReducers,
//   IAppStates,
//   IDespatch,
//   IStoreProps
//   } from './storeTypes';






// const mapStateToProps = (state: IAppReducers): IAppStates => {

//   return {
//     Albums: state.LoadAlbumHandler().Albums,
//     Comments: state.LoadCommentHandler().Comments,
//     Messages: state.MessageHandller().Messages,
//     Posts: state.LoadPostDataHandler().Posts,
//     Users: state.LoadUserDataHandler().Users
//   }
// };
// const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): IDespatch => {
//   return {
//     loadAbbumsData: dispatch(actions.loadUsersData),
//     loadCommentsData: dispatch(actions.loadCommentsData),
//     loadPostsData: dispatch(actions.loadPostsData),
//     loadUsersData: dispatch(actions.loadUsersData)
//   };
// }


// class App extends React.Component<any,IStoreProps> {

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // public componentDidMount() {
  //   this.props.LoadUserDataHandler();
  //   this.props.LoadPostDataHandler();
  //   this.props.LoadCommentHandler();
  //   this.props.LoadAlbumHandler();
  // }
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
export default App;
// export default connect<IAppStates,{}>(mapStateToProps, mapDispatchToProps)(App);
