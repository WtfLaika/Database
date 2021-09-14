import React, { useEffect } from "react";

//@ts-ignore
export const Radio: React.FC = React.forwardRef(
  //@ts-ignore
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      //@ts-ignore
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return (
      <>
        {/*@ts-ignore*/}
        <input type="radio" ref={resolvedRef} {...rest} />
      </>
    );
  }
);
