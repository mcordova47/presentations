import React from 'react'
import {
  Presentation,
  PresenterModePlugin,
  Slide,
} from 'react-presents'
import {
  Slide_1,
  Slide_2,
  Slide_3,
  Slide_4,
  Slide_5,
  Slide_6,
  Slide_7,
  Slide_8,
  Slide_9,
  Slide_10,
  Slide_11,
  Slide_12,
} from './Slides'

export const PersonalBio = () => (
  <Presentation>
    <PresenterModePlugin />
    <Slide component={Slide_1} />
    <Slide component={Slide_2} />
    <Slide component={Slide_3} />
    <Slide component={Slide_4} />
    <Slide component={Slide_5} />
    <Slide component={Slide_6} />
    <Slide component={Slide_7} />
    <Slide component={Slide_8} />
    <Slide component={Slide_9} />
    <Slide component={Slide_10} />
    <Slide component={Slide_11} />
    <Slide component={Slide_12} />
  </Presentation>
)
