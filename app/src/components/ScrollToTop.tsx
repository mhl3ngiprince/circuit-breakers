import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating "back to top" button that appears once the user
 * has scrolled a meaningful distance down the page.
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg
        flex items-center justify-center transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
