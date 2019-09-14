import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormCheck from "react-bootstrap/FormCheck";

export default class UserCreate extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      dateOfBirth: undefined,
      sex: '',
      phone: '',
      department: ''
  };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event){
    event.preventDefault();
    console.log('SKICKADE', this.state);
  }

  formGroup(valueKey, labelText = "", type = "text") {
    return (
      <FormGroup controlId={valueKey}>
        <FormLabel>{labelText}</FormLabel>
        <FormControl onChange={e => this.setState({[`${valueKey}`]: e.target.value})} type={type} value={this.state[valueKey]}></FormControl>
      </FormGroup>
    );
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>Skapa profil</h3>
        {this.formGroup('email', 'Email')}
        {this.formGroup('password', 'Välj lösenord', 'password')}
        {this.formGroup('confirmPassword', 'Bekräfta lösenord', 'password')}
        {this.formGroup('firstName', 'Förnamn')}
        {this.formGroup('lastName', 'Efternamn')}
        {this.formGroup('dateOfBirth', 'Födelsedatum', 'date')}
        <FormGroup onChange={e => this.setState({sex: e.target.value})}>
          <FormLabel>Kön</FormLabel>
          <FormCheck id="male" name="sex_radios" type="radio" label="Man" value="MALE"></FormCheck>
          <FormCheck id="female" name="sex_radios" type="radio" label="Kvinna" value="FEMALE"></FormCheck>
          <FormCheck id="other" name="sex_radios" type="radio" label="Annat" value="OTHER"></FormCheck>
        </FormGroup>
        {this.formGroup('phone', 'Telefonnummer')}
        {this.formGroup('department', 'Avdelning jag är chef för')}
        <FormGroup>
          <FormControl type="submit" value="Fortsätt"></FormControl>
        </FormGroup>
      </Form>
    );
  }
}
