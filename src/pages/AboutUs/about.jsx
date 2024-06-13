import './about.css'

export const AboutUs = () => (
    <>
        <h1>Nerozhodná veverka</h1>
        <div className="main_div">
            <div className="main_content_about">
                <h3>O nás</h3>
                <p className="main_paragraph">
                    Jsme tři poblázněné super holky - Bára, Táňa a Jana. Přestože naše cesty byly rozdílné,
                    nakonec nás přivedly ke společné zálibě – programování. Nyní spolu tvoříme úžasný projekt, do kterého jsme
                    se zamilovaly. Přesvědč se, jak je skvělý.
                </p>
            </div>
            <div className="photo">
                <img src="../img/SquirrelOnTree.png" alt="Lezoucí veverka" className="img_onTheTree" />
            </div>
        </div>
        <br />
        <div className="details_aboutUs">
            <div className="card_person">
                <div className="header_us">
                    <img className="image_person" src="../img/bara.jpg" alt="Bára" />
                    <h3 className="header_person">Barbora Tesařová</h3>
                </div>
                <p className="about_person">
                    Jsem mamka a vášnivá kuchařka. Tyhle dvě věci jdou skvěle dohromady. Několikaletá odmlka v práci
                    rozhodila to, kdo vlastně jsem a tak se snažím svoje já zase najít. Přiznám se, že je to celkem
                    zábavné hledání. Mé já začíná získávat podobu a tento projekt je toho důkazem.
                </p>
            </div>
            <div className="card_person">
                <div className="header_us">
                    <img className="image_person" src="../img/tana.JPG" alt="Táňa" />
                    <h3 className="header_person">Tatiana Kohoutová</h3>
                </div>
                <p className="about_person">
                    Jsem bývalá veterinářka, která se rozhodla pro změnu a dostala se k project managementu digitálních
                    nástrojů a webovek pro veterináře. Svět web developtmentu a programování mě neskutečně zaujal a další
                    bádání v této oblasti vedlo i ke vzniku naší aplikace.
                </p>
            </div>
            <div className="card_person">
                <div className="header_us">
                    <img className="image_person" src="../img/jana.JPG" alt="Jana" />
                    <h3 className="header_person">Jana Jarošová</h3>
                </div>
                <p className="about_person">
                    Původní profesí jsem výtvarnice, hlavně ilustrátorka a autorka komiksů. Postupně jsem se ale během let dostala spíše k organizaci kulturních akcí, roky jsem pracovala na pozicích kurátorky, produkční
                    a dramaturgyně. Teď jsem našla novou vášeň v programování.
                </p>
            </div>
        </div>
    </>
)
