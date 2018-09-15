
export type UserArray = Array<{}>;
export type PostArray = Array<{}>;
export type CommentArray = Array<{}>;
export type AlbumArray = Array<{}>;

export interface IMessage {
    type: string,
    text: string
}
export type MessageArray =IMessage[];

export interface IStoreAction{
    type:string,
    payload:any
};

export interface IAppStates {
    Albums:AlbumArray,
    Comments: CommentArray,
    Messages: MessageArray,
    Posts: PostArray,
    Users: UserArray
}
export interface IAppReducers{
    Albums: ()=>AlbumArray,
    Comments: ()=>CommentArray,
    Posts: ()=>PostArray,
    Users: ()=>UserArray,
    Messages:()=>MessageArray
}

export interface IActions{
    loadAbbumsData: ()=>void,
    loadCommentsData:  ()=>void,
    loadPostsData:  ()=>void,
    loadUsersData:  ()=>void
}

export interface IStoreProps extends IActions,IAppReducers {};