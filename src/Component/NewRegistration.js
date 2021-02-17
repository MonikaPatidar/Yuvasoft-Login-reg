import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Grid, Card} from 'semantic-ui-react'

class RegistartionForm extends Component{
    constructor(props){
        super(props);
        this.state={
            phone: '',
            password: ''
        }
    }

    handleValidation(){
        var validation = false;
        if(!this.state.phone){
            validation = true;
        }
        if(!this.state.password){
            validation = true
        }
        return validation
        
    }

    async handleSubmit(){
        if(await this.handleValidation()){
            return null
        }
        debugger
    }
    render(){
        return(
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <Card fluid color='red' className="Form_Grid">
                        <Segment>
                        <h3 class="ui center aligned header">Registration Form</h3>

                        <Form className="user_form">
                            <Form.Field required>
                            <label>Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder='Phone' 
                                name="phone"
                                value={this.state.phone}
                                onChange={(e)=>this.setState({
                                    phone: e.target.value
                                })}
                            />
                            <span style={{color: "red"}}></span>
                            </Form.Field>
                            <Form.Field required>
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder='Password' 
                                name="password"
                                value={this.state.password}
                                onChange={(e)=>this.setState({
                                    password: e.target.value
                                })}
                            />
                            <span style={{color: "red"}}></span>
                            </Form.Field>
                            <Button type='submit' onClick={()=>this.handleSubmit()}>Submit</Button>
                        </Form>

                        </Segment>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
        )
    }
}

export default RegistartionForm;

{/* <Grid columns='equal'>
    <Grid.Row>
        <Grid.Column width={8}>
        <Card fluid color='red' className="Form_Grid">
            <Segment>
            <h3 class="ui center aligned header">Registration Form</h3>

            <Form className="user_form">
                <Form.Field required>
                <label>Phone Number</label>
                <input 
                    type="tel" 
                    placeholder='Phone' 
                    name="phone"
                />
                <span style={{color: "red"}}></span>
                </Form.Field>
                <Form.Field required>
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder='Password' 
                    name="password"
                />
                <span style={{color: "red"}}></span>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

            </Segment>
            </Card>
        </Grid.Column>
    </Grid.Row>
    </Grid> */}