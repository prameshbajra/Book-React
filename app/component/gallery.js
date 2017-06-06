import React, { Component } from "react";

class Gallery extends Component {
    render() {
        return (
            <div >
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <a key={index} href={infoLink} target="_blank">
                                <img src={imageLinks !== undefined ? imageLinks.thumbnail : ""} alt="Look yourself" />
                                <br />
                                <h4>{title}</h4>
                                <br /><br />
                            </a>
                        )
                    })
                }
            </div >
        )
    }
}

export default Gallery;