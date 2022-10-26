import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    givingFeedback: false,
  }

  emojiClicked = () => {
    this.setState({givingFeedback: true})
  }

  feedBcak = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="cardContainer">
        <h1 className="cardHeading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="emoji-btn"
                type="button"
                onClick={this.emojiClicked}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankYouContainer">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankYou-Heading">Thank You!</h1>
        <p className="para-thankyou">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {givingFeedback} = this.state

    return (
      <div className="bgContainer">
        <div className="feedBack">
          {givingFeedback ? this.thankYou() : this.feedBcak()}
        </div>
      </div>
    )
  }
}

export default Feedback
