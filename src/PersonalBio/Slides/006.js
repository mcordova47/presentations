import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'

export const Slide_6 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
      <h1>
        Whether intentionally or unintentionally, what’s one principle you
        tend to live by?
      </h1>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        I don't really have any intentional principles.  I generally just try to
        sort of maximize happiness.  I tried to think of some guidelines I tend
        to live by and something I came up with was:
      </PresenterNotes>
      <Step index={1}>
        Be receptive to new perspectives, while maintaining a healthy amount
        of skepticism.
      </Step>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        Not super pithy, but in general, when someone tells me something new, I
        try to put aside my biases and give their perspective a chance.  I'm
        fine with losing arguments.  I think "winning" and "losing" is kind of a
        weird way of framing arguments.  It's not really a bad thing to learn
        that a different perspective is right.
      </PresenterNotes>
  </CenteredContentSlide>
)
