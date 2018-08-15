import React, {Component} from 'react';
import ListItem from "./ListItem";

export default class UnorderedList extends Component {

    constructor(props) {
        super(props);
        this.createUnorderedList = this.createUnorderedList.bind(this);
    }


    createUnorderedList(listItems, className) {
        let lists = [];

        if (! listItems) {
            return null;
        }

        listItems.forEach((listItem) => {
            lists.push(
                <ListItem
                    key={listItem.id}
                    uniqueKey={listItem.id}
                    href={listItem.link}
                    anchorValue={listItem.title}
                    subs={listItem.children && this.createUnorderedList(listItem.children, listItem.children[0].className)}
                    icon={listItem.icon}
                />
            );
        });

        return (<ul className={className}>{lists}</ul>);
    }

    render() {
        return (this.createUnorderedList(this.props.listItems, this.props.className))
    }
}