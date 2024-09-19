import AddQb from "../components/AddQb";
import Quarterback from "../components/Quarterback";
import FootballField from "../components/FootballField";

export default function Home() {
  
    return (
    <div>
      <Quarterback/>
      <hr />
      <AddQb />
      <h1>Play with the ball</h1>
      <FootballField />
    </div>
    
    );

};