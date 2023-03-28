import { Profiler, useCallback } from "react";
import Card from "../Card";
import Avatar from "../Avatar";
const Component = () => {
  const onRenderCallback = useCallback((id, phase) => {
    console.log({ id, phase });
  }, []);

  return (
    <Profiler id="profile" onRender={onRenderCallback}>
      <Card>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <span>Person</span>
      </Card>
    </Profiler>
  );
};

export default Component;
