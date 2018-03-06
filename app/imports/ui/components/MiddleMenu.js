import React from 'react';
import { Container, Menu, Grid, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Container centered className="menu-container">
          <Grid centered columns>
            <Menu borderless centered className="midmenu">
              <Dropdown item text="MEN">
                <Dropdown.Menu>
                  <Dropdown.Item>Clothes.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="WOMEN">
                <Dropdown.Menu>
                  <Dropdown.Item>Clothes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item name='KIDS' onClick={this.handleItemClick}/>
              <Dropdown item text="BRANDS">
                <Dropdown.Menu>
                  <Dropdown.Item>Clothes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item name='SEARCH' onClick={this.handleItemClick}/>
            </Menu>
          </Grid>
        </Container>
    );
  }
}
