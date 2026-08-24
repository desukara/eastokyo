/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Picasso, Looked at Again.",
  description: "Picasso through the eyes of Paul Smith at The National Art Center, Tokyo.",
  alternates: { canonical: "/picasso-seen-with-fresh-eyes" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const credit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHY BY JIMICHANGA";
const textPhotoCredit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · WRITTEN & PHOTOGRAPHED BY JIMICHANGA";

function Caption({ children, creditText = credit }: { children: React.ReactNode; creditText?: string }) {
  return <figcaption className={styles.caption}><span className={styles.captionLead}>{children}</span><span className={styles.credit}>{creditText}</span></figcaption>;
}

export default function ExhibitionStoryPage() {
  return <main id="top" className={styles.page}>
    <header className={styles.folio}><Link href="/" className={styles.brand}>EASTOKYO</Link><span className={styles.folioCenter}>TOKYO · LOOKING OUTWARD</span><span className={styles.folioRight}>ISSUE 01 · EXHIBITION 02</span></header>

    <section className={styles.hero} aria-labelledby="story-title">
      <div className={styles.heroMedia}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-man-in-blue-hero-mobile.png"/><img src="/images/editorial/picasso-man-in-blue-hero-desktop.png" alt="Portrait of a Man, also known as Man in Blue, painted by Pablo Picasso in 1902" fetchPriority="high"/></picture><span className={styles.heroNumber} aria-hidden="true">02</span><div className={styles.heroMeta}>THE NATIONAL ART CENTER, TOKYO<br/>SUMMER 2026</div></div>
      <div className={styles.heroCopy}><p className={styles.kicker}>EXHIBITION · PICASSO THROUGH THE EYES OF PAUL SMITH</p><h1 id="story-title" className={styles.title}>PICASSO,<em>LOOKED AT AGAIN.</em></h1><p className={styles.deck}>Paul Smith rearranges the walls, and somehow Picasso wakes back up.</p><p className={styles.byline}>BY JAMES SIMMONS (AKA JIMICHANGA)<br/>EASTOKYO · ISSUE 01</p></div>
    </section>

    <section className={styles.intro}><div className={styles.introLabel}>01 · LOOK AGAIN</div><p className={styles.standfirst}>An exhibition is never just the work on the walls. It's the whole room around it, and the assumptions you brought in without noticing.</p><aside className={styles.introNote}>Paul Smith refuses to disappear quietly behind Picasso. He rearranges the room instead, and that's when the work starts feeling real again.</aside></section>

    <section className={styles.featureOne}><figure><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png"/><img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="A visitor wearing headphones studies the exhibition installation" loading="lazy"/></picture><Caption>LOOKING ISN'T THE SAME AS SEEING. YOU HAVE TO BRING YOUR WHOLE SELF TO IT.</Caption></figure></section>

    <section className={styles.bodyBeat}>
      <div className={styles.beatNo}>01</div>
      <div className={`${styles.prose} ${styles.openingA}`}>
        <p>There's a woman walking toward the museum with a blue umbrella open above her head, moving through the August heat like she's got the whole thing figured out. I look up. Not a cloud anywhere. Tokyo in summer sits somewhere north of hell, the pavement throwing heat back up at you like it's got something to prove, and for a second that open umbrella looks completely insane to me.</p>
        <p>Then I remember where I am, and that an umbrella here doesn't always mean what I think it means.</p>
        <p>She's not carrying an umbrella. She's carrying what I've started calling a sunbrella, a word I'm fairly sure I just invented and would like full credit for going forward. You see them all over the city once the weather turns, mostly carried by women who apparently worked out generations ago that shade is shade, whether it's blocking rain or blocking sun. Meanwhile the men just walk to lunch and slowly cook, because admitting you're hot with an umbrella felt like giving something up.</p>
        <p>I grew up with one definition of what an umbrella was for. Rain, full stop. It took moving to Japan for that definition to crack open a little. And somewhere between watching that umbrella do a job I'd never assigned it and walking into the first room of <em>Picasso, Through the Eyes of Paul Smith</em> at the National Art Center in Tokyo, it hit me that almost anything you think you've settled on can be reopened. Not just Picasso. Just about everything, if you let it.</p>
      </div>
      <div className={`${styles.prose} ${styles.openingB}`}>
        <p>That's the whole show, really. It hands you something you assumed you already understood and asks you to look one more time.</p>
        <p>Picasso makes an easy test case, because there's almost too much of him to hold at once. Cubism, Guernica, the blue period, the rose period, auction prices that don't make sense to normal humans, faces where the nose seems to be reporting to a completely different department than the eyes. He's one of those names that's less a person now and more a fact of life, something you've absorbed by osmosis whether or not you ever set foot in a gallery. Everybody knows Picasso, at least a little.</p>
        <p>And that's sort of the problem. Knowing something well enough to stop looking at it is a strange kind of trap, and it's not unique to art. It happens in relationships all the time. The early stretch, when everything about a person is new information, gives way to familiarity, and familiarity has a way of curdling into “I already know how this sentence ends.” We start finishing each other's thoughts and calling it intimacy, when half the time it just means we quit paying attention. Recognition on its own isn't the enemy. It's useful. You can't live your whole life stopping every few minutes to reassess. But certainty is a different animal, and certainty tends to fold its arms and say it's already seen this one.</p>
        <p>Umbrella means rain. Picasso means Cubism. Case closed.</p>
        <p>Except why should there be only one correct angle on anything? Because a single fixed answer feels safer in a world that mostly refuses to sit still? Maybe. It's also, frankly, a little boring, and I'd rather keep my eyes open for the version I haven't seen yet.</p>
      </div>
      <blockquote className={styles.sideQuote}>WE KNOW PICASSO. RIGHT?</blockquote>
    </section>

    <section className={styles.harlequin}>
      <figure className={styles.harlequinFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png"/><img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Picasso works displayed in a gallery installation" loading="lazy"/></picture><Caption creditText={textPhotoCredit}>THE WALL STOPPED BEING BACKGROUND. NOW IT'S PART OF THE CONVERSATION.</Caption></figure>
      <div className={styles.harlequinLead}><p className={styles.sectionKicker}>02 · COLOR TAKES OVER THE ARGUMENT</p><h2>The wall stops playing the innocent bystander.</h2><div className={styles.prose}>
        <p>Paul Smith doesn't try to reinterpret Picasso, not exactly. He builds a room around him instead, and lets the room do some of the talking. Color shows up like it was invited to the party on purpose. Stripes climb the walls, patterns get slapped up next to other patterns, and nothing sits there quietly the way a museum wall is supposed to. Take the harlequin painting, a figure already made of diamonds and hard color blocks, hung against a wall that's got its own opinion about the whole thing. The costume and the wallpaper start bickering, in a good way, and suddenly lines and colors you thought you understood are talking over each other across the gallery, refusing to stay inside the polite little frames museums have spent decades training us to expect.</p>
        <p>Smith isn't repainting anything. He's just arranging things so the room and the painting bring out something in each other that neither one could manage alone. And then, without anything actually moving, the painting comes alive in your head. Nobody's canvas is literally crawling around like some <em>Night at the Museum</em> sequel set in Málaga. The paint stays put. But something in the way you're looking at it shifts, and a picture that felt like old news in an art history textbook suddenly has a pulse.</p>
        <p>What Smith is really showing people is something that was already true, just easy to forget: meaning doesn't stay politely inside a frame, and it never really did. Nothing in that room is just background if you're willing to look at it sideways for a second. The paintings on the wall, the walls in the room, the room in the museum, the museum sitting there in the middle of Tokyo, the city inside the rest of the world, it's all leaning on all of it. You start to wonder where the artwork actually stops.</p>
        <p>At the edge of the canvas? Maybe. Or maybe it just keeps going, quietly, past the point where anyone's still counting.</p>
      </div></div>
    </section>

    <section className={styles.blueAct}><div className={styles.blueInner}><div className={styles.blueHead}><p className={styles.sectionKicker}>03 · RHYTHM</p><h2>And then the room starts to feel alive.</h2></div><figure className={styles.blueFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png"/><img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Picasso exhibition gallery with striped wall treatment" loading="lazy"/></picture><Caption>A NEW LAYER DOESN'T ERASE THE FIRST ONE. IT MAKES IT TRUER.</Caption></figure><div className={styles.blueText}>
      <p>In one gallery Smith runs stripes floor to ceiling behind the paintings, which by now is basically his calling card, decades removed from Picasso's own hand. Picasso made the work, and Smith gave it somewhere new to stand, not just a spotlight but something closer to a scene partner. After that the show doesn't feel like the same show anymore. Two very different kinds of genius, looking at the world from opposite ends of the room.</p>
      <p>One way of reading a painting doesn't cancel out another. If anything it turns the volume up on it. Art stays alive the same way a good conversation does, because new people keep showing up with new eyes and new questions, and the work doesn't get weaker for having to answer them. It gets another life. Then another one after that.</p>
    </div></div></section>

    <section className={styles.quiet}>
      <div className={styles.quietHead}><p className={styles.sectionKicker}>04 · PAY ATTENTION</p><h2>The best part is watching someone else stop in their tracks.</h2><div className={styles.prose}>
        <p>There's a particular feeling when the room around you fades out and you're suddenly standing inside whatever world the artist was trying to pull you into. It's not far off from something religious, honestly, minus the pew.</p>
        <p>Two people can stand in front of the exact same painting and walk away with completely different things, and neither of them is wrong. One painting, plenty of true readings, all of them alive at the same time as long as somebody's still looking. That's really the only requirement. Stay looked at, stay alive.</p>
        <p>Beauty tends to work the same trick. Sometimes the first glance gives you nothing much, and then a line catches the light differently, or a face resolves out of what looked like noise a second earlier, and suddenly you're paying attention with your whole chest. The room itself changes what you thought you were looking at, right as the picture actually gets through to you. The longer you sit with it, the more comes into view, and the more that comes into view, the smaller and stranger and better the details get.</p>
        <p>There are worlds folded inside other worlds here. A single exhibit, or a single city for that matter, can hold a few million private experiences running at once, none of them cancelling any of the others out. Which makes “art” feel like a slightly undersized word for what's actually going on. Maybe that's the whole point of the frame, not a wall around the meaning but a doorway into it.</p>
      </div></div>
      <div className={styles.quietFinal}><div className={`${styles.prose} ${styles.finalMain}`}>
        <p>Picasso's gift wasn't some private access the rest of us got locked out of. If anything it was both simpler and harder than that. He just kept looking, long after everyone around him had already decided what the picture was supposed to be about. That's the trick, and it's a genuinely hard one to pull off twice, let alone for sixty years.</p>
        <p>The object in front of you doesn't have to change for you to see more of it. What changes is how much of it you're actually willing to notice, if you bother to wake up a little first. Do that once and the city outside the museum starts looking different too. The exit stops being a hard edge. Tokyo just keeps going, the way objects keep quietly changing meaning depending on who's holding them and who's paying attention and what they happen to be sitting next to that day.</p>
        <p>Life keeps pouring into itself whether anyone's watching or not. So here's the dare: find one thing you're absolutely certain you've already got figured out.</p>
        <p className={styles.shortBeat}>Start there.</p>
      </div></div>
      <figure className={styles.finalFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-threshold-mobile.png"/><img src="/images/editorial/picasso-threshold-desktop.png" alt="A visitor moving through the Picasso exhibition gallery" loading="lazy"/></picture><Caption>THE FRAME ENDS. THE LOOKING DOESN'T.</Caption></figure>
      <div className={styles.ending}><p>LOOK AGAIN. THEN AGAIN.</p><span>PICASSO · PAUL SMITH<br/>THE NATIONAL ART CENTER, TOKYO<br/>EASTOKYO · ISSUE 01</span></div>
    </section>
  </main>;
}
