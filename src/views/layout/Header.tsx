import React from 'react'

import {
    Link,
    useHistory 
  } from "react-router-dom";
const Header = (props:any) => {
    const history = useHistory()
const assetsLink = () => {
    history.push("/manage-assets");
}
const workOrdersLink = () => {
    history.push("/work-orders");
}

return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Startmin</Link>
                </div>

                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <ul className="nav navbar-nav navbar-left navbar-top-links">
                    <li><Link to="/"><i className="fa fa-home fa-fw"></i> Website</Link></li>
                </ul>

                <ul className="nav navbar-right navbar-top-links">
                    <li className="dropdown navbar-inverse">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/">
                            <i className="fa fa-bell fa-fw"></i> <b className="caret"></b>
                        </Link>
                        <ul className="dropdown-menu dropdown-alerts">
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-comment fa-fw"></i> New WO
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-twitter fa-fw"></i> 3 Completed
                                        <span className="pull-right text-muted small">12 minutes ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-envelope fa-fw"></i> Message Sent
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-tasks fa-fw"></i> New Task
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div>
                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <Link className="text-center" to="/">
                                    <strong>See All Alerts</strong>
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/">
                            <i className="fa fa-user fa-fw"></i> secondtruth <b className="caret"></b>
                        </Link>
                        <ul className="dropdown-menu dropdown-user">
                            <li><Link to="/"><i className="fa fa-user fa-fw"></i> User Profile</Link>
                            </li>
                            <li><Link to="/"><i className="fa fa-gear fa-fw"></i> Settings</Link>
                            </li>
                            <li className="divider"></li>
                            <li><Link to="/"><i className="fa fa-sign-out fa-fw"></i> Logout</Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav" id="side-menu">
                            <li className="sidebar-search">
                                <div className="input-group custom-search-form">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <Link to="/" className="active"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={workOrdersLink}><i className="fa fa-wrench fa-fw"></i> Work Orders<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <Link to="/schedule-work-order">Schedule a Work Order</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/edit-assets">For Review</Link>
                                    </li>
                                    <li>
                                        <Link to="/edit-assets">For Approval</Link>
                                    </li> */}
                                </ul>
                            </li>

                            <li>
                                <Link to="/" onClick={assetsLink}><i className="fa fa-wrench fa-fw"></i> Assets<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <Link to="/manage-assets">Manage Assets</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/edit-assets">Edit Asset</Link>
                                    </li> */}

                                </ul>
                            </li>
                            {/* <li>
                                <Link to="/"><i className="fa fa-edit fa-fw"></i> Transactions<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <Link to="panels-wells.html">Panels and Wells</Link>
                                    </li>
                                    <li>
                                        <Link to="buttons.html">Buttons</Link>
                                    </li>
                                    <li>
                                        <Link to="notifications.html">Notifications</Link>
                                    </li>
                                    <li>
                                        <Link to="typography.html">Typography</Link>
                                    </li>
                                    <li>
                                        <Link to="icons.html"> Icons</Link>
                                    </li>
                                    <li>
                                        <Link to="grid.html">Grid</Link>
                                    </li>
                                </ul>
                            </li> */}

                            {/* <li>
                                <Link to="/"><i className="fa fa-files-o fa-fw"></i> Reports<span className="fa arrow"></span></Link>
                                <ul className="nav nav-second-level">
                                    <li>
                                        <Link to="blank.html">Blank Page</Link>
                                    </li>
                                    <li>
                                        <Link to="login.html">Login Page</Link>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

    </>
)

}



export default Header



