import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UnorderedList from "./components/UnorderedList";
import SidebarMenuItems from './data/sidebar/sidebar_menu_items';
import './assets/css/index.css'

class Main extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="panel--container">
                    <UnorderedList className="sidebar" listItems={SidebarMenuItems.data}/>
                    <div className="mainbar">dwa</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
