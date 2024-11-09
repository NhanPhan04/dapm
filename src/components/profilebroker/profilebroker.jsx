import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { FaDollarSign, FaGift, FaHistory, FaHeadphones, FaFileContract } from 'react-icons/fa';
import './profilebroker.css'; // Custom CSS for minor adjustments

const ProfileBroker = () => {
  return (
    <Container maxWidth="100%" className="profile-page">
      {/* Greeting Section */}
      <Box className="greeting-section bg-black text-white py-4 px-3">
        <Typography variant="h4">Xin chào, User</Typography>
      </Box>

      {/* Category Section */}
      <Box className="category-section bg-gray-200 p-5 rounded-md mt-4 shadow-md">
        <Typography variant="h6" className="mb-4">Danh mục</Typography>
        <Grid container spacing={3} style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Grid item xs={4}>
            <Button className="flex-col" variant="text">
              <FaDollarSign size={30} color="#F97316" />
              <Typography>Nạp đồng tốt</Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="flex-col" variant="text">
              <FaGift size={30} color="#F97316" />
              <Typography>Đổi mã khuyến mãi</Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="flex-col" variant="text">
              <FaHistory size={30} color="#F97316" />
              <Typography>Lịch sử giao dịch</Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="flex-col" variant="text">
              <FaFileContract size={30} color="#F97316" />
              <Typography>Hợp đồng dịch vụ</Typography>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="flex-col" variant="text">
              <FaHeadphones size={30} color="#F97316" />
              <Typography>Trợ giúp</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Transaction History Section */}
      <Box className="transaction-history-section bg-pink-200 p-3 rounded-md mt-4 flex justify-between items-center" style={{ marginBottom: '100px' }}>
        <Typography variant="h6" color="textPrimary">
          Lịch sử giao dịch
        </Typography>
        <Button variant="text" color="primary">Xem tất cả</Button>
      </Box>
    </Container>
  );
};

export default ProfileBroker;
