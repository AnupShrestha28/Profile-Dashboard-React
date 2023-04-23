import TableHeader from "./components/TableHeader";
import data from './data.json';
import './assets/css/Title.css';
import NameList from './components/NameList.js';
import Post from './components/Post.js';
import Status from "./components/Status";
import Progress from "./components/Progress.js";
import ActionEvent from "./components/ActionEvent.js";

function App() {
  return (
   <>
    <h2 className="title-info">{data.company_name}</h2>
    <TableHeader />

    {data.users.map((user) => {
      return(
            <>
                <NameList fullName={user.full_name} />
                <Post position = {user.designation} />
                <Status status = {user.active_status}/>
                <Progress ProgressTotal = {user.download_completed_rate.total}
                          progressComplete = {user.download_completed_rate.completed}
                          progressSize = {user.download_completed_rate.size_type}
                />
                <ActionEvent action = {user.invited_status} />
            </>
        );
      })}
   </>
  );
}

export default App;
