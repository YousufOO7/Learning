import PropTypes from 'prop-types';

const About = props => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center underline text-primary">About</h2>
            <div className='py-2'>
                <p>Welcome to  <b>A Vocabulary Learning Application</b>, your ultimate destination for fun and interactive language learning!

                    Our mission is simple: to make expanding your vocabulary and improving your communication skills an enjoyable and seamless experience. We understand that learning a new language, especially memorizing vocabulary, can feel overwhelming. That's why we’ve designed an engaging platform to turn this challenge into an exciting journey.

                    With our innovative tools and activities, you’ll discover easier ways to master new words and phrases across multiple languages. Whether you’re a beginner or looking to refine your skills, [Your Website Name] provides an adaptive and personalized approach to help you learn at your own pace.

                    Dive into a world of word games, flashcards, quizzes, and interactive exercises that make learning both effective and fun. Join us and take the first step toward becoming a confident communicator in any language!</p>
            </div>
        </div>
    );
};

About.propTypes = {

};

export default About;