import React from 'react';
import { Header, List } from 'semantic-ui-react';
import axios from 'axios';

class App extends React.Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response)=>{
        this.setState({
          values:response.data
        })
      })
  }

  render() {
    return (
      <div>
        <Header as='h2' icon='users' content='My Project' />
        <List>
          {this.state.values.map((val:any)=>(
            <List.Item key={val.id}>{val.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
