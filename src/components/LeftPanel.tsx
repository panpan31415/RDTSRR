import * as React from "react";
import { Link } from "react-router-dom";

interface ILefePanelState {
    hamburgActive: boolean,
    handToggle: boolean,
    handIcon: string,
    leftPanelClasses: {
        leftPanelClasses: string[],
        linkIconClasses: string[],
        linkTextClasses: string[]

    },
    logoImgUrl: string;
    navLinkStyle: { display: string },

};

class LeftPanel extends React.Component<{}, ILefePanelState>  {
    constructor(props: any) {
        super(props);
        this.state = {
            hamburgActive: false,
            handIcon: "\uf0a5",// left-pointed-hand
            handToggle: true,// default expanded leftpanel
            leftPanelClasses: {
                leftPanelClasses: ["left-panel"],
                linkIconClasses: ["icon", "left-panel__nav-link__icon"],
                linkTextClasses: ["left-panel__nav-text"]
            },
            // logoImgUrl:"https://accutics.com/wp-content/uploads/2018/08/accutics-logo.png",
            logoImgUrl: "/img/accutics-logo-1.png",
            navLinkStyle: {
                display: "none"
            }
        }
        this.hamburgBtnClick = this.hamburgBtnClick.bind(this);
        this.handToggleBtnCkick = this.handToggleBtnCkick.bind(this);
        this.UIvalidate = this.UIvalidate.bind(this);

    }

    public handToggleBtnCkick() {
        if (this.state.handToggle) {
            this.setState((prevState: ILefePanelState) => {
                return {
                    handIcon: "\uf0a4",// right-pointed-hand
                    handToggle: false,// collapsed left panel
                    leftPanelClasses: {
                        leftPanelClasses: ["left-panel","left-panel--collapse"],
                        linkIconClasses: ["icon", "left-panel__nav-link__icon", "left-panel__nav-link__icon--collapse"],
                        linkTextClasses: ["left-panel__nav-text", "left-panel__nav-text--collapse"]
                    },
                    logoImgUrl: "/img/accutics-logo-1.png",
                };
            });
        } else if (!this.state.handToggle) {
            this.setState((prevState: ILefePanelState) => {
                return {
                    handIcon: "\uf0a5",// left-pointed-hand
                    handToggle: true,// expanded left panel
                    leftPanelClasses: {
                        leftPanelClasses: ["left-panel"],
                        linkIconClasses: ["icon", "left-panel__nav-link__icon"],
                        linkTextClasses: ["left-panel__nav-text"]
                    },
                    logoImgUrl: "https://accutics.com/wp-content/uploads/2018/08/accutics-logo.png",
                };
            });
        }
    }

    public hamburgBtnClick() {
        if (this.state.navLinkStyle.display === "none") {
            this.setState((prevState: ILefePanelState) => {
                return {
                    hamburgActive: true,
                    navLinkStyle: {
                        display: "block"
                    }

                };
            });
        } else if (this.state.navLinkStyle.display === "block") {
            this.setState((prevState: ILefePanelState) => {
                return {
                    hamburgActive: false,
                    navLinkStyle: {
                        display: "none"
                    }

                };
            });
        }
    }

    public UIvalidate() {
        const w = window.innerWidth;
        if (w >= 576 && this.state.navLinkStyle.display === "none") {
            this.setState((prevState: ILefePanelState) => {
                return {
                    navLinkStyle: {
                        display: "block"
                    }
                };
            });
        } else if (w < 576 && this.state.hamburgActive) {
            this.setState((prevState: ILefePanelState) => {
                return {
                    navLinkStyle: {
                        display: "block"
                    }
                };
            });
        } else if (w < 576 && !this.state.hamburgActive) {
            this.setState((prevState: ILefePanelState) => {
                return {
                    navLinkStyle: {
                        display: "none"
                    }
                };
            });
        }
    }

    public componentDidMount() {
        this.UIvalidate();
        window.addEventListener("resize", this.UIvalidate);
    }
    public render() {
        return (
            <aside className={this.state.leftPanelClasses.leftPanelClasses.join(" ")}>
                <nav className="nav">
                    <Link className="left-panel__nav-brand" to="/"><img src={this.state.logoImgUrl} alt="logo" /></Link>
                    <ul id="nav-ul" style={this.state.navLinkStyle}>
                        <li>
                            <Link to="/users" className="left-panel__nav-link" >
                                <span className={this.state.leftPanelClasses.linkIconClasses.join(" ")} >&#xf0c0;</span>
                                <span className={this.state.leftPanelClasses.linkTextClasses.join(" ")}  >users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/posts" className="left-panel__nav-link">
                                <span className={this.state.leftPanelClasses.linkIconClasses.join(" ")} >&#xf1ea;</span>
                                <span className={this.state.leftPanelClasses.linkTextClasses.join(" ")} >posts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/comments" className="left-panel__nav-link">
                                <span className={this.state.leftPanelClasses.linkIconClasses.join(" ")} >&#xf086;</span>
                                <span className={this.state.leftPanelClasses.linkTextClasses.join(" ")} >comments</span></Link>
                        </li>
                        <li>
                            <Link to="/albums" className="left-panel__nav-link">
                                <span className={this.state.leftPanelClasses.linkIconClasses.join(" ")} >&#xf03e;</span>
                                <span className={this.state.leftPanelClasses.linkTextClasses.join(" ")} >albums</span></Link>
                        </li>
                    </ul>
                </nav>
                <a className="left-panel__togel-btn left-panel__togel-btn--left" onClick={this.handToggleBtnCkick} id="pointer-btn">
                    <span className="icon">{this.state.handIcon}</span>
                </a>
                <a className="left-panel__hamburg-togel-btn " onClick={this.hamburgBtnClick} id="hamgurg-btn">
                    <span className="icon">&#xf0c9;</span>
                </a>
            </aside>
        );
    }

}

export default LeftPanel;