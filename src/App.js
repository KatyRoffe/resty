import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  data: {},
  requestParams: {},
  history: [],
  isLoading: false,
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case 'UPDATEREQUESTPARAMS':
      return { ...state, requestParams: { ...action.payload } };

    case 'ASSIGNDATA':
      return { ...state, data: { ...action.payload } };

    case 'HISTORY':
      return { ...state, data: [...action.payload] };

    default:
      return state;
  };
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const callApi = async (requestParamsObject) => {
    
    const response = await axios(requestParamsObject);
    const action = {
      type: 'ASSIGN_DATA',
      payload: response,
    };
    dispatch(action);
  }
  useEffect(() => {
    if (state !== {}) {
      callApi(state.requestParams);
    }
  });
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form setRequestParams={dispatch} />
      <Results data={state.data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;