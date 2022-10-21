import React, {useState} from 'react';
import { useChangeLang } from '/@/hooks';

const Dashboard = () => {
  const { t } = useChangeLang();
  return <div className={'content'}>{t('greet')}</div>
};

export default Dashboard;
