import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGreetings, selectIsLoading, selectError, fetchGreetings,
} from '../redux/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector(selectGreetings);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const RandomGreeting = () => {
    if (greetings.length === 0) {
      return null; 
    }
    const randomIndex = Math.floor(Math.random() * greetings.length - 1);
    return greetings[randomIndex];
  };

  const renderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error loading greetings. Please try again later.</p>;
    }

    const randomGreeting = RandomGreeting();
    return <h1>{randomGreeting && randomGreeting.message}</h1>;
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default Greeting;
