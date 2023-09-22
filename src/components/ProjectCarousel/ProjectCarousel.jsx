import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination, Navigation, A11y, EffectFade, EffectCube } from 'swiper/modules';
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
                navigation
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                pagination={{ clickable: true, dynamicBullets: true }}
                effect='coverflow'
                className='swiper'
                // coverflowEffect={{
                //     depth: 50,
                //     stretch:0,
                //     rotate: 50,
                //     slideShadows:false
                // }}
                a11y
                centeredSlides={true}
                // spaceBetween={-500}
            >
                {
                    projects.map((project, idx) => {
                        return (
                            <>
                                <SwiperSlide className='slide'>
                                    <ProjectCard {...project} key={`proj-card-${idx}`} />
                                </SwiperSlide>
                            </>
                        );
                    })
                }
            </Swiper>
        </>
    );
}