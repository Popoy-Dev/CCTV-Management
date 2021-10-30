import React from 'react'


import {
    Link
  } from "react-router-dom";
const Dashboard = (props:any) => {


    return (
        <>
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Dashboard</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-comments fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">26</div>
                                            <div>Completed WO</div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                        <div className="clearfix"></div>
                                    </div>
                                </Link> 
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-green">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-tasks fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">12</div>
                                            <div>New WO</div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                        <div className="clearfix"></div>
                                    </div>
                                </Link> 
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-shopping-cart fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">124</div>
                                            <div>Pending</div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                        <div className="clearfix"></div>
                                    </div>
                                </Link> 
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-red">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-support fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">13</div>
                                            <div>Assets</div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/">
                                    <div className="panel-footer">
                                        <span className="pull-left">View Details</span>
                                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>

                                        <div className="clearfix"></div>
                                    </div>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-bar-chart-o fa-fw"></i> Area Chart Example
                                    <div className="pull-right">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default btn-xs dropdown-toggle"
                                                    data-toggle="dropdown">
                                                Actions
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                                <li><Link to="/">Action</Link> 
                                                </li>
                                                <li><Link to="/">Another action</Link> 
                                                </li>
                                                <li><Link to="/">Something else here</Link> 
                                                </li>
                                                <li className="divider"></li>
                                                <li><Link to="/">Separated link</Link> 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div id="morris-area-chart"></div>
                                </div>
                            </div>
                          
                        </div>
                        <div className="col-lg-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-bell fa-fw"></i> Notifications Panel
                                </div>
                                <div className="panel-body">
                                    <div className="list-group">
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-comment fa-fw"></i> New Comment
                                                <span className="pull-right text-muted small"><em>4 minutes ago</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                                <span className="pull-right text-muted small"><em>12 minutes ago</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-envelope fa-fw"></i> Message Sent
                                                <span className="pull-right text-muted small"><em>27 minutes ago</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-tasks fa-fw"></i> New Task
                                                <span className="pull-right text-muted small"><em>43 minutes ago</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                                <span className="pull-right text-muted small"><em>11:32 AM</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-bolt fa-fw"></i> Server Crashed!
                                                <span className="pull-right text-muted small"><em>11:13 AM</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-warning fa-fw"></i> Server Not Responding
                                                <span className="pull-right text-muted small"><em>10:57 AM</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-shopping-cart fa-fw"></i> New Order Placed
                                                <span className="pull-right text-muted small"><em>9:49 AM</em>
                                                </span>
                                        </Link> 
                                        <Link to="/" className="list-group-item">
                                            <i className="fa fa-money fa-fw"></i> Payment Received
                                                <span className="pull-right text-muted small"><em>Yesterday</em>
                                                </span>
                                        </Link> 
                                    </div>
                                    <Link to="/" className="btn btn-default btn-block">View All Alerts</Link> 
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard