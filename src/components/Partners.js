import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import "./Partners.css"
import SponsorsData from '../Constants/SponsorsData'
import Sponsor from '../CustomComponents/Sponsor'
import MainSponsorData from '../Constants/MainSponsorData'
import ContentDiv from '../CustomComponents/ContentDiv'


class Partners extends Component {
    render() {
        return (
            <ContentDiv className="partners">
                <Grid>
                    <h2>Partner technologiczny</h2>
                    <Row className="farnell">
                        <div className="farnell">
                            <Col xs={12} sm={4} className="Simg">
                                <div className="far_img">
                                    <a href="https://pl.farnell.com"><Image
                                        src={require('../img/partners/farnel.png')}/></a>
                                </div>
                            </Col>
                            <Col xs={12} sm={8} className="Sdescription">
                                <h3>Farnell element14</h3>
                                <p>
                                    Firma <a href="https://pl.farnell.com" className="partnerLink">Farnell
                                    element14 </a> jest dystrybutorem komponentów elektronicznych.
                                </p>
                                <p>
                                    Oferujemy największy asortyment podzespołów, płytek, produktów systemowych, narzędzi
                                    i przyrządów pomiarowych potrzebnych do opracowania produktów.
                                </p>
                                <p>
                                    Profesjonalne wsparcie techniczne i dedykowane usługi rozwojowe pomagają naszym
                                    klientom szybciej opracowywać prototypy.
                                </p>
                                <p>
                                    Dodatkowo społeczność <a href="https://www.element14.com"
                                                             className="partnerLink">element14 </a> jest wartościowym
                                    źródłem zasobów wiedzy dla studentów na całym świecie.
                                </p>
                                <p>
                                    Zapraszamy także do korzystania z naszego programu dla AGH gdzie oferujemy specjalne
                                    warunki sprzedaży i zniżki dla studentów.
                                </p>
                                <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://pl.farnell.com"
                                                                                      className="partnerLink">pl.farnell.com</a><br/>
                                <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://www.element14.com"
                                                                                      className="partnerLink">www.element14.com</a><br/>

                            </Col>
                        </div>
                    </Row>
                    <h2>Partner Strefy Relaksu</h2>
                    <Row className="sabre">
                        <div className="sabree">
                            <Col xs={12} sm={4} className="Simg">
                                <div className="sabre_img">
                                    <a href="https://www.sabre.com/locations/poland/careers/"><Image
                                        src={require('../img/partners/sabre.png')}/></a>
                                </div>
                            </Col>
                            <Col xs={12} sm={8} className="Sdescription">
                                <h3>Sabre</h3>
                                <p>
                                    Misją Sabre jest rozwijanie innowacyjnych technologii, które sprawiają, że
                                    podróżowanie staje się łatwiejsze. Sabre tworzy i sprzedaje rozwiązania, a także
                                    zapewnia wsparcie technologiczne dla branży turystycznej i lotniczej. Obsługuje
                                    m.in. podróżujących, agencje turystyczne i przewoźników.
                                </p>
                                <p>
                                    Nasze trzy główne centra rozwoju oprogramowania znajdują się w Dallas w USA
                                    (siedziba główna Sabre), Krakowie oraz Bangalore w Indiach – łącznie zatrudniamy
                                    około 10 tysięcy pracowników w 60 krajach.

                                </p>
                                <p>
                                    Wśród naszych klientów jest około 400 linii lotniczych, 125 tysięcy hoteli i wielu
                                    innych usługodawców związanych z branżą turystyczną i podróżniczą. Dzięki naszemu
                                    oprogramowaniu na pokładach samolotów podróżuje 500 milionów pasażerów rocznie, a
                                    ilość obsługiwanych transakcji dochodzi do 32 tysięcy na sekundę. Tak wielki rozmach
                                    dokonywanych operacji sprawia, że Sabre jest w ścisłej światowej czołówce firm
                                    zajmujących się nowoczesnymi rozwiązaniami IT.
                                </p>

                                <i className="fa fa-globe" aria-hidden="true"></i> <a
                                href="https://www.sabre.com/locations/poland/careers/"
                                className="partnerLink">sabre.com/locations/poland/careers/</a><br/>
                                <i className="fa fa-globe" aria-hidden="true"></i> <a
                                href="https://www.sabre.com/locations/poland/"
                                className="partnerLink">sabre.com/locations/poland/</a><br/>

                            </Col>
                        </div>
                    </Row>

                    <h2>Sponsor nagród</h2>
                    <Row className="dass">
                        <div className="dasss">
                            <Col xs={12} sm={4} className="Simg">
                                <div className="dass_img">
                                    <a href="https://careers.3ds.com/pl"><Image
                                        src={require('../img/partners/dassault.png')}/></a>
                                </div>
                            </Col>
                            <Col xs={12} sm={8} className="Sdescription">
                                <h3>Dassault Systèmes</h3>
                                <p>
                                    Dassault Systèmes, „the 3DEXPERIENCE Company”, to światowy lider w dziedzinie
                                    oprogramowania i projektowania 3D, rozwiązań PLM oraz CAD/CAM/CAE. Rozwijamy i
                                    dostarczamy cenione na całym świecie aplikacje, m.in. CATIA, Solidworks, ENOVIA,
                                    SIMULIA, DELMIA, 3DSwym, EXALEAD czy Netvibes.
                                </p>
                                <p>
                                    Krakowski oddział Dassault Systèmes jest częścią brandu DELMIA, skupiającego
                                    aplikacje umożliwiające definiowanie, planowanie, tworzenie, zarządzanie,
                                    monitorowanie i kontrolowanie oraz synchronizowanie procesów produkcyjnych.
                                </p>

                                <i className="fa fa-globe" aria-hidden="true"></i> <a
                                href="https://careers.3ds.com/pl"
                                className="partnerLink">careers.3ds.com/pl/</a><br/>

                                <i className="fab fa-facebook-square fa-lg"></i> <a
                                href="https://www.facebook.com/3DSCareers/"
                                className="partnerLink">/3DSCareers/</a><br/>
                                <i className="fab fa-instagram fa-lg"></i> <a
                                href="https://www.instagram.com/dassaultsystemescareers/"
                                className="partnerLink">/dassaultsystemescareers/</a><br/>
                                <i className="fab fa-twitter-square fa-lg"></i> <a
                                href="https://twitter.com/3dscareers"
                                className="partnerLink">/3dscareers</a><br/><br/>


                            </Col>
                        </div>
                    </Row>

                    <h2>Partnerzy barterowi</h2>
                    <div className="barter_div">
                        <Row classname="barter">
                            <Col xs={12} sm={6} className="patron_logo">
                                <a href="http://www.starbucks.pl/">
                                    <Image src={require('../img/partners/starbucks.png')} className="logoStar"/></a>
                                <p>
                                    Starbucks Coffee Company jest wiodącą firmą, która pozyskuje, pali oraz sprzedaje specjalistyczne kawy na całym świecie od 1971 roku.Starbucks to synonim najwyższej jakosci kawy i obsługi na najlepszym poziomie.Znane na całym świecie kawy Starbucks przyrządzane są w 100% z najwyższej jakości ziaren arabica uprawianych we wszystkich najważniejszych regionach na świecie – w Ameryce Południowej, Afryce oraz w regionie Azji i Pacyfiku.
                                </p>
                            </Col>
                            <Col xs={12} sm={6} className="patron_logo">
                                <a href="http://cukierniawadowice.pl/">
                                    <Image src={require('../img/partners/wadowice.png')}
                                                                               className="logoWado"/></a>
                                <p>
                                    ul. Budryka 7 (ds Hajduczek),<br/> Miasteczko AGH
                                </p>
                            </Col>
                        </Row>
                    </div>


                    <h2>Patroni honorowi</h2>
                    <div className="patroni_div">
                        <Row classname="patroni">
                            <Col xs={12} sm={4} className="patron_logo">
                                <a href="https://www.eaiib.agh.edu.pl/"><Image
                                    src={require('../img/partners/weaiib.jpg')} className="logoP1"/></a>
                            </Col>
                            <Col xs={12} sm={4} className="patron_logo">
                                <a href="http://www.iet.agh.edu.pl/pl/"><Image src={require('../img/partners/wiet.jpg')}
                                                                               className="logoP2"/></a>
                            </Col>
                            <Col xs={12} sm={4} className="patron_logo">
                                <a href="http://www.imir.agh.edu.pl/"><Image src={require('../img/partners/wimir.png')}
                                                                             className="logoP3"/></a>
                            </Col>
                        </Row>
                    </div>



                    <h2>Patroni medialni</h2>
                    <div className="media_div">
                        <Row>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="http://www.bis.agh.edu.pl/"><Image
                                    src={require('../img/partners/media/BIS.png')} className="logoBIS"/></a>
                            </Col>

                            <Col xs={6} sm={3} className="media_logo">
                                <a href="http://summit.datamass.io/"><Image
                                    src={require('../img/partners/media/datamass.png')} className="logodata"/></a>
                            </Col>

                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://www.dlastudenta.pl/"><Image
                                    src={require('../img/partners/media/dlastudentapl.jpg')} className="logodla"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://www.eska.pl/"><Image src={require('../img/partners/media/eska.png')}
                                                                      className="logoeska"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="http://www.podajdalej.info.pl/"><Image
                                    src={require('../img/partners/media/PodajDalej.png')} className="logoPodaj"/></a>
                            </Col>

                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://podprad.pl/"><Image src={require('../img/partners/media/podprad.jpg')}
                                                                     className="logoPrad"/></a>
                            </Col>

                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://programistamag.pl//"><Image
                                    src={require('../img/partners/media/programista.png')} className="logoProg"/></a>
                            </Col>

                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://radio17.pl/"><Image src={require('../img/partners/media/radio17.png')}
                                                                     className="logoRadio"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="http://www.omgkrk.com/"><Image src={require('../img/partners/media/OMG.png')}
                                                                        className="logoOMG"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="http://bit.ly/2FeGT1t"><Image
                                    src={require('../img/partners/media/rocket.png')} className="logorocket"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://www.raibay.com/"><Image src={require('../img/partners/media/rb.png')}
                                                                         className="logorb"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="http://itkrk.pl/index.html"><Image
                                    src={require('../img/partners/media/itkrk.png')} className="logoitkrk"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://www.studentnews.pl/"><Image
                                    src={require('../img/partners/media/studentnews.png')} className="logosnews"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="https://www.eurostudent.pl/"><Image
                                    src={require('../img/partners/media/eurostudent.jpg')} className="logoeuro"/></a>
                            </Col>
                            <Col xs={6} sm={3} className="media_logo">
                                <a href="http://itberries.pl"><Image src={require('../img/partners/media/berries.png')}
                                                                     className="logoberries"/></a>
                            </Col>

                        </Row>
                    </div>
                </Grid>
            </ContentDiv>
        );
    }
}

export default Partners;
