import React from 'react'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'
import Image from '../Components/Image'
import traditionalVsRoth from '../images/traditional-vs-roth.jpg'

export const Slide_12 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
    <h1>Comparison of Roth vs. Traditional</h1>
    <Image src={traditionalVsRoth} alt="traditional vs roth" />
    <PresenterNotes isPresenterMode={isPresenterMode}>
      The Mad Fientist ran some numbers for a certain scenario and compared the
      results of an investor who maxes out a Roth IRA vs. an investor who maxes
      out a Traditional IRA.  They have equal amounts in their IRAs until they
      retire, but Investor B has more money to invest in an after tax account,
      because they deferred some taxes, so their money grows more quickly than
      Investor A's.
    </PresenterNotes>
  </CenteredContentSlide>
)
