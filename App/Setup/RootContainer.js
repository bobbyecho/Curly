import React from 'react';
import App from './App';

export default function WrappedComponent(Component) {
  return function inject(props) {
    console.log(props);
    const EnhancedComponent = () => {
      return (
        <App>
          <Component {...props} />
        </App>
      );
    };

    return <EnhancedComponent />;
  };
}
