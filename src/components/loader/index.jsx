import React from 'react';
import { Spinner } from 'react-bootstrap';

const style = {
    left: "50%",
    top: "50%",
    position: "absolute",
    height: "60px",
    width: "60px"
}
const Loader = () =>
<Spinner animation="border" role="status" size="lg" style={style}>
<span className="sr-only">Loading...</span>
</Spinner>

export default Loader;