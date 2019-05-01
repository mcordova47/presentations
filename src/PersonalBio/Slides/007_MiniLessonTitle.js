import React from 'react'
import { TitleSlide } from 'react-presents'

import PresenterNotes from '../../Components/PresenterNotes'

export const Slide_7 = ({ isPresenterMode }) => (
    <TitleSlide>
        <h1>Mini-Lesson: Roth Conversion Ladders</h1>
        <h2>
          How to Retire Early <em>and</em>&nbsp; Defer Taxes
        </h2>
        <PresenterNotes isPresenterMode={isPresenterMode}>
          I'm not sure whether any of this is relevant for those of us outside
          the US, but I think it's a kind of interesting thing, anyway.
        </PresenterNotes>
    </TitleSlide>
)
