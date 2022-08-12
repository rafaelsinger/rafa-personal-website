import {useState, useRef, useEffect} from "react";

type FadeInSectionProps = {
    children: JSX.Element
}


const DropdownSection = ({children}: FadeInSectionProps) => {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<any>();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current)
    }, []);

    return (
      <div
        className={`dropdown-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
}

export default DropdownSection;