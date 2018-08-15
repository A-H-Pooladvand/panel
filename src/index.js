import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UnorderedList from "./components/UnorderedList";
import SidebarMenuItems from './data/sidebar/sidebar_menu_items';
import {$} from './helpers/jquery';
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image";
import './assets/css/index.css';

class Main extends Component {

    componentDidMount() {
        $('.sidebar > li > a').on('click', function () {
            $(this).parent().find('ul').first().slideToggle();
        });
    }

    render() {
        return (
            <div className='panel--main-container'>
                <Navbar className='panel--navbar' >
                    <Image className='avatar' src='#' alt='alt' />
                </Navbar>
                <div className="panel--container">
                    <UnorderedList className="sidebar" listItems={SidebarMenuItems.data}/>
                    <div className="mainbar">Amirhossein</div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Main/>, document.getElementById('root'));
