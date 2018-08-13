import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UnorderedList from "./components/UnorderedList";
import SidebarMenuItems from './data/sidebar/sidebar_menu_items';
import './assets/css/index.css'

class Main extends Component {

    componentDidMount() {
        let sidebar = document.getElementsByClassName('panel--container')[0].querySelectorAll('ul.sidebar >li > a');

        sidebar.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let closableItem = item.parentElement.querySelectorAll('ul');
                closableItem.forEach((item) => {
                    item.style.height = 0;
                });
            });
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="panel--container">
                    <UnorderedList className="sidebar" listItems={SidebarMenuItems.data}/>
                    <div className="mainbar">Amirhossein</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
