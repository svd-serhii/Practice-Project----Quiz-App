import React, { useState } from "react";

const Quiz = () => {
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);

	return <p>Currently active Quiz</p>;
};

export default Quiz;
