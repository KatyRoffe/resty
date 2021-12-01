import React from 'react';
import ReactJson from 'react-json-view';

const Results = (props) => {
  return (
  <section>
    <pre data-testid="data">
      {props.data 
      ? <ReactJson src={props.data} theme="embers" />
      : <p>Loading...</p>}</pre>
    </section>
  );
}

export default Results;