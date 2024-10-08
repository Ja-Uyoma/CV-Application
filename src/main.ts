import { MutableRefObject, useEffect, useState } from "react";

export function useOpenStatus(
  elementRef: MutableRefObject<HTMLElement | null>
) {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClicked = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const e = elementRef.current;

    if (e && isOpen) {
      e.classList.remove("collapse-close");
      e.classList.add("collapse-open");
    } else if (e && !isOpen) {
      e.classList.remove("collapse-open");
      e.classList.add("collapse-close");
    }
  }, [isOpen, elementRef]);

  return onButtonClicked;
}
