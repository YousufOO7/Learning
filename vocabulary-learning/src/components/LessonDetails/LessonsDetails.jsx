import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';

const LessonsDetails = props => {
    const singleData = useLoaderData();
    const [modalData, setModalData] = useState({});

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'bg-green-300';
            case 'medium':
                return 'bg-yellow-300';
            case 'hard':
                return 'bg-red-300 text-white';
            default:
                return 'bg-red-600 text-white';
        }
    };

    const playSound = (word) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 1; 
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Speech Synthesis not supported in this browser.');
        }
    };

    const openMOdal = data => {
        playSound(data.word);
        setModalData(data);
        document.getElementById('my_modal_1').showModal();
    }

    return (
        <div>
            <div className='mb-5'>
                <Navbar></Navbar>
            </div>
            <div className='w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden'>

                {
                    singleData.map(data => <div className={`card  shadow-xl ${getDifficultyClass(data.difficulty)}`}>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-5xl">{data.word}</h2>
                            <p>Meaning: {data.meaning}</p>
                            <p>Pronunciation: {data.pronunciation}</p>
                            <p>Part Of Speech: {data.part_of_speech}</p>
                            <p>Difficulty: {data.difficulty}</p>
                            <div className="card-actions">
                                <button
                                    onClick={() => openMOdal(data)}
                                    className="btn btn-primary">When to say</button>
                                <Link to="/start-learning" className="btn btn-primary">Back to Lesson</Link>
                            </div>
                        </div>
                    </div>)
                }
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Word: {modalData.word}</h3>
                        <p className="py-4">Meaning: {modalData.meaning}</p>
                        <p className="py-4">When to  say: {modalData.when_to_say}</p>
                        <p className="py-4">Example: {modalData.example}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

LessonsDetails.propTypes = {

};

export default LessonsDetails;