import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		activeItem: ''
	};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    let activeItem = this.state.activeItem;
    console.log(activeItem);
    return (
        <div>
            <Menu>
    			<Menu.Item
    				name='home'
    				active={activeItem === 'home'}
    				content='Home'
    				onClick={this.handleItemClick}
                    as={RouterNavLink}
                    exact to='/'
            	/>
    			<Menu.Item
    				name='about'
    				active={activeItem === 'about'}
    				content='About'
    				onClick={this.handleItemClick}
                    as={RouterNavLink}
                    to='/about'
            	/>
    			<Menu.Item
    				name='contact'
    				active={activeItem === 'contact'}
    				content='Contact'
    				onClick={this.handleItemClick}
                    as={RouterNavLink}
                    to='/contact'
            	/>
    		</Menu>
            {this.props.children}
        </div>

    );
  }
}
