import React, { useState } from 'react';

import './form.scss';

function Form({ setRequestParams }) {

  let [method, setMethod] = useState('');
  let [url, setUrl] = useState('');

  const handleMethod = (error) => {
    error.preventDefault();
    setMethod(error.target.id);
  }

  const handleUrl = (error) => {
    error.preventDefault();
    setUrl(error.target.value);
  }

  const handleSubmit = (error) => {
    error.preventDefault();
    const formData = {
      method,
      url,
    };

    const action = {
      type: 'UPDATEREQUESTPARAMS',
      payload: formData,
    }
    setRequestParams(action);
  }

  return (
    <>
      <form>
        <label >
          <span>URL: </span>
          <input onChange={handleUrl} name='url' type='text' />
          <button data-testid="button" onClick={handleSubmit} type="submit">GO!</button>
        </label>
        <label onClick={handleMethod} className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;