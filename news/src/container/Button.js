import React from 'react'
import { connect } from 'react-redux'
import { getdata } from '../actions'


let Button = (getdata,channel) => {
    <button
  onClick={() => { getdata(channel) }}
  className='btn btn-primary btn-lg btn-block' >
  Get top news
</button>
}