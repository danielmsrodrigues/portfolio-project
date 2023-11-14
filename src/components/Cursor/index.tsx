import { useEffect, useRef } from "react";
import { Blob, Blur } from "./styles";

const Cursor: React.FC = () => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Assuming you have a footer with the ID "footer"
      const footerElement = document.getElementById("footer");

      // Calculate the maxY based on the footer position
      const maxY = footerElement
        ? Math.min(
            scrollY + window.innerHeight - blobRef.current!.clientHeight,
            footerElement.getBoundingClientRect().top +
              scrollY -
              blobRef.current!.clientHeight
          )
        : scrollY + window.innerHeight - blobRef.current!.clientHeight;

      const constrainedX = clientX + scrollX;
      const constrainedY = Math.min(clientY + scrollY, maxY);

      blobRef.current?.animate(
        [{ left: `${constrainedX}px`, top: `${constrainedY}px` }],
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
