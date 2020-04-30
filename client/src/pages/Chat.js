import React, { Component } from "react";
import Footer from "../components/Footer";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import Navbar from "../components/Navbar";
import "./chat.css"

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      sender: auth().currentUser.email,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }





  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) { return b.timestamp - a.timestamp })
        this.setState({ chats });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });

      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }





  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
        sender: this.state.sender
      });
      this.setState({ content: '' });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getMonth()}/${(d.getDate() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }


  render() {
    return (



      <div className="container" >
        <Navbar />



        <div className="chat-area" ref={this.myRef}>


          <div className="row">

            <div className="col s2"></div>

            <div className="col s8">

              {/* loading indicator */}
              {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div> : ""}

              <form onSubmit={this.handleSubmit} className="mx-3">
                <div className="section">

                  <textarea className="form-control" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                  {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                </div>
                <div className="section">


                  <button type="submit" className="transparent z-depth-1 waves-effect waves-light btn"><i className='material-icons icon-creamyyy right'>
                    send
									</i>Send</button>
                </div>


              </form>



              {/* chat area */}
              {this.state.chats.map(chat => {
                return <p key={chat.timestamp} className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
                  {chat.content}
                  <br />
                  <span className="chat-time float-right"><small>{this.formatTime(chat.timestamp)} {chat.sender}</small></span>

                </p>
              })}


            </div>

            <div className="col s2"></div>


          </div>


        </div>

        <div>
          Logged in as: <strong className="text-info">{this.state.user.email}</strong>
        </div>
        <Footer />



      </div >
    );
  }
}
