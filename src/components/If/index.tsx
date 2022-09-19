import React from "react";

interface IfProps extends React.PropsWithChildren {
  condition: boolean;
}

const If = ({ children, condition }: IfProps): JSX.Element | null => {
  return <>{condition ? children : null}</>;
};

export default If;
