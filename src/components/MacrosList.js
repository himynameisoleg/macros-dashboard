import React, { Component } from 'react'

export default class MacrosList extends Component {
	state = {
		tableHeaders: ["Date", "Protein", "Carbs", "Fat", "Sugar", "Saturated Fat", "Calories"]
	}
	render() {
		return (
      <div>
        <h1 className="ui header">Macros List</h1>
        <table className="ui celled table">
          <thead>
            <tr>
              {this.state.tableHeaders.map(item => <th>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">James</td>
              <td data-label="Age">24</td>
              <td data-label="Job">Engineer</td>
            </tr>
            <tr>
              <td data-label="Name">Jill</td>
              <td data-label="Age">26</td>
              <td data-label="Job">Engineer</td>
            </tr>
            <tr>
              <td data-label="Name">Elyse</td>
              <td data-label="Age">24</td>
              <td data-label="Job">Designer</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
	}
}
	