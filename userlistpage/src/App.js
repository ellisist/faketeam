import React, { Component } from 'react'
import { login } from './util/Auth'
import './App.css'
import { USERNAME, PASSWORD } from './secret.js'  // secret.js not included in git
import { apiClient } from './util/ApiClient.js'



function TeamMember(props) {
  return (
    <div>
      { props.data.name_first + " " + props.data.name_last}
    </div>
)
}

function TeamList(arr) {
  let team = []
  for(let member of arr){
    team.push(
      <li key={member.email}>
        <TeamMember data={member} />
      </li>
    )
  }
  return team;
}

function Team(props) {
  let teamlist = TeamList(props.data)
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
