 
import './App.css';
import React from 'react';
 
 
class Starwars extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name: null,
      height: null,
      homeworld: null,
      films: null,
      image:null,
      loadpage:false,
 
 
 
    }
 
 
 
  }
  
 
  render(){
 
    return(
 
      <div className= "container">
 
        <h1> Star Wars</h1>
 
        <div>
          { this.state.loadpage &&
          <div>
          <h3> {this.state.name}</h3>
         
            
           <p><img  src= {this.state.image} alt="images" className="img"/> </p>
            
          <h3> {this.state.height} m</h3>
          <h3> Homeworld: {this.state.homeworld} </h3>
          <ul>
           
           
         
         
          </ul>
         
           </div>
           
           }
       
          <button onClick= {() =>this.Generate()} id="btn">Generate New Character</button>
 
 
        </div>
 
 
 
 
 
      </div>
 
 
 
    )
 
 
  }



  Generate () {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
fetch(url)
.then(response => response.json())
.then(data =>  {
 
  this.setState({
  name: data.name,
  height: data.height,
  homeworld:data.homeworld,
  films: data.films,
  image: data.image,
  loadpage: true
})
});
 
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
function App() {
  return (
    <div className="App">
      <Starwars/>
    </div>
  );
}
 
export default App;
 

