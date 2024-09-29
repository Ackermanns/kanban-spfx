import * as React from 'react';

// Handles the Kanban board top level heading
interface IGreetingProps {
  name: string;
}

const Greeting: React.FunctionComponent<IGreetingProps> = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to the React world.</p>
    </div>
  );
};

export default Greeting;