import PropTypes from 'prop-types';

const Banner = props => {
    return (
        <div className='w-10/12 mx-auto py-3'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero h-[500px]"
                        style={{
                            backgroundImage: "url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/04/find-google-sheets-templates.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-lg md:text-xl lg:text-2xl  font-bold"> Learn Languages Anytime, Anywhere!</h1>
                                <p className="mb-5">
                                
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-xs btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-xs">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero h-[500px]"
                        style={{
                            backgroundImage: "url(https://i0.wp.com/theesleducator.com/wp-content/uploads/2022/12/vocabulary-games-esl.png?fit=1600%2C1600&ssl=1)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl font-bold">Expand Your Vocabulary with Fun Games</h1>
                                <p className="mb-5">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle btn-xs">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-xs">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div
                        className="hero h-[500px]"
                        style={{
                            backgroundImage: "url(https://i.ytimg.com/vi/70UFO1_7ffQ/maxresdefault.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl font-bold">Start Your Journey to Fluent Communication Today</h1>
                                <p className="mb-5">

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle btn-xs">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-xs">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    props: PropTypes
};

export default Banner;