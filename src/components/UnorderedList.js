import React, {Component} from 'react';

export default class UnorderedList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listItems: this.props.listItems.map((listItem) =>
                <li key={listItem.id}>
                    <a href="#">{listItem.title}</a>
                </li>
            )
        }
    }

    render() {
        return <ul className={this.props.className}>{this.state.listItems}</ul>
    }
}