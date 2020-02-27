import React from 'react';
import { InputGroup, Form, FormControl, Row, Col, Button } from 'react-bootstrap';

const Header = ({onSearchSubmit, searchTerm}) => (
<Row>
    <Col md={4}>
        <Form onSubmit={onSearchSubmit}>
            <InputGroup>
                <FormControl
                id="txtSearch"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                defaultValue={searchTerm}
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