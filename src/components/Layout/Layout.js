import React, { Component } from "react";
import "./style.scss";

const LayoutHeader = () => {
  return (
    <div className="header">
      <h1 className="title">Registration Form</h1>
    </div>
  );
};

const LayoutContent = props => {
  return <div className="content">
    {props.children}
  </div>;
};

const LayoutFooter = () => {
  return <div className="footer">By: Harvey Charles Pioquinto</div>;
};

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <LayoutHeader></LayoutHeader>
        <LayoutContent>{this.props.children}</LayoutContent>
        <LayoutFooter></LayoutFooter>
      </div>
    );
  }
}
