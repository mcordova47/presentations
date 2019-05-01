import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'
import Image from '../Components/Image'
import cookies from '../images/cookies.jpg'

export const Slide_2 = ({ isPresenterMode }) => (
    <CenteredContentSlide>
        <h1>What is your favorite food?</h1>
        <PresenterNotes isPresenterMode={isPresenterMode}>
          This was a tough one, I like trying new things and it's hard to pick
          a favorite.  But when I think of what I crave most often, it's
          definitely chocolate chip cookies.
        </PresenterNotes>
        <Step index={1}>
          <h2>Chocolate Chip Cookies</h2>
          <Image src={cookies} alt="cookies" />
        </Step>
        <PresenterNotes isPresenterMode={isPresenterMode}>
          Side note, I do love cookie dough, but I prefer cookies.
        </PresenterNotes>
    </CenteredContentSlide>
)
