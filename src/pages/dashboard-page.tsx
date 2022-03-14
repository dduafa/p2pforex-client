import React from 'react';
import WithAdminRole from '@/hocs/with-admin-role';

const DashboardPage = () => {
  return <div>DashboardPage</div>;
};

export default WithAdminRole(DashboardPage);
