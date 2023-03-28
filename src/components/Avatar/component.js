import { getImageUrl } from "../utils";
import { useCallback, Profiler } from "react";
const Component = ({ person, size }) => {
  const onRenderCallback = useCallback((id, phase) => {
    console.log({ id, phase });
  }, []);
  return (
    <Profiler id="avatar" onRender={onRenderCallback}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </Profiler>
  );
};
export default Component;
