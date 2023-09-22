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

export default function ProjectCarousel({ projects }) {
    return (
        <>
            <Swiper
                grabCursor={true}
                loop={true}
                navigation={{enabled:true}}
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                pagination={{ clickable: true, dynamicBullets: true }}
                effect='coverflow'
                className='swiper'
                a11y={{enabled:true}}
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