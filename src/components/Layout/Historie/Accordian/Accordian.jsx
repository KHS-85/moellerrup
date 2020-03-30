import React from 'react'
import './Accordian.scss'

const Accordian = () => {
    return (
        <div>

            <div class="container font-weight-bold">
                <div id="accordion" class="accordion">
                    <section class="card mb-0">
                        <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                            <span class="card-title pl-3">1920-Nu: Atter en slægtsgård</span>
                        </div>
                        <div id="collapseOne" class="card-body collapse" data-parent="#accordion">
                            <p>Skibsreder Poul Carl købte Møllerup i <strong>1920</strong>, og siden er godset gået i arv inden for denne slægt. Han renoverede den efterhånden forfaldne gård til det Møllerup er i dag med hjælp fra arkitekt Høeg Hansen fra Århus. Alt det indvendige af hovedbygningen blev revet ned og genopført med store højloftede rum, stuk og smukke egetræsgulve. Den port, der gik midt gennem huset blev sløjfet, og den nuværende indkørsel gennem parken blev etableret. Der blev lagt tegl på avlsgården, og voldgraven blev oprenset.</p>
                            <p>I <strong>1939</strong> overtog Poul Carls enke, Fru Kiss Carl, godset, og i <strong>1967</strong> overdrog hun det til barnebarnet Flemming Lüttichau. I 1969 ombyggede Flemming Lüttichau inspektørboligen til kro, som blev drevet som sådan under navnet Hubertus Kroen.</p>
                            <p>Flemming Lüttichau overdrog godset til sin datter og svigersøn, Anne Sophie og Stig Gamborg i <strong>2002</strong>. De lukkede efter få år kroen, renoverede bygningen og lejer den i dag ud til ferie og fest samt møder og events.</p>
                            <p>Der sker fortsat reparationer og vedligeholdelse for at bevare Møllerups gamle charmerende bygningsanlæg. Har du fået lyst til at se og høre mere, arrangerer vi gerne rundvisninger for selskaber og foreninger.</p>
                        </div>
                        <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                            <span class="card-title pl-3"> 1700-1900: Skiftende ejere</span>
                        </div>
                        <div id="collapseTwo" class="card-body collapse" data-parent="#accordion">
                            <p>Knud Gyllenstjerne opførte den nuværende hovedbygning i bindingsværk i begyndelsen af 1700-tallet, da den gamle borg ikke var ”fin” nok til hans vordende hustru, Elizabeth Rosenkrantz fra Rosenholm, der var plejedatter af Christian Skeel den Rige. Knud Gyllenstjerne døde tre måneder efter brylluppet, men de fik en datter sammen. Hun overtog gården i <strong>1721</strong>,<strong> </strong>da også moderen Elizabeth døde.</p>
                            <p>Fra <strong>1790-1796</strong> ejede Frederik Christian Rosenkrantz Møllerup, og da han ikke havde mandlige arvinger, blev gården udbudt til auktion. Han ville ikke lade den gå ind i stamhuset Rosenholm, som hans broder skulle overtage efter ham. De var blevet uvenner, fordi broderen havde ladet sig &#8220;baronisere&#8221;. Den lange kontinuitet i slægts- og ejerskabet blev hermed brudt.</p>
                            <p>Fra <strong>1796</strong> var der skiftende ejere. I <strong>1863</strong> købte Frederik Ahlefeldt-Laurvig gården. I <strong>1916</strong> solgte hans barnebarn gården til sin forpagter, Wester, som i <strong>1918</strong> solgte til skibsreder Møller.</p>
                        </div>
                        <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                            <span class="card-title pl-3"> 1200-1700 Marsk Stig og hans slægt</span>
                        </div>
                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                            <div class="card-body"><p>Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Han var i sin tid den mest indflydelsesrige mand i Danmark efter kongen. I <strong>1286</strong> blev han dømt fredløs for mordet på Kong Erik Klipping, selvom det senere blev betvivlet om han faktisk gjorde det. Møllerup gik i arv eller blev handlet blandt slægtninge til Marsk Stig i de efterfølgende 500 år.</p></div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default Accordian
