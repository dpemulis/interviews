import React from "react";
import { getConditions, getPatient } from "./api";
import Search from "./Search";
import Table from "./Table";
import Patient from "./Patient";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      loading: false,
      patient: { name: "", gender: "", dob: "" },
      data: [{ condition: "Enter a patient ID to search conditions", date: "" }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const { value } = this.state
    e.preventDefault();
    this.setState({ value: "", loading: true });
    getPatient(value).then(patient =>
      this.setState({ patient })
    );
    getConditions(value)
      .then(data =>
        this.setState({ loading: false, data })
      )
      .catch(err =>
        this.setState({ loading: false, data: err })
      );
  }

  render() {
    const { loading, value, data } = this.state;
    const { name, dob, gender } = this.state.patient;
    return (
      <>
        <div style={{ width: "20%", float: "left"}}>
          <Search
            loading={loading}
            value={value}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <Patient name={name} dob={dob} gender={gender} />
        </div>
        <Table data={data} loading={loading} />
      </>
    );
  }
}

export default App;
