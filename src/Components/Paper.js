import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Components.css'
import ViewServers from './A.ViewServers'
import ChatWindow from './ChatWindow'
import { connect } from 'react-redux';
import ViewChannels from './B.ViewChannels';
class PaperSheet extends Component{
  render(){
    console.log(this.props)
    return (
      
      <div>
        <Paper className='root'>
          <div className='title'>
            <Typography variant="h4" component="h3" className='title-main'>
              Chat Application
            </Typography>
            <Typography variant="h5" component="h2" className='topic-title'>
              Topic
            </Typography>
          </div>
          <div className='ChatContent'>
              <ViewServers/> 
              <ViewChannels/>
              <ChatWindow/>
          </div>
          <div className='Chatcontent'>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)

  return {
          Messages: state.msg, 
          Servers: state.newRoom
        }
}

export default connect(mapStateToProps)(PaperSheet)