import React, { Component } from 'react'
import { login } from './util/Auth'
import './App.css'
import { USERNAME, PASSWORD } from './secret.js'  // secret.js not included in git
import { apiClient } from './util/ApiClient.js'



function TeamMember(props) {
  return (
    <div style={{"display": "flex", "justifyContent": "space-around", "margin": "2rem"}}>
      <p>{props.data.name_first + " " + props.data.name_last}</p>
      <p>{props.data.email}</p>
      <img src={props.data.picture_large} alt={"User image for " + props.data.name_first + " " + props.data.name_last} style={{"order": "-1"}}/>
    </div>
)
}

function Team(props) {
  let teamlist = []
  for (let member of props.data){
    teamlist.push(
      <TeamMember data={member} key={member.email} />
    )
  }
  return (
    <ul>
      {teamlist}
    </ul>
  )
}


class App extends Component{
  constructor() {
    super()
    this.state = {data: []}
  }

  componentDidMount() {
    login(USERNAME, PASSWORD)
      .then(() => 
            apiClient().get('persons/'))
      .then(res => {
        console.log(res)
        this.setState({data: res.data})
      })
  }

  render() {
    return (
        <Team data={this.state.data} />
    )
  }
}

export default App;
