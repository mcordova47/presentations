import React from 'react'
import { ContentSlide } from 'react-presents'

const CenteredContentSlide = ({ children }) => (
    <ContentSlide style={{ textAlign: 'center', padding: '20px 125px' }}>
        {children}
    </ContentSlide>
)

export default CenteredContentSlide
