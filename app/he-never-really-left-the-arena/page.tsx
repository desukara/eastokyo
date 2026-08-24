import type { Metadata } from "next";
import BullfightSlideshow from "./BullfightSlideshow";
import { ArticleFooter, ArticleHeader } from "./ArticleChrome";
import EditorialReveal from "./EditorialReveal";
import styles from "./page.module.css";
import signature from "./signature.module.css";
import heroPolish from "./hero-polish.module.css";

export const metadata: Metadata = {
  title: "Il est toujours retourné dans l'arène.",
  description: "Picasso et l'arène qu'il n'a jamais vraiment quittée.",
  alternates: { canonical: "/he-never-really-left-the-arena" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function CoverStoryPage() {
  return (
    <main className={styles.page} id="top">
      <ArticleHeader />

      <section className={styles.hero}>
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" />
          <img className={styles.heroImage} src="/images/editorial/picasso-bullfight-01-desktop.png" alt="Œuvre de Picasso autour de la corrida" />
        </picture>
        <div className={`${styles.heroShade} ${heroPolish.shade}`} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <h1 className={`${styles.title} ${heroPolish.title}`}>IL EST TOUJOURS RETOURNÉ DANS L&apos;ARÈNE.</h1>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.meta}>EASTOKYO<br />GRAND FORMAT<br />NUMÉRO 01<br /><br />PAR JAMES SIMMONS (ALIAS JIMICHANGA)</div>
        <p className={styles.deck}>Picasso a passé sa vie à retourner dans cette arène. Peut-être que la vraie question n&apos;a jamais été le taureau, mais pourquoi certaines choses refusent de nous lâcher.</p>
      </section>

      <section className={styles.body}>
        <p className={styles.bodyLabel}>L&apos;HISTOIRE</p>
        <div className={styles.bodyCopy}>
          <p>Vous croyez connaître Picasso ? Il faut qu&apos;on parle de la corrida. De la façon dont ce type a chamboulé les règles de la réalité à travers ce drame brut et presque primitif. Il y a un truc dans une arène. Cette chaleur qui monte du sable, la poussière qu&apos;on avale, la foule penchée en avant comme si elle n&apos;avait plus qu&apos;un seul cœur. Ça vous attrape et ça ne vous lâche plus. Et ça, Picasso le savait mieux que quiconque.</p>
          <p>Il était encore gamin à Málaga quand l&apos;obsession a démarré. L&apos;odeur de l&apos;arène, les couleurs des capes qui devaient continuer à danser derrière ses yeux une fois la nuit tombée. Cette obsession, il ne l&apos;a jamais vraiment lâchée. Pendant soixante ans elle revient dans ses dessins, ses peintures, ses gravures, ses céramiques, ses livres. Les taureaux et les toreros entrent et sortent de son œuvre comme s&apos;ils avaient leurs propres clés. Le Museu Picasso de Barcelone parle lui-même de la tauromachie comme d&apos;une des grandes obsessions de sa carrière. Perso je trouve même que le mot est un peu faible.</p>
          <p>Mais bon, j&apos;exagère peut-être. Il était nostalgique de l&apos;Espagne, tout simplement ? D&apos;accord, disons que l&apos;Espagne ne l&apos;a jamais vraiment quitté. Sauf que ça n&apos;explique pas cinquante ou soixante ans à revenir dans la même arène. Surtout venant d&apos;un mec qui passait son temps à retourner tout le reste de la peinture dans tous les sens. On parle quand même du gars qui a massacré la perspective traditionnelle avant de la plier comme une serviette sale. Qui a fait entrer la sculpture dans la peinture. Qui regardait une selle de vélo et y voyait une tête de taureau. Un type avec cette faim-là, cette imagination incapable de tenir en place, avait de quoi s&apos;ennuyer ailleurs largement.</p>
          <p>Et pourtant le taureau revenait. Toujours. Lourd, noir, la tête basse, prêt à charger, jamais effrayé. Il entraînait avec lui le cheval, le torero, la foule, et cette seconde interminable où tout le monde retient son souffle avant que la corne frappe. Picasso se réinventait sans arrêt, et l&apos;arène se réinventait avec lui.</p>
        </div>
      </section>

      <section className={styles.visualSequence} aria-label="Exposition Picasso et la corrida">
        <figure className={`${styles.visualFigure} ${styles.hallwayFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-red-room-mobile.png" /><img src="/images/editorial/picasso-red-room-desktop.png" alt="Couloir rouge d'exposition présentant des œuvres de Picasso" /></picture>
          <figcaption className={styles.imageCredit}>VUE DE L&apos;EXPOSITION · PHOTOGRAPHIE : JIMICHANGA.</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">01</span>
            <p className={styles.storyBeatLabel}>REGARDEZ DE PLUS PRÈS</p>
            <div className={styles.storyBeatCopy}>
              <p>C&apos;est là qu&apos;on commence à comprendre. La corrida donne tout à un peintre. La soie, l&apos;or qui accroche la lumière, cette bête énorme et sombre qui traverse une arène blanche de soleil pendant qu&apos;un homme essaie surtout de ne pas se pisser dessus avec une demi-tonne de taureau furieux qui lui fonce dessus. Mais si on regarde d&apos;un peu plus près, un truc devient évident. À un moment il faut arrêter de regarder l&apos;arène et commencer à regarder les gens qui la regardent. Une tête qui s&apos;incline légèrement. Toute une tribune qui se penche en avant exactement à la même seconde.</p>
              <p>Une corrida a toujours eu besoin d&apos;un public. Tout se joue dans ce petit cercle de sable, mais une bonne partie du vrai drame se passe ailleurs, dans tous ces yeux qui l&apos;entourent. Picasso regarde l&apos;arène, la foule regarde le taureau, et lui prend tout ça et en fait quelque chose qui, des décennies plus tard, peut encore arrêter net un inconnu devant une toile. Et nous voilà à notre tour en train de regarder cet inconnu.</p>
              <p>Il y a une petite arène cachée dans presque tous les coins de nos vies. Au boulot, en amour, sur internet, autour de la table familiale. Parfois on prend un risque précisément parce que les autres regardent, et parfois on fuit ce même risque pour la même raison. Ce petit mouvement dans la poitrine, une moitié de vous qui veut tous les regards de la pièce et l&apos;autre qui donnerait n&apos;importe quoi pour disparaître dans la foule.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.viewerFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-viewer-mobile.png" /><img src="/images/editorial/picasso-bull-viewer-desktop.png" alt="Un visiteur regarde de près des œuvres de corrida de Picasso" /></picture>
          <figcaption className={styles.imageCredit}>REGARDEZ DE PLUS PRÈS · PHOTOGRAPHIE : JIMICHANGA.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">02</span>
            <p className={styles.storyBeatLabel}>L&apos;ARÈNE</p>
            <div className={styles.storyBeatCopy}>
              <p>Dans les années 1930 l&apos;arène qu&apos;il portait en lui devient plus sombre, plus mystérieuse. Le 19 septembre 1933, à Boisgeloup, il peint <em>Corrida : la mort du torero</em>. Une huile sur bois toute petite, trente et un centimètres sur quarante, assez pour tenir entre vos deux mains et pourtant chargée de quelque chose d&apos;énorme. Treize jours plus tôt il avait déjà peint <em>Corrida : la mort de la femme torero</em>. La mort était entrée dans l&apos;arène et elle n&apos;avait aucune intention d&apos;en ressortir discrètement.</p>
              <p>Un an plus tard il y retourne. <em>La Corrida</em> de 1934 fait partie de cette série intense peinte à Boisgeloup, toutes tournant autour de cette rencontre violente entre le taureau, le cheval et l&apos;homme. Le musée Thyssen y voit une sorte de parabole de l&apos;amour et de la mort. D&apos;accord, cette lecture aide, elle ouvre quelque chose. Mais n&apos;en faites pas le dernier mot, parce que l&apos;arène ne se laisse pas enfermer aussi facilement.</p>
              <p>Le torero a d&apos;abord l&apos;air de ne rien craindre, menton levé, cape qui claque dans la lumière. Et puis d&apos;un coup il paraît beaucoup moins sûr de lui. Le taureau reste puissant même en marchant droit vers une mort décidée bien avant qu&apos;il pose un sabot dans l&apos;arène. Muscles, poussière et sang sous le même soleil. Le cheval fait partie de toute cette cérémonie et peut devenir, l&apos;instant d&apos;après, une de ses victimes. Le pouvoir change de camp devant tout le monde, le plan se défait sous nos yeux, et l&apos;arène rappelle à chacun que sous les costumes, la fierté et le cérémonial il ne reste finalement que de la chair mortelle, du souffle et un cœur qui bat. Rien de plus. Tôt ou tard, chaque vie rencontre un taureau qui refuse de se laisser contrôler. Une corne qui arrive à pleine vitesse au moment précis où vous étiez sûr d&apos;avoir enfin tout compris.</p>
            </div>
          </section>
        </EditorialReveal>

        <EditorialReveal delay="medium">
          <aside className={styles.pullQuote} aria-label="Ligne éditoriale EASTOKYO">
            <span className={styles.pullQuoteMark}>“</span>
            <p>L&apos;ARÈNE, C&apos;EST DU DRAME SANS AUCUN ENDROIT OÙ DÉTOURNER LE REGARD.</p>
            <span className={styles.pullQuoteCredit}>EASTOKYO · GRAND FORMAT 01</span>
          </aside>
        </EditorialReveal>

        <div className={styles.bullfightPair}>
          <figure className={styles.visualFigure}>
            <picture><source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-feature-mobile.png" /><img src="/images/editorial/bullfight-feature-desktop.png" alt="Corrida, Pablo Picasso, 1934" /></picture>
            <figcaption className={styles.imageCredit}>CORRIDA · PABLO PICASSO · 1934</figcaption>
          </figure>
          <figure className={styles.visualFigure}>
            <picture><source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-detail-mobile.png" /><img src="/images/editorial/bullfight-detail-desktop.png" alt="Corrida : la mort du torero, Pablo Picasso, 1933" /></picture>
            <figcaption className={styles.imageCredit}>CORRIDA : LA MORT DU TORERO · PABLO PICASSO · 1933</figcaption>
          </figure>
        </div>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">03</span>
            <p className={styles.storyBeatLabel}>CE QUI RESTE</p>
            <div className={styles.storyBeatCopy}>
              <p>Il y a autre chose dans ces peintures des années trente. Le taureau, le cheval, la violence des corps, cette présence constante de quelqu&apos;un qui regarde. Tout ça faisait déjà partie du langage visuel de Picasso bien avant <em>Guernica</em>. Le Thyssen place ces corridas de 1933 à 1935 directement sur le chemin qui mène au tableau de 1937, notamment dans ces affrontements brutaux entre le taureau et le cheval. Ça ne veut pas dire que le taureau a un sens simple qu&apos;on pourrait graver dans le marbre. Et ça veut encore moins dire qu&apos;on peut lire <em>Guernica</em> comme une corrida un peu plus sophistiquée. Il s&apos;est passé autre chose. Picasso est revenu tellement souvent vers les mêmes taureaux qu&apos;à force ils sont devenus trop lourds pour rester enfermés dans leur sujet d&apos;origine.</p>
              <p>C&apos;est peut-être ça qu&apos;une obsession finit par donner à un artiste. Pas une réponse. Un langage. Une manière de parler qui gagne en profondeur à force de s&apos;en servir. Et franchement c&apos;est peut-être vrai en dehors de l&apos;art aussi. On passe des années à se convaincre que toute sa vie change simplement parce que le décor bouge autour de soi. On essaie des versions de soi comme des manteaux devant un miroir, et puis un matin banal, le café encore chaud sur la table, les vieilles questions remontent. Est-ce que je suis à la hauteur ? Qu&apos;est-ce que j&apos;ai tellement peur de perdre ? Qui j&apos;essaie encore d&apos;impressionner après toutes ces années ? Cette arène complètement dingue qu&apos;on appelle la vie, ça ne consiste peut-être pas à distancer ces questions. Il s&apos;agit plutôt de vivre comme on a décidé de vivre, peu importe qui est dans les gradins.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.galleryFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-gallery-mobile.png" /><img src="/images/editorial/picasso-bull-gallery-desktop.png" alt="Des visiteurs regardent un ensemble d'œuvres de corrida de Picasso" /></picture>
          <figcaption className={styles.imageCredit}>LA SALLE NOUS REGARDE · PHOTOGRAPHIE : JIMICHANGA.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${styles.slideshowBridge} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">04</span>
            <p className={styles.storyBeatLabel}>ENCORE ET ENCORE</p>
            <div className={styles.storyBeatCopy}>
              <p>Et puis il y a ce retour presque théâtral qui rend impossible de réduire toute cette histoire à un vieux souvenir d&apos;enfance. En 1927 l&apos;éditeur Gustau Gili Roig lui demande d&apos;illustrer l&apos;ancien traité de tauromachie de José Delgado, <em>La Tauromaquia</em>. Le projet disparaît ensuite pendant des années, comme les bonnes idées savent parfois le faire. Puis en janvier 1956, Gustau Gili Esteve et Anna Maria Torra viennent voir leur ami Pablo et ressortent l&apos;histoire du tiroir. En mai Picasso réalise vingt-six aquatintes au sucre, et l&apos;édition paraît finalement à Barcelone en 1959.</p>
              <p>Picasso a soixante-quinze ans et continue à foutre le bordel dans le monde de l&apos;art. C&apos;est quand même difficile à encaisser. Après le cubisme, la guerre, une célébrité dont la plupart des artistes n&apos;oseraient même pas rêver, après des décennies à se réinventer sans arrêt, le voilà qui entre à nouveau dans l&apos;arène. Rien que pour ça, respect. Il avait sûrement mille autres choses à faire. Mais quelque chose dans la corrida était encore vivant pour lui, et il n&apos;en avait pas fini avec elle.</p>
              <p>Le Museu Picasso explique que ses images de tauromachie démontent le spectacle morceau par morceau, le taureau, les aficionados penchés au-dessus de la barrera, tout en gardant entremêlés la puissance, la brutalité, le désir et la mort. Sur une image le torero est porté sur les épaules d&apos;une foule qui rugit, les bras levés, les chapeaux en l&apos;air, toute la plaza qui devient folle. Sur une autre on traîne le taureau mort sur le sable pendant que le vacarme retombe et laisse place à quelque chose de beaucoup plus grave, presque un hommage à l&apos;animal, comme la foule d&apos;un amphithéâtre romain aurait pu saluer un gladiateur tombé. Le triomphe et la mortalité côte à côte, parce que l&apos;arène distribue à chacun un rôle qui, pendant quelques minutes, paraît solide. Vainqueur, vaincu, puissant, terrifié. Jusqu&apos;au moment de vérité, quand le destin décide qu&apos;il se fout complètement du casting.</p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <BullfightSlideshow />

      <section className={styles.finalAct}>
        <figure className={`${styles.visualFigure} ${styles.bullHeadFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-head-mobile.png" /><img src="/images/editorial/picasso-bull-head-desktop.png" alt="Tête de taureau, Pablo Picasso, 1942" /></picture>
          <figcaption className={`${styles.imageCredit} ${styles.bullHeadCredit}`}>TÊTE DE TAUREAU · PABLO PICASSO · 1942 · SELLE ET GUIDON DE VÉLO</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.finalStoryBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">05</span>
            <p className={styles.storyBeatLabel}>LE TAUREAU RESTE</p>
            <div className={styles.storyBeatCopy}>
              <p>Enlevez tout le reste. Le spectacle, la cérémonie, même une bonne partie de la rage du taureau. Et quelque chose apparaît enfin dans le sable. C&apos;est peut-être là qu&apos;il faut laisser Picasso, parce qu&apos;il n&apos;existe aucune petite explication propre et définitive de ce que son taureau veut vraiment dire. Il a trop changé pour ça. La peur ? Peut-être. La force, la violence, le désir sexuel ? Pourquoi pas. La vie, la mort, Picasso lui-même, tout ça fondu dans la même silhouette noire sans qu&apos;aucune réponse suffise vraiment. Le sens change selon l&apos;endroit où vous êtes quand vous relevez les yeux vers lui.</p>
              <p>La vraie question que Picasso nous laisse peut-être au milieu du sable, c&apos;est : c&apos;est quoi, votre taureau à vous ? Ce truc dont vous n&apos;arrivez pas à vous débarrasser. Une peur autour de laquelle vous tournez depuis des années au lieu de lui faire face. Une personne ou un endroit auquel vous avez laissé beaucoup trop de pouvoir. La découverte pas franchement agréable que votre temps ici s&apos;arrêtera plus tôt que vous aimez le croire.</p>
              <p>Et puis il y a l&apos;arène elle-même. Cet endroit où quelque chose de réel est en jeu et où, enfin, on vous voit. Vous pouvez vous planter, et quelqu&apos;un pourrait bien être là pour assister au spectacle. Alors pourquoi ne pas jouer la sécurité ? Une vie entière passée dans les gradins serait sûrement moins dangereuse. Sauf qu&apos;être en sécurité et être vivant, ça n&apos;a jamais été la même chose. Être vraiment vivant, c&apos;est parfois entrer dans une arène sans savoir comment ça va finir. Aimer quelqu&apos;un sans garantie. Poursuivre ce qu&apos;on veut bien avant d&apos;avoir la moindre preuve que ça va marcher.</p>
              <p>Picasso est retourné dans cette arène décennie après décennie, bien après l&apos;âge où personne ne lui aurait reproché de rester tranquillement chez lui à jouer aux dominos. Il n&apos;y a pas ici de petite morale emballée avec un joli nœud. Il y a simplement un vieux monsieur qui s&apos;appelait Pablo Picasso, qui n&apos;a jamais vraiment arrêté de choisir l&apos;arène plutôt que le dernier rang. Et une question toute simple qu&apos;il nous laisse en partant.</p>
              <p><strong>VOUS, VOUS ÊTES OÙ ?</strong></p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <div className={styles.endMark} aria-label="Fin du grand format"><span>FIN</span><span>EASTOKYO Nº01</span></div>
      <ArticleFooter />
    </main>
  );
}
