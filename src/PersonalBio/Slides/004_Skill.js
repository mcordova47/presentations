import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import Image from '../Components/Image'
import PresenterNotes from '../../Components/PresenterNotes'
import guitar from '../images/guitar.jpg'

export const Slide_4 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
    <h1>What’s one skill that you have but never get to use at work?</h1>
    <Step index={1}>
      <h2>Playing the Guitar</h2>
      <Image src={guitar} alt="guitar" />
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      I've been playing since middle school.  I really only play my
      accoustic these days and probably will as long as I'm living in a tiny
      apartment.  Lately I've been playing mostly finger-picking stuff like
      <em>Blackbird</em>, <em>Cello Song</em> by Nick Drake and
      <em>The Boxer</em> by Simon & Garfunkel.
    </PresenterNotes>
  </CenteredContentSlide>
)
