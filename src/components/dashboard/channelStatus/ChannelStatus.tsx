import React from 'react';
import StackedBarChart from './StackedBarChart';
import BasicTable from './BasicTable';
import { Box, Container, Typography } from '@mui/material';

type Props = {
  dateQuery : string
}

const ChannelStatus = (props : Props) => {
  //TODO ChannelStatus는 아직 어떠한 데이터도 렌더링하고 있지 않음. 수정하기 
  const { dateQuery } = props;
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, fontWeight: 'bold' }}>매체 현황</Typography>
      <Container
        sx={{
          bgcolor: 'white',
          borderRadius: '20px',
        }}
      >
        <Container sx={{ display: 'flex', justifyContent: 'center', p: 5, flexDirection: 'column' }}>
          <StackedBarChart />
          <BasicTable />
        </Container>
      </Container>
    </Box>
  );
};

export default ChannelStatus;
