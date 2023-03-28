import Profile from "../Profile";
import { Profiler, useCallback } from "react";

const Component = () => {
  const onRenderCallback = useCallback((id, phase) => {
    console.log({ id, phase });
  }, []);
  return (
    <Profiler id="gallery" onRender={onRenderCallback}>
      <section>
        <h2>Gallery</h2>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </section>
    </Profiler>
  );
};

export default Component;
