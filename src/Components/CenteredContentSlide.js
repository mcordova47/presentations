import React from 'react'
import { ContentSlide } from 'react-presents'

const CenteredContentSlide = ({ children }) => (
    <ContentSlide style={{ textAlign: 'center', margin: '0 100px' }}>
        {children}
    </ContentSlide>
)

export default CenteredContentSlide
