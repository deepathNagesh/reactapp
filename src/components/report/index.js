import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DataTable from './databable';
import CreateActor from './createActor';
import { Typography } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // 
    <Box sx={{ width: '100%' }}>
        <Provider store={store}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="List" {...a11yProps(0)} />
          <Tab label="Create" {...a11yProps(1)} />
          <Tab label="Activity" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <CustomTabPanel value={value} index={0}>
        Actors
        <DataTable> </DataTable>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Typography sx={{background :"white"}}> Create </Typography>
        <CreateActor> </CreateActor>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Recent Activity
      </CustomTabPanel>
      </Provider>
    </Box>
    ///* </Provider> */
  );
}
