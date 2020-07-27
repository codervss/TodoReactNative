import React from 'react'
import moment from 'moment'

const greetingText = () => {
    const now = moment()
    const currentHour = now.hour()
    console.log('Hour', currentHour);
    
      if (currentHour >= 12 && currentHour <=17) return "Good Afternoon,"
      else if (currentHour >= 18) return "Good Evening,"
      else return "Good Morning,"
  }

  export default greetingText