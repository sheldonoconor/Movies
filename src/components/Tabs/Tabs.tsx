import React, {useState} from 'react';

const Tabs = (props: any) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onSelectTab = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  const childrenWithProps = React.Children.toArray(props.children);
  const tab = childrenWithProps.length > 1 ? childrenWithProps[selectedTab] : undefined;

    const header = React.Children.map(props.children, (child, index) =>
      <button className='tab-button' onClick={() => onSelectTab(index)}>{child.props.header}</button>);

  return (
    <div>
      <div className='tab-header'>{header}</div>
      <div>
        {tab}
      </div>
    </div>
  );
};

export default Tabs;
