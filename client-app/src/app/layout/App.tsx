import React, { useState, useEffect } from 'react';
import { Header, List } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';

// interface IState {
//   activities: IActivity[];
// }

// class App extends React.Component<{}, IState> {
const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response)=>{
        setActivities(response.data)
    });
  }, []);
  // readonly state: IState = {
  //   activities: []
  // };

  // componentDidMount() {
  //   axios.get<IActivity[]>('http://localhost:5000/api/activities')
  //     .then((response)=>{
  //       this.setState({
  //         activities:response.data
  //       })
  //     })
  // }

  // render() {
    return (
      <div>
        <Header as='h2' icon='users' content='My Project' />
        <List>
          {activities.map((activity)=>(
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  // }
}

export default App;
