import React, {Component} from 'react';
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";

class ClickyGame extends Component {
    state = {
        fishThatWasTapped: 13,
        aquarium: [
            {
                source: "/images/1.jpg",
                id: 1,
                wasClicked: false
            },
            {
                source: "/images/2.jpg",
                id: 2,
                wasClicked: false
            },
            {
                source: "/images/3.jpg",
                id: 3,
                wasClicked: false
            },
            {
                source: "/images/4.jpg",
                id: 4,
                wasClicked: false
            },
            {
                source: "/images/5.jpg",
                id: 5,
                wasClicked: false
            },
            {
                source: "/images/6.jpg",
                id: 6,
                wasClicked: false
            },
            {
                source: "/images/7.jpg",
                id: 7,
                wasClicked: false
            },
            {
                source: "/images/8.jpg",
                id: 8,
                wasClicked: false
            },
            {
                source: "/images/9.jpg",
                id: 9,
                wasClicked: false
            },
            {
                source: "/images/10.jpg",
                id: 10,
                wasClicked: false
            },
            {
                source: "/images/11.jpg",
                id: 11,
                wasClicked: false
            },
            {
                source: "/images/12.jpg",
                id: 12,
                wasClicked: false
            }
        ]

    };

    onCardClick = (id) => {
        console.log(id);

        //search the element in the aquarium[] that has the 'id'
        this.state.aquarium.map((fish, index) => {
            
            // found the matching 'id'
            if(fish.id===id){
                //this fish has not been clicked
                if(this.state.aquarium[index]===false){
                    // increment score

                    // update high score
                } 
            }
        });
        
        //update the scoreBoard

        //shuffle the array




        // this.setState({fishThatWasTapped: index});
        
        // shuffle the array
        // this.state.aquarium.map((index) => {
        //     const randomIndex = Math.floor(Math.random()*12);
          
        //     //swap array elements, aquarium[index] <=> aquarium[randomNumber]
        //     // const currentElement = this.state.aquarium[index];
        //     // const newElement = this.state.aquarium[randomIndex];

        //     // this.setState({aquarium[index]})

        // });
    }

    render() {
        return (
            <div>
                <ScoreBoard/>
                <GameBoard aquarium={this.state.aquarium} onCardClick={this.onCardClick}/>
            </div>
        )
    }
}

export default ClickyGame;