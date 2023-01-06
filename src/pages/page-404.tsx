import React from 'react';
import { Result } from 'antd';
import './page-404.less'
export default function Page404() {
  return (
    <Result status="404" title="404" subTitle="抱歉，您访问的页面不存在" />
  );
}
