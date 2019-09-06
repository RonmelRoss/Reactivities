import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null; // Indicates whether selectActivity is of type IActivity of null
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
    activities,
    selectActivity,
    selectedActivity,
    editMode,
    setEditMode
  }) => {
    return (
      <Grid>
        <Grid.Column width={10}>
          {/* <List>
            {activities.map((activity) => (
              <List.Item key={activity.id}>{activity.title}</List.Item>
            ))}
          </List> */}
          <ActivityList activities={activities} selectActivity={selectActivity} />
        </Grid.Column>
        <Grid.Column width={6}>
        {/* && indicates that activity={selectedActivity} is only executed if selectedActivity is not equal to null
        or !editMode is true */}
        {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} setEditMode={setEditMode}/> }
        {editMode && <ActivityForm /> }
        </Grid.Column>
      </Grid>
    )
}

export default ActivityDashboard;
