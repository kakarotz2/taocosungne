import React from 'react';
import BannerAdmin from '../BannerAdmin';
import ContentAdmin from '../ContentAdmin';
import HomeAdmin from '../HomeAdmin/index';

import './index.scss';

function Dashboard() {
  return (
    <div className="dashboard">
      <HomeAdmin />
      <div className="midder" style={{ display: 'flex' }}>
        <BannerAdmin />
        <ContentAdmin />
      </div>
    </div>
  );
}

export default Dashboard;
