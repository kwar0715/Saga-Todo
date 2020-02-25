import React from 'react';
import { InputGroup, Form, FormControl, Row, Col, Button } from 'react-bootstrap';

const Header = ({onSearchSubmit}) => (
<Row>
    <Col md={4}>
        <Form onSubmit={onSearchSubmit}>
            <InputGroup>
                <FormControl
                id="txtSearch"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit">Search</Button>
                </InputGroup.Append>
            </InputGroup>  
        </Form>
    </Col>  
    <Col/>
</Row>)

export default Header;