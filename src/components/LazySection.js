import { useEffect, useRef, useState } from "react";

export default function LazySection({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing after load
        }
      },
      {
        rootMargin: "100px" // load slightly before visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ height: "200px" }} />}
    </div>
  );
}