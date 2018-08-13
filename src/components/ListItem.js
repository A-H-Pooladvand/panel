import React, {Component} from 'react';
import Anchor from "./Anchor";

export default class ListItem extends Component {
    render() {
        return (
            <li key={this.props.uniqueKey}>
                <Anchor href={this.props.href} icon={this.props.icon} value={this.props.anchorValue}/>
                {this.props.value || ''}
                {this.props.subs}
            </li>
        );
    }
}