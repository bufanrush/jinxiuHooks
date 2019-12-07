//原来这样写
import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 };
        this.addCount=this.addCount.bind(this);
    }
    render() { 
        return ( 
            <div>
                <p>My clicked {this.state.count} times</p>
                <button onClick={this.addCount}>Click me</button>
            </div>
         );
    }

    addCount(){
        this.setState({count:this.state.count+1})
    }

}
 
export default Example;