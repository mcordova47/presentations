import React from 'react'
import {
    Presentation,
    PresenterModePlugin,
    Slide,
    TitleSlide,
} from 'react-presents'
import {
    Slide_1,
    Slide_2,
} from './Slides'

export const PersonalBio = () => (
    <Presentation>
        <PresenterModePlugin />
        <Slide component={Slide_1} />
        <Slide component={Slide_2} />
    </Presentation>
)
