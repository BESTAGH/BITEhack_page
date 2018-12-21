import React, {Component} from 'react';
import "./Components.css";
import ContentDiv from "../CustomComponents/ContentDiv";
import MetaTags from 'react-meta-tags';

class Components extends Component {
    render() {
        return (
            <ContentDiv>
                <MetaTags>
                  <meta content='Bitehack części' property='og:title'/>
                  <meta content='Super hackathon' property='og:description'/>
                  <meta content='http://www.bitehack.best.krakow.pl/components' property='og:url'/>
                  <meta content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN90lduXisEbSyVbU4SHa-vcRjQeSZZH7d8kY7AkX3L-f56dFhFw' property='og:image'/>
                </MetaTags>
                <div className="czesci">
                    <h3>Lista części dostępnych na hackathonie robotycznym dla każdej drużyny [linki]</h3>
                    <ol>
                        <li><a href="https://pl.farnell.com/arduino/a000067/arduino-mega2560-rev3-board/dp/2212779">Płytka rozwojowa, Arduino Mega 2560</a></li>
                        <li><a href="https://pl.farnell.com/analog-devices/adalp2000/active-learning-program-parts/dp/2451848?st=zestaw%20rezystor%C3%B3w&krypto=gBEWs7lmbhgdEc6UsUYccgOuHf5WiFNoIGWT02cJSA06qZXVcX6X1c8K1dYXyt8e%2BAxaiTpLPTfZxXZGKj8TWqfbDQv3g8VzGhpqf2tj%2BcktK70juBxxSdV8Pcb3Vb2aA0l0%2B%2FlocAeLDL%2BHGtgQ7KQKenrens1%2BEFW64ZNfK%2BfPlx3BYfHUwIVwCYBTq3go%2FkuS0DbVeqg6lI8sGJcmO%2BkQFivIQP6yxBrUj9NBYQTn6c5TU%2Bgfb5HsugfGN0UffaIO4k3raZgWZFoIN1goh3iC3V%2F6%2FfaIpgMiy82VcppqFOI4Pw%2BidIfQ05aeVwzQ0SW1YF2IEBWGXjnTMp5ckmEQCKFnmVY73rkK%2BHWLSV%2BDGzXjqsNqqX0PKSxhJm5LhpC0fkNGGewF2M9wfvpw0FKoruRciv8vLFrq8LT0LxWR%2B8Ndr%2FU9Zlq4CrZVN5I6AHAorkciiJ%2FkivfmYuwiKlKwthJZ5Efbp8qxusiF0e9bEUA8hVlSQor8nx0gvP2Xto8dNHWMcIfvSjtf9MwblLHHV2hYsDtyoWokuYbhev4EJmXVrPMFYBQDXFHHECm6CaqDstFhhNPuS5g0vI9liA%3D%3D&ddkey=https%3Apl-PL%2FElement14_Poland%2Fw%2Fc%2Fplytki-rozwojowe-i-zestawy-ewaluacyjne%2Fzestawy-rozwojowe-hobbystyczne-edukacyjne%2Fprl%2Fwyniki">Zestaw komponentów analogowych aktywnych i pasywnych</a></li>
                        <li><a href="https://pl.farnell.com/pro-signal/uc038-1-bk/lead-usb2-0-am-bm-black-1m/dp/2088256?MER=sy-me-pd-mi-alte">Kabel USB UC038-1-BK</a></li>
                    </ol>
                    <h3>Dodatkowo do dyspozycji wszystkich uczestników będą:</h3>
                    <ul>
                        <li>drukarki 3D, sztuk 2</li>
                        <li>stacje lutownicze</li>
                    </ul>
                    <p><br/>Jeżeli czujecie, że potrzebujecie dodatkowych części w konkurencji robotycznej - napiszcie do nas, a postaramy się wam je zapewnić. <br/>
                        Oprócz wyżej wymienionych możecie również przynieść własne. Musicie je tylko wcześniej uzgodnić z Albertem - naszym koordynatorem hackathonu robotycznego -> napiszcie do <a href="mailto:albert.luczak@best.krakow.pl">albert.luczak@best.krakow.pl</a></p>
                </div>
            </ContentDiv>
        );
    }
}

export default Components;
