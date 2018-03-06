import React from 'react';
import { Grid, List, Button, Input } from 'semantic-ui-react';


export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid centered columns={3} className="footer-background">
          <Grid.Column>
            Navigation
            <hr/>
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <hr/>
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            Connect
            <hr/>
            <List>
              <List.Item>Sign up for the latest updates</List.Item>
              <div>
                <Input ref={this.handleRef} placeholder='Search...'/>
                <Button content='Join' onClick={this.focus}/>
              </div>
            </List>
          </Grid.Column>
        </Grid>
    );
  }
}
