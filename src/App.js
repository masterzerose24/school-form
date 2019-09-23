import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import FormNavigator from "components/StudentForms/FormNavigator";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <FormNavigator />
          </Layout>
      </div>
    );
  }
}
