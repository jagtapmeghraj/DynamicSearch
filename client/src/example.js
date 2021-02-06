import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";

class ReactSelectExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: {},
      normalSelectOption: null,
    };
  }

  fetchData = (inputValue, callback) => {
    setTimeout(() => {
      fetch(
        //server url
        "http://localhost:3002/" + inputValue, 
        {
          method: "GET",
        }
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const tempArray = [];
          if (data) {
            if (data.length) {
              data.forEach((element) => {
                tempArray.push({
                  label: `${element.value}`,
                  value: element.id,
                });
              });
            } else {
              tempArray.push({
                label: `${data.value}`,
                value: data.id,
              });
            }
          }
          callback(tempArray);
        })
        .catch((error) => {
          console.log(error, "catch the hoop");
        });
    }, 1000);
  };

  onSearchChange = (selectedOption) => {
    if (selectedOption) {
      this.setState({
        selectedOption,
      });
    }
  };
  handleChange = (normalSelectOption) => {
    this.setState({ normalSelectOption });
  };
  render() {
    return (
      <div style={{ marginTop: "5%",marginLeft: "30%", width: "400px" }}>

        <div>
          <p style={{marginLeft: "30%"}}>GripInvest Search</p>
          <AsyncSelect
            value={this.state.selectedOption}
            loadOptions={this.fetchData}
            placeholder="search.."
            isMulti
            onChange={(e) => {
              this.onSearchChange(e);
            }}
            defaultOptions={true}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
          />
        </div>
      </div>
    );
  }
}

export default ReactSelectExample;