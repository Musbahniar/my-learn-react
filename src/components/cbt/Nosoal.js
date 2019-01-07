import { Button, Table } from 'reactstrap';
import React, { Component } from 'react'

export default class Nosoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:'',
            recipeList :
            [{
                recipe: "Tacos",
                directions: "make tacos",
                ingredients: ["meat"]
            },
            {
                recipe: "pizza",
                directions: "bake",
                ingredients: ["dough"]
            }]
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log('clickity');
    }
    
    render() {
        const {input} = this.state;
    return (
      <div>
          <h2>x</h2>
            <Table size="sm">
                <tbody>
                <tr>
                    <th> <Button onClick={this.handleSubmit}>Submit</Button></th>
                    <th>2 A</th>
                    <th>3 A</th>
                    <th>4 A</th>
                    <th>5 A</th>
                </tr>
                <tr>
                    <th>6 A</th>
                    <th>7 A</th>
                    <th>8 A</th>
                    <th>9 A</th>
                    <th>10 A</th>
                </tr>
                <tr>
                    <th>6 A</th>
                    <th>7 A</th>
                    <th>8 A</th>
                    <th>9 A</th>
                    <th>10 A</th>
                </tr>
                        </tbody>
            </Table> 
            <Button color="primary">---SELESAI---</Button>{' '}
      </div>
    )
  }
}