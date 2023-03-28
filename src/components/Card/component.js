import { Profiler, useCallback } from "react";

const Component = ({ children }) => {
  const onRenderCallback = useCallback((id, phase) => {
    console.log({ id, phase });
  }, []);
  return (
    <Profiler id="card" onRender={onRenderCallback}>
      <div>{children}</div>
    </Profiler>
  );
};

export default Component;
