import React, {Component} from 'react';
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import sourceArray from "./images"

class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,
        aquarium: sourceArray
        // aquarium: [
        //     {
        //         source: "/images/1.jpg",
        //         id: 1,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/2.jpg",
        //         id: 2,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/3.jpg",
        //         id: 3,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/4.jpg",
        //         id: 4,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/5.jpg",
        //         id: 5,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/6.jpg",
        //         id: 6,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/7.jpg",
        //         id: 7,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/8.jpg",
        //         id: 8,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/9.jpg",
        //         id: 9,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/10.jpg",
        //         id: 10,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/11.jpg",
        //         id: 11,
        //         wasClicked: false
        //     },
        //     {
        //         source: "/images/12.jpg",
        //         id: 12,
        //         wasClicked: false
        //     }
        // ]


    };

    onCardClick = (id) => {
        console.log(id);

        let aquarium2 = this.state.aquarium

        // need to find the array element  that hold the 'id'
        const index = aquarium2.findIndex(element => {
            return element.id===id
        });    

        //exit if not found
        if(index===-1) return false;

        //this fish has not been clicked
        if(aquarium2[index].wasClicked===false){
            //set to TRUE
            aquarium2[index].wasClicked=true;
            console.log(`SAFE: ${index}`);
            
            // increment score and high Score
            let currentScore = this.state.score + 1;
            let currentHighScore = this.state.highScore;

            if(currentScore > currentHighScore){
                currentHighScore = currentScore;
            }

            this.setState({
                score: currentScore,
                highScore: currentHighScore
            })

            // GAMEOVER
        } else {
            
            // set "wasClicked" to false to start a new game
            aquarium2.forEach(fish => {
                fish.wasClicked = false;
            });

            // reset the score
            this.setState({score: 0})
            console.log("WRONG");
        }

        //run the shuffle
        const shuffledAquarium = this.shuffleArray(aquarium2);

        // save the array back to the state
        this.setState({aquarium: shuffledAquarium});
        // console.log(this.state.aquarium);
    }        

    shuffleArray(arr){
 
        // shuffle the array
        arr.map((element ,index) => {
            const randomIndex = Math.floor(Math.random()*parseInt(arr.length));
            // console.log(`INDEX: ${index}    RANDOM: ${randomIndex}`);
            //swap array elements, aquarium[index] <=> aquarium[randomNumber]
            const original = arr[index];
            arr[index] = arr[randomIndex];
            arr[randomIndex] = original;
        });
        // console.log("Shuffled");
        // console.log(arr);
        return arr;
    }

    render() {
        return (
            <div>
                <ScoreBoard score={this.state.score} highScore={this.state.highScore} />
                <GameBoard aquarium={this.state.aquarium} onCardClick={this.onCardClick}/>
            </div>
        )
    }
}

export default ClickyGame;