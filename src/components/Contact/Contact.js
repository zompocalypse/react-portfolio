import React, { Component } from 'react';
import { Button, Input, Textarea } from '../Utils/Utils';

export default class Contact extends Component {
  state = { error: null, email: '', name: '', message: '' };

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { error } = this.state;
    return (
      <section id="contact">
        <h2 className="contact-title">Contact Me</h2>
        <div className="header-bar"></div>
        <div className="contact-intro">
          have questions? want to work with me?
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/jason.stankevich@gmail.com"
          method="POST"
        >
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="form-email flex">
            <label htmlFor="contact-form-email">Email</label>
            <Input
              name="email"
              type="text"
              required
              id="contact-form-email"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.email}
            ></Input>
          </div>
          <div className="form-name flex">
            <label htmlFor="contact-form-name">Name</label>
            <Input
              name="name"
              type="text"
              required
              id="contact-form-name"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.name}
            ></Input>
          </div>
          <div className="form-message flex">
            <label htmlFor="contact-form-message">Your message</label>
            <Textarea
              name="message"
              type="text"
              required
              id="contact-form-message"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.message}
            ></Textarea>
          </div>
          <Button
            className="contact-button"
            type="submit"
            onClick={this.handleSubmit.bind(this)}
          >
            send
          </Button>
        </form>
      </section>
    );
  }
}
