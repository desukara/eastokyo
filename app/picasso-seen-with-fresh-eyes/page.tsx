/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Picasso, sous un autre regard",
  description: "Picasso vu par Paul Smith au National Art Center, Tokyo.",
  alternates: { canonical: "/picasso-seen-with-fresh-eyes" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const credit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHIE : JIMICHANGA";
const textPhotoCredit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · TEXTE ET PHOTOGRAPHIES : JIMICHANGA";

function Caption({ children, creditText = credit }: { children: React.ReactNode; creditText?: string }) {
  return <figcaption className={styles.caption}><span className={styles.captionLead}>{children}</span><span className={styles.credit}>{creditText}</span></figcaption>;
}

export default function ExhibitionStoryPage() {
  return <main id="top" className={styles.page}>
    <header className={styles.folio}><Link href="/" className={styles.brand}>EASTOKYO</Link><span className={styles.folioCenter}>TOKYO · REGARD VERS L’EXTÉRIEUR</span><span className={styles.folioRight}>NUMÉRO 01 · EXPOSITION 02</span></header>

    <section className={styles.hero} aria-labelledby="story-title">
      <div className={styles.heroMedia}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-man-in-blue-hero-mobile.png"/><img src="/images/editorial/picasso-man-in-blue-hero-desktop.png" alt="Portrait d’un homme, aussi connu sous le titre Man in Blue, peint par Pablo Picasso en 1902" fetchPriority="high"/></picture><span className={styles.heroNumber} aria-hidden="true">02</span><div className={styles.heroMeta}>THE NATIONAL ART CENTER, TOKYO<br/>ÉTÉ 2026</div></div>
      <div className={styles.heroCopy}><p className={styles.kicker}>EXPOSITION · PICASSO VU PAR PAUL SMITH</p><h1 id="story-title" className={styles.title}>PICASSO,<em>SOUS UN AUTRE REGARD.</em></h1><p className={styles.deck}>Paul Smith change le décor, et voilà que Picasso se réveille.</p><p className={styles.byline}>PAR JAMES SIMMONS (AKA JIMICHANGA)<br/>EASTOKYO · NUMÉRO 01</p></div>
    </section>

    <section className={styles.intro}><div className={styles.introLabel}>01 · REGARDER ENCORE</div><p className={styles.standfirst}>Une exposition, ce n'est jamais juste les œuvres accrochées au mur. Il y a tout ce qui les entoure aussi, et surtout tout ce qu'on apporte avec soi sans s'en rendre compte.</p><aside className={styles.introNote}>Paul Smith n'essaie pas de s'effacer devant Picasso. Il transforme carrément l'espace autour de lui, et c'est là, justement, que les œuvres se remettent à nous parler.</aside></section>

    <section className={styles.featureOne}><figure><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png"/><img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="Une visiteuse avec un casque observe l’installation de l’exposition" loading="lazy"/></picture><Caption>REGARDER N'EST PAS LA MÊME CHOSE QUE VOIR. IL FAUT VENIR AVEC TOUT CE QU'ON EST.</Caption></figure></section>

    <section className={styles.bodyBeat}>
      <div className={styles.beatNo}>01</div>
      <div className={`${styles.prose} ${styles.openingA}`}>
        <p>Il y a une femme qui marche vers le musée sous une ombrelle bleue, en pleine chaleur d'août, avec l'air de quelqu'un qui a compris depuis longtemps comment survivre à tout ça. Je lève les yeux : pas un nuage. L'été à Tokyo, c'est un peu l'antichambre de l'enfer, avec un bitume qui vous renvoie la chaleur en pleine tête comme s'il avait un compte à régler, et pendant une seconde cette ombrelle ouverte me paraît complètement absurde.</p>
        <p>Puis je me souviens où je suis. Ici, un parapluie ne veut pas forcément dire ce que j'ai toujours cru.</p>
        <p>D'ailleurs ce n'est même pas un parapluie. C'est ce que j'ai fini par appeler un <em>sunbrella</em>, un mot que j'ai probablement inventé et dont je compte bien récupérer tous les droits. Dès que les grosses chaleurs arrivent, on en voit partout dans la ville, surtout entre les mains des femmes, qui ont visiblement compris depuis des générations que l'ombre reste l'ombre, qu'on cherche à se protéger de la pluie ou du soleil. Pendant ce temps les hommes partent déjeuner et cuisent tranquillement sur le trottoir, comme si sortir une ombrelle revenait à admettre une défaite.</p>
        <p>J'ai grandi avec une idée très simple du parapluie : il pleut, on l'ouvre, point final. Il a fallu que je m'installe au Japon pour que cette évidence commence à se fissurer un peu. Et quelque part entre cette ombrelle qui remplissait une fonction que je ne lui connaissais pas et mon entrée dans la première salle de <em>Picasso, Through the Eyes of Paul Smith</em> au National Art Center de Tokyo, je me suis dit qu'à peu près tout ce qu'on croit avoir définitivement compris mérite d'être rouvert. Pas seulement Picasso. Presque n'importe quoi, du moment qu'on accepte d'y revenir.</p>
      </div>
      <div className={`${styles.prose} ${styles.openingB}`}>
        <p>C'est tout le propos de l'exposition, au fond : vous remettre devant quelque chose que vous pensiez déjà connaître, et vous demander de regarder une deuxième fois.</p>
        <p>Picasso est un candidat parfait pour ça, parce qu'il y a presque trop de Picasso pour tout garder en tête en même temps. Le cubisme, Guernica, la période bleue, la période rose, des prix aux enchères qui n'ont plus grand-chose à voir avec la vie des gens normaux, des visages où le nez semble dépendre d'un service administratif complètement différent de celui des yeux. Picasso, c'est un de ces noms qui ont presque arrêté de désigner une personne pour devenir une sorte de donnée de culture générale, quelque chose qu'on absorbe par osmose sans jamais avoir mis les pieds dans un musée. Tout le monde connaît Picasso, au moins un peu.</p>
        <p>Et c'est justement là que ça se complique. Connaître quelque chose au point de ne plus vraiment le regarder, c'est un piège assez étrange, et ça ne concerne pas que l'art d'ailleurs. Dans les relations aussi ça arrive tout le temps. Au début chaque détail de l'autre est une découverte. Puis vient la familiarité, et la familiarité finit parfois par devenir « je sais déjà comment cette phrase se termine ». On complète les pensées de l'autre et on appelle ça de l'intimité, alors qu'une fois sur deux ça veut surtout dire qu'on a arrêté d'écouter. Reconnaître les choses, ce n'est pas le problème, c'est même indispensable, personne ne peut passer sa vie à tout réexaminer toutes les cinq minutes. La certitude, c'est autre chose. Elle croise les bras et vous annonce qu'elle connaît déjà la suite.</p>
        <p>Un parapluie, c'est pour la pluie. Picasso, c'est le cubisme. Affaire classée.</p>
        <p>Sauf qu'au fond, pourquoi il n'y aurait qu'un seul angle valable sur quoi que ce soit ? Peut-être parce qu'une réponse fixe rassure, dans un monde qui refuse obstinément de rester en place. C'est possible. C'est aussi, franchement, un peu chiant, et je préfère garder les yeux ouverts pour la version que je n'ai pas encore vue.</p>
      </div>
      <blockquote className={styles.sideQuote}>PICASSO, ON CONNAÎT. NON ?</blockquote>
    </section>

    <section className={styles.harlequin}>
      <figure className={styles.harlequinFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png"/><img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Œuvres de Picasso présentées dans une scénographie de galerie" loading="lazy"/></picture><Caption creditText={textPhotoCredit}>LE MUR N'EST PLUS UN DÉCOR. IL FAIT MAINTENANT PARTIE DE LA CONVERSATION.</Caption></figure>
      <div className={styles.harlequinLead}><p className={styles.sectionKicker}>02 · LA COULEUR ENTRE DANS LA DISCUSSION</p><h2>Le mur arrête de jouer les figurants innocents.</h2><div className={styles.prose}>
        <p>Paul Smith n'essaie pas vraiment de réinterpréter Picasso. Il lui construit plutôt un espace, et laisse cet espace prendre part à la conversation. La couleur débarque comme si on l'avait invitée en bonne et due forme. Les rayures grimpent aux murs, les motifs se collent à d'autres motifs, et rien ne reste sagement à sa place comme on s'y attend dans un musée. Prenez l'Arlequin : une figure déjà faite de losanges et d'aplats francs, accrochée devant un mur qui a manifestement son mot à dire. Le costume et le papier peint commencent à se chercher des noises, et soudain les lignes et les couleurs qu'on croyait connaître se répondent d'un bout à l'autre de la salle, sans se soucier des petits cadres bien sages auxquels les musées nous ont habitués.</p>
        <p>Smith ne repeint rien. Il organise les choses pour que la salle et le tableau fassent naître, l'un chez l'autre, quelque chose qu'aucun des deux n'aurait produit tout seul. Sans que rien n'ait vraiment bougé, le tableau se remet à vivre dans votre tête. La toile ne va pas se mettre à ramper dans la galerie comme dans une suite improbable de <em>La Nuit au musée</em> tournée à Málaga. La peinture reste parfaitement immobile. C'est votre regard qui a bougé, et une image qui ressemblait cinq minutes plus tôt à une vieille connaissance sortie d'un manuel d'histoire de l'art retrouve un pouls.</p>
        <p>Ce que Smith met en évidence était déjà vrai, mais tellement facile à oublier : le sens n'est jamais resté sagement enfermé dans son cadre. Rien dans cette salle n'est un simple arrière-plan, dès qu'on accepte de regarder un peu de travers. Les tableaux au mur, les murs de la salle, la salle dans le musée, le musée posé au milieu de Tokyo, Tokyo au milieu du reste du monde : tout ça se répond, se déplace, agit sur le reste. Au bout d'un moment on finit par se demander où l'œuvre s'arrête vraiment.</p>
        <p>Au bord de la toile, peut-être. Ou peut-être qu'elle continue bien au-delà, longtemps après qu'on a renoncé à en tracer la frontière.</p>
      </div></div>
    </section>

    <section className={styles.blueAct}><div className={styles.blueInner}><div className={styles.blueHead}><p className={styles.sectionKicker}>03 · RYTHME</p><h2>Et puis la salle commence à prendre vie.</h2></div><figure className={styles.blueFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png"/><img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Galerie de l’exposition Picasso avec un traitement mural rayé" loading="lazy"/></picture><Caption>AJOUTER UNE NOUVELLE COUCHE N'EFFACE PAS LA PREMIÈRE. ELLE LA REND PLUS JUSTE.</Caption></figure><div className={styles.blueText}>
      <p>Dans l'une des galeries, Smith couvre le mur de rayures du sol au plafond, une de ses signatures depuis des décennies, à des années-lumière du geste de Picasso. Picasso a créé l'œuvre, Smith lui donne un nouvel endroit où exister. Pas juste un éclairage différent ou un joli fond, mais presque un partenaire de scène. À partir de là, l'exposition ne ressemble déjà plus tout à fait à celle dans laquelle on était entré. Deux formes de génie très différentes se retrouvent dans la même pièce, chacune regardant le monde à sa manière.</p>
      <p>Une façon de lire un tableau n'annule pas les autres. Elle peut même leur donner plus de force. L'art reste vivant un peu comme une bonne conversation : de nouvelles personnes arrivent avec leurs propres yeux, leurs propres questions, leur propre époque, et l'œuvre ne s'affaiblit pas parce qu'on lui redemande quelque chose. Elle trouve une autre vie, puis une autre encore, tant qu'il reste quelqu'un pour revenir la voir.</p>
    </div></div></section>

    <section className={styles.quiet}>
      <div className={styles.quietHead}><p className={styles.sectionKicker}>04 · FAITES ATTENTION</p><h2>Le plus beau, c'est de voir quelqu'un d'autre s'arrêter net.</h2><div className={styles.prose}>
        <p>Il y a un moment particulier où la salle autour de vous s'efface et où vous vous retrouvez soudain à l'intérieur du monde que l'artiste essayait de vous faire rejoindre. Ça ressemble presque à une expérience religieuse, sauf qu'il n'y a pas de banc d'église.</p>
        <p>Deux personnes peuvent rester devant exactement le même tableau et repartir avec deux expériences complètement différentes, sans qu'aucune des deux ait tort. Une seule œuvre peut porter des tas de lectures vraies en même temps, à condition qu'il reste quelqu'un pour la regarder. C'est à peu près la seule condition : tant qu'un regard revient vers elle, quelque chose continue à vivre.</p>
        <p>La beauté joue souvent le même tour. Au premier regard il ne se passe parfois pas grand-chose. Puis une ligne attrape la lumière autrement, un visage se dessine dans ce qui ressemblait une seconde plus tôt à du bruit, et tout à coup vous regardez avec bien plus que vos yeux. La salle elle-même déplace ce que vous pensiez avoir devant vous, au moment précis où l'image commence enfin à vous atteindre. Plus on reste, plus les choses apparaissent, et plus elles apparaissent, plus les détails deviennent étranges, minuscules, parfois drôles, parfois magnifiques.</p>
        <p>Il y a ici des mondes pliés à l'intérieur d'autres mondes. Une seule exposition, ou une seule ville d'ailleurs, peut contenir plusieurs millions d'expériences privées en même temps, sans qu'aucune ait besoin d'annuler les autres. À ce compte-là, le mot « art » paraît presque trop petit pour ce qui se passe réellement. Peut-être que le cadre sert justement à ça : pas à construire un mur autour du sens, mais à ouvrir une porte vers lui.</p>
      </div></div>
      <div className={styles.quietFinal}><div className={`${styles.prose} ${styles.finalMain}`}>
        <p>Le don de Picasso n'était pas un accès privé à un territoire dont on aurait tous été exclus. C'était à la fois plus simple et plus difficile que ça. Il continuait simplement à regarder longtemps après que les autres avaient décidé ce que l'image était censée vouloir dire. Réussir ça une fois est déjà difficile. Continuer pendant soixante ans relève d'une obstination assez rare.</p>
        <p>L'objet devant vous n'a pas besoin de changer pour que vous y voyiez davantage. Ce qui change, c'est la quantité de choses que vous êtes réellement prêt à remarquer, à condition de vous réveiller un peu et de faire l'effort. Une fois que ça arrive, la ville à l'extérieur du musée a elle aussi une autre gueule. La sortie ne ressemble plus vraiment à une frontière. Tokyo continue, tout simplement, comme les objets continuent silencieusement à changer de sens selon la personne qui les tient, celle qui les regarde, et ce qui se trouve à côté d'eux ce jour-là.</p>
        <p>La vie continue à déborder partout, qu'on la regarde ou non. Alors voilà le défi : trouvez une chose dont vous êtes absolument certain d'avoir déjà fait le tour, et recommencez précisément par celle-là.</p>
      </div></div>
      <figure className={styles.finalFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-threshold-mobile.png"/><img src="/images/editorial/picasso-threshold-desktop.png" alt="Une personne traverse la galerie de l’exposition Picasso" loading="lazy"/></picture><Caption>LE CADRE S'ARRÊTE. LE REGARD, NON.</Caption></figure>
      <div className={styles.ending}><p>REGARDEZ ENCORE. PUIS ENCORE UNE FOIS.</p><span>PICASSO · PAUL SMITH<br/>THE NATIONAL ART CENTER, TOKYO<br/>EASTOKYO · NUMÉRO 01</span></div>
    </section>
  </main>;
}
