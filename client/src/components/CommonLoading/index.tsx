import React, { memo, useMemo } from 'react';

import style from './index.module.less'
const CommonLoading = () => {
  return <div className={style['loading']}>
        <img src="http://a.top4top.net/p_1990j031.gif" alt="Loading" />
      </div>

};

export default memo(CommonLoading);
