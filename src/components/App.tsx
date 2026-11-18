import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";
import VoteStats from "./VoteStats";
import Nodeification from "./Notification";

function App() {
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
        <VoteStats />
        <Nodeification />
      </div>
    </>
  );
}

export default App;
