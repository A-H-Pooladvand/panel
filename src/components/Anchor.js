import React, {Component} from 'react';

export default class Anchor extends Component {
    render() {
        return (
            <a href={this.props.href}>
                {this.props.icon && <i className={`fas fa-${this.props.icon} list-fw`}/>}
                {this.props.value}
            </a>
        );
    }
}