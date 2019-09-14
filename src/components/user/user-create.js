import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormCheck from "react-bootstrap/FormCheck";

export default class UserCreate extends Component {
  render() {
    return (
      <Form>
        <h3>Skapa profil</h3>
        <FormGroup>
          <FormLabel>Välj lösenord</FormLabel>
          <FormControl type="password"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Bekräfta lösenord</FormLabel>
          <FormControl type="password"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Förnamn</FormLabel>
          <FormControl type="text"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Efternamn</FormLabel>
          <FormControl type="text"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Födelsedatum</FormLabel>
          <FormControl type="date"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel controlId="sexRadio">Kön</FormLabel>
          <FormCheck type="radio" label="Man"></FormCheck>
          <FormCheck type="radio" label="Kvinna"></FormCheck>
          <FormCheck type="radio" label="Annat"></FormCheck>
        </FormGroup>
        <FormGroup>
          <FormLabel>Telefonnummer</FormLabel>
          <FormControl type="text"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Avdelning jag är chef för:</FormLabel>
          <FormControl type="text"></FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl type="submit" value="Fortsätt"></FormControl>
        </FormGroup>
      </Form>
    );
  }
}
