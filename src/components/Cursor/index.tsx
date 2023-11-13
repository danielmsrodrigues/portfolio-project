import { useEffect, useRef } from "react";
import { Blob, Blur } from "./styles";

const Cursor: React.FC = () => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      blobRef.current?.animate(
        [{ left: `${clientX + scrollX}px`, top: `${clientY + scrollY}px` }],
        { duration: 3000, fill: "forwards" }
      );
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <Blob id="blob" ref={blobRef}></Blob>
      <Blur id="blur"></Blur>
    </>
  );
};

export default Cursor;
