import React from 'react';

export interface ITabProps {
  header: string;
  children: any;
}

const Tab = (props: ITabProps) => {
  return (
    <span>
          {props.children}
    </span>
  );
};

export default Tab;
