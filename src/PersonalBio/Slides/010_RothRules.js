import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'

export const Slide_10 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
    <h1>Roth IRA Rules</h1>
    <Step index={1}>
      <p>When you withdraw from a Roth IRA, contributions come out first</p>
    </Step>
    <Step index={2}>
      <p>
        You can withdraw contributions, but not earnings, from a Roth IRA at any
        time
      </p>
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      This makes sense.  You already paid taxes on them.
    </PresenterNotes>
    <Step index={3}>
      <p>
        You can convert a Traditional IRA to a Roth IRA at any time, paying the
        taxes owed, but not the 10% penalty
      </p>
    </Step>
    <Step index={4}>
      <p>
        Converted contributions can be withdrawn 5 years after the conversion
      </p>
    </Step>
  </CenteredContentSlide>
)
