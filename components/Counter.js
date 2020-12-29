import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
    this.state = {
        count: 0
    }

    this.increase = this.increase.bind(this);
}    
    increase(){
         this.setState({count: this.state.count + 1})
    }
          render() {
        return (
            <div className='card'>
                <h1>{this.state.count <50?this.state.count: 0 }</h1>
                <button onClick={this.increase}>Click Me!</button>    

            </div>
        )
    }
}














