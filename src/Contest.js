import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContestList = () => {
  const [codeforcesContests, setCodeforcesContests] = useState([]);
  const [atcoderContests, setAtcoderContests] = useState([]);

  useEffect(() => {
    const fetchCodeforcesContests = async () => {
      try {
        const response = await axios.get('https://codeforces.com/api/contest.list?gym=false');
        const upcomingContests = response.data.result.filter(contest => contest.phase === 'BEFORE');
        setCodeforcesContests(upcomingContests);
      } catch (error) {
        console.error('Error fetching Codeforces contests:', error);
      }
    };

    const fetchAtcoderContests = async () => {
      try {
        const response = await axios.get('https://kenkoooo.com/atcoder/resources/contests.json');
        const upcomingContests = response.data.filter(contest => new Date(contest.start_epoch_second * 1000) > new Date());
        setAtcoderContests(upcomingContests);
      } catch (error) {
        console.error('Error fetching AtCoder contests:', error);
      }
    };

    fetchCodeforcesContests();
    fetchAtcoderContests();
  }, []);

  const calculateCountdown = startTimeSeconds => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const timeRemaining = startTimeSeconds - nowInSeconds;

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h1>Upcoming Contests</h1>

      <h2>Codeforces Contests</h2>
      <ul>
        {codeforcesContests.map(contest => (
          <li key={contest.id}>
            <p>{contest.name}</p>
            <p>Start Time: {new Date(contest.startTimeSeconds * 1000).toLocaleString()}</p>
            <p>Countdown: {calculateCountdown(contest.startTimeSeconds)}</p>
          </li>
        ))}
      </ul>

      <h2>AtCoder Contests</h2>
      <ul>
        {atcoderContests.map(contest => (
          <li key={contest.id}>
            <p>{contest.title}</p>
            <p>Start Time: {new Date(contest.start_epoch_second * 1000).toLocaleString()}</p>
            <p>Countdown: {calculateCountdown(contest.start_epoch_second)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestList;
