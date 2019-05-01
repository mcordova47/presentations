import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'
import Image from '../Components/Image'
import fire from '../images/fire.jpg'

export const Slide_5 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
    <h1>What was the last hobby you pursued and why?</h1>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      Really the last hobby I picked up was learning about functional
      programming, but before that I was pretty into:
    </PresenterNotes>
    <Step index={1}>
      <h2>Personal Finance & FIRE</h2>
      <Image src={fire} alt="fire" />
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      I don't know if it really counts as a hobby, but I used to read a bunch
      about it.  If you haven't heard of it, FIRE stands for:
    </PresenterNotes>
    <Step index={2}>
      <p>Financial Independence / Retire Early</p>
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      Financial independence sounds fancy, but it's just having enough money
      invested that you can live off of your returns.  The basic idea is:
    </PresenterNotes>
    <Step index={3}>
      <p>Be frugal and invest as much as you can</p>
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      If you live on less, the benefit is
      twofold.  You have more savings which will compound and you don't need as
      much money to live on, so the total amount you need to be financially
      independent is lower.  For a while I was listening to a lot of podcasts
      and reading a lot of blogs about it.  Things like:
    </PresenterNotes>
    <Step index={4}>
      <p>Mad Fientist, ChooseFI, J L Collins' Stock Series, Mr Money Mustache</p>
    </Step>
  </CenteredContentSlide>
)
