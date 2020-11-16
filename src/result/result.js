import React from 'react';
// import JSONPretty from 'react-json-pretty';
// let JSONPrettyMon = require('react-json-pretty/themes/monikai.css');
import ReactJson from 'react-json-view';

import './result.scss';

/*
        <h1>Headers</h1>
        <JSONPretty className="json-pretty" data={JSON.stringify(this.props.headers)} theme={JSONPrettyMon}></JSONPretty>
        <h1>Results</h1>
        <div>COUNT:<JSONPretty className="json-pretty" data={JSON.stringify(this.props.count)} theme={JSONPrettyMon}></JSONPretty></div>
        <div>RESULTS:<JSONPretty className="json-pretty" data={JSON.stringify(this.props.results)} theme={JSONPrettyMon}></JSONPretty></div>
*/

class Result extends React.Component {


  render() {
    return (
      <>
      <div className='results'>
        <h1>Headers</h1>
        <ReactJson className="json-pretty" src={this.props.headers} />
        <h1>Results</h1>
        <div>Results:<ReactJson className="json-pretty" src={this.props.results} /></div>
      </div>
      </>
    )
  }
}

export default Result;