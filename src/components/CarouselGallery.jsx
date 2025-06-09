import React, { useState, useEffect, useCallback } from 'react';









const CarouselGallery = ({ children, autoplayInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    // Memoized function for next slide to be used in autoplay
    const showNextSlide = useCallback(() => {
        const totalItems = React.Children.count(children);
        const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, [children, itemsPerView]); // Dependencies for useCallback

    // Effect for responsiveness (items per view based on screen size)
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3); // Large screens: 3 items
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2); // Medium screens: 2 items
            } else {
                setItemsPerView(1); // Small screens: 1 item
            }
        };

        updateItemsPerView(); // Set initial items per view
        window.addEventListener('resize', updateItemsPerView); // Update on resize

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

    // Effect for Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            showNextSlide();
        }, autoplayInterval);

        // Clear interval on component unmount or when dependencies change
        return () => clearInterval(interval);
    }, [autoplayInterval, showNextSlide]); // Restart interval if autoplayInterval or showNextSlide changes

    const totalItems = React.Children.count(children);
    const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    };

    // Calculate the transform value for the carousel content
    const transformValue = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;

    return (
        <div className="relative w-11/12 mx-auto my-5 overflow-hidden rounded-lg shadow-lg border border-gray-200">
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: transformValue,
                        width: `${(totalItems / itemsPerView) * 100}%`, // Adjust width dynamically
                    }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            className="flex-shrink-0 p-4 border-r border-gray-100 last:border-r-0"
                            key={index}
                            style={{ flexBasis: `${100 / itemsPerView}%` }} // Adjust item width
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full cursor-pointer text-2xl hover:bg-opacity-75 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={handlePrev}
                aria-label="Previous slide"
            >
                &#8249; {/* Left arrow */}
            </button>
            <button
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full cursor-pointer text-2xl hover:bg-opacity-75 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={handleNext}
                aria-label="Next slide"
            >
                &#8250; {/* Right arrow */}
            </button>
        </div>
    );
};

export default CarouselGallery;