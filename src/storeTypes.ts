
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

export interface IAppStates{
    Albums:AlbumArray,
    Comments: CommentArray,
    Messages: MessageArray,
    Posts: PostArray,
    Users: UserArray
}
export interface IAppReducers{
    LoadAlbumHandler: ()=>{Albums:AlbumArray},
    LoadCommentHandler: ()=>{Comments: CommentArray},
    LoadPostDataHandler: ()=>{Posts: PostArray},
    LoadUserDataHandler: ()=>{Users: UserArray},
    MessageHandller:()=>{Messages: MessageArray}
}

export interface IDespatch{
    loadAbbumsData: ()=>void,
    loadCommentsData:  ()=>void,
    loadPostsData:  ()=>void,
    loadUsersData:  ()=>void
}

export interface IStoreProps extends IAppStates,IAppReducers{};