import React from 'react'
import { Link } from 'react-router-dom'

const UsersGroups = () => {

    return (
        <>

            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Panels and Wells</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Default Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Primary Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Info Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="panel panel-success">
                                <div className="panel-heading">
                                    Success Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    Warning Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    Danger Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="panel panel-green">
                                <div className="panel-heading">
                                    Green Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    Yellow Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="panel panel-red">
                                <div className="panel-heading">
                                    Red Panel
                                </div>
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                                </div>
                                <div className="panel-footer">
                                    Panel Footer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Collapsible Accordion Panel Group
                                </div>
                                <div className="panel-body">
                                    <div className="panel-group" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <Link data-toggle="collapse" data-parent="#accordion" to="/">Collapsible Group Item #1</Link>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <Link data-toggle="collapse" data-parent="#accordion" to="#collapseTwo">Collapsible Group Item #2</Link>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <Link data-toggle="collapse" data-parent="#accordion" to="#collapseThree">Collapsible Group Item #3</Link>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Basic Tabs
                                </div>
                                <div className="panel-body">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><Link to="#home" data-toggle="tab">Home</Link>
                                        </li>
                                        <li><Link to="#profile" data-toggle="tab">Profile</Link>
                                        </li>
                                        <li><Link to="#messages" data-toggle="tab">Messages</Link>
                                        </li>
                                        <li><Link to="#settings" data-toggle="tab">Settings</Link>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="home">
                                            <h4>Home Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="tab-pane fade" id="profile">
                                            <h4>Profile Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="tab-pane fade" id="messages">
                                            <h4>Messages Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="tab-pane fade" id="settings">
                                            <h4>Settings Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Pill Tabs
                                </div>
                                <div className="panel-body">
                                    <ul className="nav nav-pills">
                                        <li className="active"><Link to="#home-pills" data-toggle="tab">Home</Link>
                                        </li>
                                        <li><Link to="#profile-pills" data-toggle="tab">Profile</Link>
                                        </li>
                                        <li><Link to="#messages-pills" data-toggle="tab">Messages</Link>
                                        </li>
                                        <li><Link to="#settings-pills" data-toggle="tab">Settings</Link>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="home-pills">
                                            <h4>Home Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="tab-pane fade" id="profile-pills">
                                            <h4>Profile Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="tab-pane fade" id="messages-pills">
                                            <h4>Messages Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="tab-pane fade" id="settings-pills">
                                            <h4>Settings Tab</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="panel tabbed-panel panel-default">
                                <div className="panel-heading clearfix">
                                    <div className="panel-title pull-left">Tabbed Panel Default</div>
                                    <div className="pull-right">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><Link to="#tab-default-1" data-toggle="tab">Page 1</Link></li>
                                            <li><Link to="#tab-default-2" data-toggle="tab">Page 2</Link></li>
                                            <li><Link to="#tab-default-3" data-toggle="tab">Page 3</Link></li>
                                            <li className="dropdown">
                                                <Link to="#" data-toggle="dropdown">More <span className="caret"></span></Link>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><Link to="#tab-default-4" data-toggle="tab">Page 4</Link></li>
                                                    <li><Link to="#tab-default-5" data-toggle="tab">Page 5</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="tab-default-1">Page 1</div>
                                        <div className="tab-pane fade" id="tab-default-2">Page 2</div>
                                        <div className="tab-pane fade" id="tab-default-3">Page 3</div>
                                        <div className="tab-pane fade" id="tab-default-4">Page 4</div>
                                        <div className="tab-pane fade" id="tab-default-5">Page 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="panel tabbed-panel panel-primary">
                                <div className="panel-heading clearfix">
                                    <div className="panel-title pull-left">Tabbed Panel Primary</div>
                                    <div className="pull-right">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><Link to="#tab-primary-1" data-toggle="tab">Page 1</Link></li>
                                            <li><Link to="#tab-primary-2" data-toggle="tab">Page 2</Link></li>
                                            <li><Link to="#tab-primary-3" data-toggle="tab">Page 3</Link></li>
                                            <li className="dropdown">
                                                <Link to="#" data-toggle="dropdown">More <span className="caret"></span></Link>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><Link to="#tab-primary-4" data-toggle="tab">Page 4</Link></li>
                                                    <li><Link to="#tab-primary-5" data-toggle="tab">Page 5</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="tab-primary-1">Page 1</div>
                                        <div className="tab-pane fade" id="tab-primary-2">Page 2</div>
                                        <div className="tab-pane fade" id="tab-primary-3">Page 3</div>
                                        <div className="tab-pane fade" id="tab-primary-4">Page 4</div>
                                        <div className="tab-pane fade" id="tab-primary-5">Page 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="panel tabbed-panel panel-info">
                                <div className="panel-heading clearfix">
                                    <div className="panel-title pull-left">Tabbed Panel Info</div>
                                    <div className="pull-right">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><Link to="#tab-info-1" data-toggle="tab">Page 1</Link></li>
                                            <li><Link to="#tab-info-2" data-toggle="tab">Page 2</Link></li>
                                            <li><Link to="#tab-info-3" data-toggle="tab">Page 3</Link></li>
                                            <li className="dropdown">
                                                <Link to="#" data-toggle="dropdown">More <span className="caret"></span></Link>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><Link to="#tab-info-4" data-toggle="tab">Page 4</Link></li>
                                                    <li><Link to="#tab-info-5" data-toggle="tab">Page 5</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="tab-info-1">Page 1</div>
                                        <div className="tab-pane fade" id="tab-info-2">Page 2</div>
                                        <div className="tab-pane fade" id="tab-info-3">Page 3</div>
                                        <div className="tab-pane fade" id="tab-info-4">Page 4</div>
                                        <div className="tab-pane fade" id="tab-info-5">Page 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="panel tabbed-panel panel-success">
                                <div className="panel-heading clearfix">
                                    <div className="panel-title pull-left">Tabbed Panel Success</div>
                                    <div className="pull-right">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><Link to="#tab-success-1" data-toggle="tab">Page 1</Link></li>
                                            <li><Link to="#tab-success-2" data-toggle="tab">Page 2</Link></li>
                                            <li><Link to="#tab-success-3" data-toggle="tab">Page 3</Link></li>
                                            <li className="dropdown">
                                                <Link to="#" data-toggle="dropdown">More <span className="caret"></span></Link>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><Link to="#tab-success-4" data-toggle="tab">Page 4</Link></li>
                                                    <li><Link to="#tab-success-5" data-toggle="tab">Page 5</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="tab-success-1">Page 1</div>
                                        <div className="tab-pane fade" id="tab-success-2">Page 2</div>
                                        <div className="tab-pane fade" id="tab-success-3">Page 3</div>
                                        <div className="tab-pane fade" id="tab-success-4">Page 4</div>
                                        <div className="tab-pane fade" id="tab-success-5">Page 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="panel tabbed-panel panel-warning">
                                <div className="panel-heading clearfix">
                                    <div className="panel-title pull-left">Tabbed Panel Warning</div>
                                    <div className="pull-right">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><Link to="#tab-warning-1" data-toggle="tab">Page 1</Link></li>
                                            <li><Link to="#tab-warning-2" data-toggle="tab">Page 2</Link></li>
                                            <li><Link to="#tab-warning-3" data-toggle="tab">Page 3</Link></li>
                                            <li className="dropdown">
                                                <Link to="#" data-toggle="dropdown">More <span className="caret"></span></Link>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><Link to="#tab-warning-4" data-toggle="tab">Page 4</Link></li>
                                                    <li><Link to="#tab-warning-5" data-toggle="tab">Page 5</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="tab-warning-1">Page 1</div>
                                        <div className="tab-pane fade" id="tab-warning-2">Page 2</div>
                                        <div className="tab-pane fade" id="tab-warning-3">Page 3</div>
                                        <div className="tab-pane fade" id="tab-warning-4">Page 4</div>
                                        <div className="tab-pane fade" id="tab-warning-5">Page 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="panel tabbed-panel panel-danger">
                                <div className="panel-heading clearfix">
                                    <div className="panel-title pull-left">Tabbed Panel Danger</div>
                                    <div className="pull-right">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><Link to="#tab-danger-1" data-toggle="tab">Page 1</Link></li>
                                            <li><Link to="#tab-danger-2" data-toggle="tab">Page 2</Link></li>
                                            <li><Link to="#tab-danger-3" data-toggle="tab">Page 3</Link></li>
                                            <li className="dropdown">
                                                <Link to="#" data-toggle="dropdown">More <span className="caret"></span></Link>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><Link to="#tab-danger-4" data-toggle="tab">Page 4</Link></li>
                                                    <li><Link to="#tab-danger-5" data-toggle="tab">Page 5</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="tab-danger-1">Page 1</div>
                                        <div className="tab-pane fade" id="tab-danger-2">Page 2</div>
                                        <div className="tab-pane fade" id="tab-danger-3">Page 3</div>
                                        <div className="tab-pane fade" id="tab-danger-4">Page 4</div>
                                        <div className="tab-pane fade" id="tab-danger-5">Page 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="well">
                                <h4>Normal Well</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="well well-lg">
                                <h4>Large Well</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="well well-sm">
                                <h4>Small Well</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="hero-widget well well-sm">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-user"></i>
                                </div>
                                <div className="text">
                                    <span className="value">3</span>
                                    <label className="text-muted">Hero Widget</label>
                                </div>
                                <div className="options">
                                    <Link to="/" className="btn btn-primary btn-lg"><i className="glyphicon glyphicon-plus"></i> Primary Action</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="hero-widget well well-sm">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-star"></i>
                                </div>
                                <div className="text">
                                    <span className="value">614</span>
                                    <label className="text-muted">Hero Widget</label>
                                </div>
                                <div className="options">
                                    <Link to="/" className="btn btn-default btn-lg"><i className="glyphicon glyphicon-search"></i> Secondary Action</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="hero-widget well well-sm">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-tags"></i>
                                </div>
                                <div className="text">
                                    <span className="value">73</span>
                                    <label className="text-muted">Hero Widget</label>
                                </div>
                                <div className="options">
                                    <Link to="/" className="btn btn-default btn-lg"><i className="glyphicon glyphicon-search"></i> Secondary Action</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="hero-widget well well-sm">
                                <div className="icon">
                                    <i className="glyphicon glyphicon-cog"></i>
                                </div>
                                <div className="text">
                                    <span className="value">75%</span>
                                    <label className="text-muted">Hero Widget</label>
                                </div>
                                <div className="options">
                                    <Link to="/" className="btn btn-default btn-lg"><i className="glyphicon glyphicon-wrench"></i> Secondary Action</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="jumbotron">
                                <h1>Jumbotron</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>
                                <p><Link to="/" className="btn btn-primary btn-lg" role="button">Learn more</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersGroups