import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination, Navigation, A11y } from 'swiper/modules';
import ProjectCard from '../ProjectCard/ProjectCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/effect-cube'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProjectCarousel.css';
import { useEffect } from 'react';

export default function ProjectCarousel({ projects }) {
    useEffect(() => {
        // very hacky way for accessibility to work properly
        const handleReverseTab = (e) => {
            if (e.key === 'Tab' && e.shiftKey) {
                e.preventDefault();
            const elemToFocus = document.querySelector(".swiper-slide-visible.swiper-slide-active .project-card__footer__deployment-link .link:last-of-type [tabindex=\"0\"]");
                if (elemToFocus) {
                    elemToFocus.focus();
                }
            }
        }
        const prevBtn = document.querySelector('.swiper-button-prev');
        prevBtn.addEventListener("keydown", handleReverseTab);
        return () => prevBtn.removeEventListener("keydown", handleReverseTab);
    }, []);
    return (
        <>
            <Swiper
                grabCursor={true}
                loop={true}
                navigation={{ enabled: true }}
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                pagination={{ clickable: true, dynamicBullets: true }}
                effect='coverflow'
                className='swiper'
                a11y={{
                    enabled: true,
                    lastSlideMessage: '',
                    firstSlideMessage: '',
                    prevSlideMessage: 'Previous Project Card',
                    nextSlideMessage: 'Next Project Card',
                    paginationBulletMessage: 'Go to card {{index}}'
                }}
                centeredSlides={true}
            >
                {
                    projects.map((project, idx) => {
                        return (

                            <SwiperSlide key={`proj-card-${idx}`} className='slide'>
                                <ProjectCard {...project} />
                            </SwiperSlide>

                        );
                    })
                }
            </Swiper>
        </>
    );
}