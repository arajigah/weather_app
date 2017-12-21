import React, { Component } from 'react';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';

class ZIPSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    handleZipChange = (event) => {
        this.props.onZipCodeEntry(event.target.value);
    }

    render() {
        return (
            <InputGroup>
                <InputGroupButton>
                    <Button onClick={this.props.onClick}>ZIP Search</Button>
                </InputGroupButton>
                <Input onChange={this.handleZipChange} maxLength='5'/>
            </InputGroup>
        )
    }
}

export default ZIPSearch;
