import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'

export const Slide_9 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
    <h1>Why Contribute to a Traditional (Tax Deferred) 401k?</h1>
    <Step index={1}>
      <p>Lower your current tax burden</p>
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      Leaving you with
    </PresenterNotes>
    <Step index={2}>
      <p>More money to invest</p>
    </Step>
    <Step index={3}>
      <p>Pay taxes when your income is lower</p>
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      If you're planning on reaching FI, you're probably going to be living
      pretty frugally when you retire.  Also, if you're comfortable now, and
      you're saving, then you will be comfortable making less in the future
      when you're no longer saving.
    </PresenterNotes>
    <Step index={4}>
      <p>
        Downside: You can't access that money until you're 59 ½ (without paying
        a 10% tax penalty)
      </p>
    </Step>
    <PresenterNotes isPresenterMode={isPresenterMode}>
      This seems like a problem for early retirees.  If a big portion of your
      retirement is in a tax deferred account, how can you use that money in
      retirement.  Well for one thing, early retirees will probably be 59 ½
      someday, so they'll need some money for then and might as well get some
      tax advantages on that money.  But also, there is a way around that
      penalty.
    </PresenterNotes>
  </CenteredContentSlide>
)
