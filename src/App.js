import React, { useState } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [data, setData] = useState({});
  const [requestParams, setRequestParams] = useState({})

  const callApi = (requestParams) => {
    let data2 = {
      count: 2,
      results: [
        { name: 'item1', url: 'http://what.com/1' },
        { name: 'item2', url: 'http://what.com/2' },
      ],
    };

    setData(data2);
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;