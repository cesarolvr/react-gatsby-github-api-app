import React from "react";
interface IfProps {
  condition: boolean;
  renderIf: React.ReactElement;
  renderElse?: React.ReactElement;
}

const If = ({ condition, renderIf, renderElse }: IfProps): JSX.Element => {
  return <>{condition ? renderIf : renderElse}</>;
};

export default If;
