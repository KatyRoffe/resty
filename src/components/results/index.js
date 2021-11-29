import React from 'react';

function Results(props) {
  return (
    <section>
      <input data-testid="name" value={props.data ? JSON.stringify(props.data, undefined, 2) : ''} />
    </section>
  );
}

export default Results;