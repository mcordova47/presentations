import React from 'react'
import { Step } from 'react-presents'

import CenteredContentSlide from '../../Components/CenteredContentSlide'
import PresenterNotes from '../../Components/PresenterNotes'
import Image from '../Components/Image'
import first from '../images/homestuck/first.gif'
import hero from '../images/homestuck/hero.gif'
import hussnasty from '../images/homestuck/hussnasty.gif'
import meta from '../images/homestuck/meta.gif'
import crappy from '../images/homestuck/crappy.gif'
import blurry from '../images/homestuck/blurry.gif'

export const Slide_3 = ({ isPresenterMode }) => (
  <CenteredContentSlide>
      <h1>
        What is a good book, movie, or TV show [or webcomic] you’ve recently experienced
        that you’d recommend?
      </h1>
      <Step index={1}>
        <h2>Homestuck</h2>
      </Step>
      <Step index={1} exact>
        <Image src={first} alt="first" />
      </Step>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        I recently finished this webcomic, Homestuck, and it's one of my
        favorite things I've read.  I started reading it in college, but the
        author took a year-long hiatus so I finally just got around to
        re-reading it.
      </PresenterNotes>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        On the surface, homestuck is about a bunch of kids who are internet
        friends who start playing this Sims-esque video game together and end up
        having to save existence.  But the style the story is told in is really
        great.  It's told as if it's one of those text adventure games and in
        the beginning the author would even take reader input for the command
        prompts, and even after that stopped there were a lot of interactive
        elements of the story.
      </PresenterNotes>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        There are also a lot of writing styles and a lot of art styles
        throughout.
      </PresenterNotes>
      <Step index={2} exact>
        <Image src={hero} alt="hero" />
      </Step>
      <Step index={3} exact>
        <Image src={hussnasty} alt="hussnasty" />
      </Step>
      <Step index={4} exact>
        <Image src={meta} alt="meta" />
      </Step>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        It also gets pretty meta with autor self-insertions and stories within
        the story.
      </PresenterNotes>
      <Step index={5} exact>
        <Image src={crappy} alt="crappy" />
      </Step>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        And it doesn't take itself too seriously.
      </PresenterNotes>
      <Step index={6} exact>
        <Image src={blurry} alt="blurry" />
      </Step>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        But it can be weirdly profound at times.
      </PresenterNotes>
      <PresenterNotes isPresenterMode={isPresenterMode}>
        Be warned, it's like 800,000 words long plus hours of animations.  But
        it's just really funny and really well written.
      </PresenterNotes>
  </CenteredContentSlide>
)
