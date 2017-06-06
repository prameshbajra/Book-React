import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from "./gallery";

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            items: []
        };
    }

    search() {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({ items })
            });
    }

    render() {
        return (
            <div className="mainDiv">
                <center>
                    <h2>Book Search Engine</h2><br />
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" placeholder="Make a search , Go ahead!"
                                onChange={event => this.setState({ query: event.target.value })}
                                onKeyPress={event => {
                                    if (event.key == 'Enter') {
                                        this.search();
                                    }
                                }} />
                            <InputGroup.Addon onClick={() => { this.search() }}>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <Gallery items={this.state.items} />
                    <h5>By - Pramesh Bajracharya</h5>
                </center>
            </div>
        )
    }
}

export default Global;