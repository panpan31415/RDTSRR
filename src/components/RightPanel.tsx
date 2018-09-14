import * as React from "react";
import { Route } from "react-router-dom";
import AlbumsPage from "./Albums/AlbumsPage"
import BreadCrumb from "./BreadCrumb";
import CommentsPage from "./Comments/CommentsPage";
import Header from "./Header";
import HomePage from "./home/HomePage";
import Message from "./Message";
import Postpage from "./Post/Postpage";
import UserPage from "./User/UserPage";
// import { relative } from "path";





const RightPanel: React.SFC = () => {
    return (
        <div className="right-panel ">
            <Header />
            <BreadCrumb />
            <div className="page container-fluid">
                <Message/>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/users" component={UserPage} />
                <Route path="/posts" component={Postpage} />
                <Route path="/comments" component={CommentsPage} />
                <Route path="/albums" component={AlbumsPage} />
            </div>
        </div>
    );
}

export default RightPanel;