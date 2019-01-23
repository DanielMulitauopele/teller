import React, { Component } from 'react'
import "./TweetContainer"
// import Tweet from '../Tweet/Tweet'

class TweetContainer extends Component {
  constructor(props) {
    super(props)

    // const { analysis } = this.props

    this.state = {
      analysis: this.props.analysis
    }
  }

  render() {
    // const tweets = this.state.analysis.tweets.map(tweet => {
    //   return(
    //     <Tweet
    //       key={tweet.id}
    //       text={tweet.text} />
    //   )
    // })
    console.log(this.props.analysis)

    return(
      <div>
        <h1>TweetContainer</h1>
      </div>
    )
  }
}

export default TweetContainer
