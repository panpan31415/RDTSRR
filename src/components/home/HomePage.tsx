import * as React from "react";
import Card from "./Card";
const HomePage: React.SFC <any>= (props) => {
    // return (

    //     <div className="row">
    //         <Card total={props.Users.length} type={`Users`}/> 
    //         <Card total={props.Posts.length} type={`Posts`}/> 
    //         <Card total={props.Comments.length} type={`Comments`}/> 
    //         <Card total={props.Albums.length} type={`Albums`} /> 
    //     </div>

    // )
    return (

        <div className="row">
            <Card total={0} type={`Users`}/> 
            <Card total={0} type={`Posts`}/> 
            <Card total={0} type={`Comments`}/> 
            <Card total={0} type={`Albums`} /> 
        </div>

    )
}

export default HomePage;