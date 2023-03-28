import { Profiler, useCallback } from "react";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Component = () => {
  const onRenderCallback = useCallback((id, phase) => {
    console.log({ id, phase });
  }, []);
  return (
    <Profiler id="to-do-list" onRender={onRenderCallback}>
      <section style={person.theme}>
        <h2>{person.name}</h2>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </section>
    </Profiler>
  );
};

export default Component;
