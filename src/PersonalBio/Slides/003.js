import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'

export const Slide_3 = ({ isPresenterMode }) => (
    <CenteredContentSlide>
        <h1>
          What is a good book, movie, or TV show you’ve recently experienced
          that you’d recommend?
        </h1>
        <Step index={1}>Homestuck</Step>
    </CenteredContentSlide>
)
