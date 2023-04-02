import { Profiler, useCallback } from "react";

const App = () => {
  const onRenderCallback = useCallback((id, phase) => {
    console.log({ id, phase });
  }, []);

  return (
    <Profiler id="app" onRender={onRenderCallback}>
      <div />
    </Profiler>
  );
};

export default App;
