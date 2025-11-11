"use client";

import {
  Children,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  childWidth?: string;
};

export function HorizontalScroll({
  children,
  className,
  childWidth = "min(90vw, 540px)",
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      wrapper.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let startX = 0;
    let scrollStart = 0;

    const onPointerDown = (event: PointerEvent) => {
      wrapper.setPointerCapture(event.pointerId);
      startX = event.clientX;
      scrollStart = wrapper.scrollLeft;
      setIsDragging(true);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const delta = startX - event.clientX;
      wrapper.scrollLeft = scrollStart + delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!wrapper.hasPointerCapture(event.pointerId)) return;
      wrapper.releasePointerCapture(event.pointerId);
      setIsDragging(false);
    };

    wrapper.addEventListener("pointerdown", onPointerDown);
    wrapper.addEventListener("pointermove", onPointerMove);
    wrapper.addEventListener("pointerup", onPointerUp);
    wrapper.addEventListener("pointerleave", onPointerUp);

    return () => {
      wrapper.removeEventListener("pointerdown", onPointerDown);
      wrapper.removeEventListener("pointermove", onPointerMove);
      wrapper.removeEventListener("pointerup", onPointerUp);
      wrapper.removeEventListener("pointerleave", onPointerUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden",
        "cursor-grab",
        isDragging && "cursor-grabbing",
        className
      )}
      tabIndex={0}
    >
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className="snap-center"
          style={{ minWidth: childWidth }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
