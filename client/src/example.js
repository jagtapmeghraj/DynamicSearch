


//.......................
import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { colourOptions } from './docs/data';
import Axios from 'axios';

type State = {
  inputValue: string,
};

const filterColors = (inputValue: string) => {
  var arr = [];
  Axios.get('http://localhost:3002/').then((response)=>{

    arr = response.data; 
    console.log(response.data);
  });
 
  return arr;
};





const loadOptions = (inputValue, callback) => {

  
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export default class WithCallbacks extends Component<*, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <div>
        <pre>inputValue: "{this.state.inputValue}"</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
