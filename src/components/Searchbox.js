import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap'

class Searchbox extends Component {

  // render method
  render() {
    const { value, onChange, onSubmit, children } = this.props

    return (
      <Form className="search-form" onSubmit={onSubmit}>
        <Input
          type="text"
          className="search-box"
          value={value}
          onChange={onChange}
        />
        <Button color="secondary" type="submit">{children}</Button>
      </Form>
    )
  }
}

export default Searchbox
