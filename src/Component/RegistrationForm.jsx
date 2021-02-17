import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Grid, Card} from 'semantic-ui-react'

const RegistartionForm=()=>{
    const [values, setvalues]=useState({
        phone:'',
        password:'',
        countryCode:+91
    })
    var [phoneError,setphoneError]=useState('')
    var [passwordError,setpasswordError]=useState('')
    const [validForm,setValidForm]=useState(true)


    const handleChange=(e)=>{
        const {name,value}=e.target
        return setvalues({...values, [name]:value})
    }

    const Submitdata=(e)=>
    {
       e.preventDefault();
       if(validForm===true)
       {
        postData('https://staging.core.freshymart.com/api/v3/register', values)
            .then(data => {
            console.log("response  "+JSON.stringify(data));
            })
            .catch(error=>{
                console.error("Error is "+error)
            })
       }  
    }

    async function postData(url = '', data = {}) {
        debugger
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return response.json();
      }
      

    const handleValidation=()=>{
        
        const {phone,password}=values;

        if(!phone){
            setValidForm(false)
            phoneError = "Phone can not be empty";
            setphoneError(phoneError)
        }

        if(!(phone.length <= 0))
        {
            var pattern = new RegExp(/^[0-9/b]+$/);
        
            if (typeof phone !== "undefined") 
            {
              if (!pattern.test(phone)) 
              {
                setValidForm(false)
                phoneError = "Please enter only number.";
                setphoneError(phoneError)
             }
             else if(phone.length !== 10)
             {
                setValidForm(false)
                phoneError = "Enter 10 igit Number.";
                setphoneError(phoneError)
             }
            }
        }

        if(phone & phone.length ===10)
        {
            setValidForm(true)
            setphoneError('')
        }
           
        if(!password)
        {
            setValidForm(false)
            passwordError = "Phone can not be empty";
            setpasswordError(passwordError)
        }
          
        if((password.length < 6))
        {
            setValidForm(false)
            passwordError = "length should be at least 6 characters";
            setpasswordError(passwordError)
        }

        if(password & password.length>=6)
        {
            setValidForm(true)
            setpasswordError('')
        }

    }

    return(<>
       <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column width={8}>
                <Card fluid color='red' className="Form_Grid">
                    <Segment>
                    <h3 class="ui center aligned header">Registration Form</h3>

                    <Form  onSubmit={(e)=>Submitdata(e)} className="user_form">
                        <Form.Field required>
                        <label>Phone Number</label>
                        <input 
                            type="tel" 
                            placeholder='Phone' 
                            name="phone"
                            value={values.phone}
                            onChange={(e)=>handleChange(e)}
                        />
                        <span style={{color: "red"}}>{phoneError}</span>
                        </Form.Field>
                        <Form.Field required>
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            name="password"
                            value={values.password}
                            onChange={(e)=>handleChange(e)}
                        />
                        <span style={{color: "red"}}>{passwordError}</span>
                        </Form.Field>
                        <Button type='submit' onClick={ ()=>handleValidation()}>Submit</Button>
                    </Form>

                    </Segment>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>)
}

export default RegistartionForm;