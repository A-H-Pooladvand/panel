import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}