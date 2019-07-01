import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import CharCard from "./components/CharCard";
import characters from "./marvel.json";

class App extends Component {
  state = {
    characters,
    clickedCharIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

  shuffleCard = id => {
    let clickedCharIds = this.state.clickedCharIds;

    if (clickedCharIds.includes(id)) {
      this.setState({
        clickedCharIds: [],
        score: 0,
        status: "GAME OVER!! YOU LOST THE WAR!"
      });
      return;
    } else {
      clickedCharIds.push(id);

      if (clickedCharIds.length === 12) {
        this.setState({
          clickedCharIds: [],
          score: 12,
          status: "YOU WON THE WAR!"
        });
        console.log("winner");
        return;
      }
      this.setState({
        characters,
        clickedCharIds,
        score: clickedCharIds.length,
        status: ""
      });
      for (let i = 0; i < characters.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>
          <h1>Infinity Clicks</h1>
          <p>Select all of the heroes, but don't select the same one twice!</p>
        </Title>
        <Score total={this.state.score} goal={12} status={this.state.status} />
        {this.state.characters.map(character => (
          <CharCard
            shuffleCard={this.shuffleCard}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
