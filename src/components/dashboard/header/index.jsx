import React from 'react';
import { InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { connect } from "react-redux";

class Header extends React.Component{

    render(){
        return (
            <Row>
                <Col md={4}>
                    <InputGroup>
                        <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>  
                </Col>  
                <Col>
                    <Button variant="outline-primary">New Todo</Button>
                </Col>
                <Col/>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);