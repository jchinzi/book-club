import React, {useEffect} from 'react';
import { connect } from 'react-redux';

// Import Reducer

import { loadMembers } from '../store/nextReducer';

function Next(props) {
  
  useEffect(() => {
    props.loadMembers();
  },[])

  return(
    <div>
      Let's See who's picking Next!
      <br />
      Coming Soon
    </div>
  )
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = {
  loadMembers
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);