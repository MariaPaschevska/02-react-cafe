import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";
import VoteStats from "./VoteStats";
import Notification from "./Notification";
import { useState } from "react";
import type { Votes, VoteType } from "../types/votes";

function App() {
  const initialVotes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [votes, setClicks] = useState<Votes>(initialVotes);
  const handleVote = (type: VoteType) => {
    setClicks({ ...votes, [type]: votes[type] + 1 });
  };
  const resetVotes = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
        <Notification />
      </div>
    </>
  );
}

export default App;
