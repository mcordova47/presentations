import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'
import Image from '../Components/Image'
import rothConversionLadder from '../images/roth-conversion-ladder.png'

export const Slide_11 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      Those rules lead to an interesting way of getting your 401k money early
      called the:
    </PresenterNotes>
    <h1>Roth IRA Conversion Ladder</h1>
    <Image src={rothConversionLadder} alt="roth conversion ladder" />
    <Step index={1}>
      <p>Rollover 401k into an IRA</p>
    </Step>
    <Step index={2}>
      <p>Convert x amount from Traditional IRA to Roth IRA</p>
    </Step>
    <Step index={3}>
      <p>5 years later you can withdraw that money</p>
    </Step>
  </CenteredContentSlide>
)
