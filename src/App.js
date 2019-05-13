import React, { Component } from "react";
import "./bulma.css";
import Form from "./components/Form";
import Counter from './components/Counter';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      name: '',
      nameList: [
        // { id: 1, name: "Ben", count: 2 }, 
        // { id: 2, name: "Dan", count: 3 }
      ],
      totalCount: 0
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

  handleNumberChange = nameSelected => {
  // handleNumberChange = (nameSelected, id) => {
  // handleNumberChange = (id, numbers) => {

    // locate where the id = index
    // try the id's count to number + id

    // const prevNameList = this.state.nameList;
    // this.setState({
    //   nameList: prevNameList.map((index) => 
    //       index === id ? event.target : console.log("nope")
    //     )
    // })

    // let { value } = event.target;
    // value = Number(value);
    // this.setState({ value });

    // var index = this.setState.nameList.findIndex(x => x.id === id);
    // console.log(index)

    // var prevState = this.state.nameList;
    // this.setState(prevState => ({
    //   nameList: {
    //     ...prevState.nameList,[prevState.nameList[id]]: event.target.value
    //   }
    // }))

    const prevNames = this.state.nameList;
    this.setState({
      nameList: prevNames.map(object => {
        object.id === nameSelected.id ? console.log(true) : console.log(false)
      })
    })
  }

  onDeleteHandle = id => {
    this.setState({
      nameList: this.state.nameList.filter(function(name, index) {
        return index !== id
      })
    })
  }

  getTotalCount = () => {
    var totalCount = this.state.totalCount;
    var nameList = this.state.nameList;
    var total = nameList.map(name => totalCount += name.count)

    // this.setState({
    //   totalCount: total
    // })

    return total
  }

  render() {

    var nameList = this.state.nameList;
    var nameCounter = this.state.nameList.length;

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
                  name={object.name}
                />
                <button onClick={() => this.onDeleteHandle(index)}>Delete</button>
              </li>
            })}
          </ul>

          <br />

          <p>Names: {nameCounter}</p>
          <p>Total Combined Counts: {this.getTotalCount()}</p>
        </div>
      </section>
    );
  }
}

export default App;