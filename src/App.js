import React, { Component } from "react";
import "./bulma.css";
import Form from "./components/Form";
import Counter from './components/Counter';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      name: '',
      nameList: [],
      totalCount: 0,
      // object: { name: "MAD", number: 0 }
    }
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  onSubmitHandle = event => {
    event.preventDefault();

    var nameList = this.state.nameList;

    if (nameList.length === 0) {
      this.setState({
        nameList: [...this.state.nameList, 
          { id: 1, name: event.target.name.value, count: 0 }]
      });
    } else {
      var lastIndex = nameList[nameList.length - 1].id;

      var id = (lastIndex + 1);

      this.setState({
        nameList: [...this.state.nameList, 
          { id: id, name: event.target.name.value, count: 0 }]
      });
    }

    event.target.name.value = "";

      this.setState({
        name : ""
      })
  }

  handleNumberChange = (event, nameSelected) => {

    const prevNames = this.state.nameList;

    this.setState({
      nameList: prevNames.map(function(lang) {
        if (lang.id === nameSelected.id) {
          return {...lang, count: event.target.value}
        } else {
          return lang
        }
      })
    })
    
    console.log(event.target.value)
  
  }

  onDeleteHandle = id => {
    this.setState({
      nameList: this.state.nameList.filter(function(name, index) {
        return index !== id
      })
    })
  }

  // getTotalCount = (event, nameSelected) => {
  //   var totalCount = this.state.totalCount;
  //   var prevNames = this.state.nameList;

  //   this.setState({
  //     nameList: prevNames.map(function(lang) {
  //       if (lang.id === nameSelected.id) {
  //         return {...lang, count: event.target.value}
  //       } else {
  //         return lang
  //       }
  //     })
  //   })
  // }

  updateInput = event => {
    this.setState({
      object: { ...this.state.object, number: event.target.value }
    })
  }

  render() {

    var nameList = this.state.nameList;
    var nameCounter = this.state.nameList.length;
    // var totalCount = nameList.reduce((sum, index) => (sum += Number(index.count)), 0)

    var totalCount = 0;

    var totalCountCopy = function() {
      nameList.forEach(name => {
        totalCount += Number(name.count)
      })
      return totalCount
    }

    return (
      <section className="section">
        <div className="container">
          <Form 
            onFormInput={this.handleNameChange} 
            onFormSubmit={this.onSubmitHandle} 
          />
          <p>Show a sum of all the counter values.</p>
          
          <br />

          <p>Names:</p>
          <ul>
            {nameList.map((object, index) => {
              return <li 
                key={index}
                id={index}>
                {object.name}
                <Counter 
                  onCounterChange={this.handleNumberChange}
                  value={object.count}
                  object={object}
                />
                <button onClick={() => this.onDeleteHandle(index)}>Delete</button>
              </li>
            })}
          </ul>

          <br />

          {/* <input type="number" placeholder="NUMBER HERE." defaultValue={this.state.object.number} onChange={this.updateInput}></input> */}
        
          <p>Names: {nameCounter}</p>
          <p>Total Combined Counts: {totalCountCopy()}</p>
        </div>
      </section>
    );
  }
}

export default App;