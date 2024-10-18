import { useEffect, useRef, useState } from 'react';
import styles from './Slide.module.scss';
import { SlideProps } from './type';

function Slide({ children }: Readonly<SlideProps>) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth);
    }
  }, [children]);

  return (
    <span className={styles.slide} style={{ width }}>
      <span ref={spanRef}>{children}</span>
    </span>
  );
}

export default Slide;
