import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UnorderedList from "./components/UnorderedList";
import SidebarMenuItems from './data/sidebar/sidebar_menu_items';
import {$} from './helpers/jquery';
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image";
import './assets/css/index.css';
import image from './files/pictures/_test/1.jpg'
import Anchor from "./components/Anchor";

class Main extends Component {

    componentDidMount() {
        $('.sidebar > li > a').on('click', function () {
            $(this).parent().find('ul').first().slideToggle();
        });
    }

    render() {
        return (
            <div className='panel--main-container'>

                <Navbar className='panel--navbar'>
                    <Anchor href='#'>
                        <Image className='avatar float-left ml-1 mt-1' src={image} alt='alt'/>
                    </Anchor>
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
