import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'

export const Slide_8 = ({ isPresenterMode }) => (
    <CenteredContentSlide>
        <h1>Types of Investments</h1>
        <PresenterNotes isPresenterMode={isPresenterMode}>
          First I'll quickly go over types of investments.
        </PresenterNotes>
        <Step index={1}>
          <p>Tax Deferred</p>
        </Step>
        <PresenterNotes isPresenterMode={isPresenterMode}>
          Defer paying taxes until you withdraw.
        </PresenterNotes>
        <Step index={2}>
          <p>Roth</p>
        </Step>
        <PresenterNotes isPresenterMode={isPresenterMode}>
          Pay taxes now, but contributions and earnings are tax-free when you
          withdraw.
        </PresenterNotes>
        <Step index={3}>
          <p>Taxable</p>
        </Step>
        <PresenterNotes isPresenterMode={isPresenterMode}>
          Pay taxes now, but contributions are tax-free when you withdraw, but
          earnings are taxed at the capital gains rate.
        </PresenterNotes>
    </CenteredContentSlide>
)
