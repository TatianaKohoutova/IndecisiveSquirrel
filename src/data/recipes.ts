import { ActivityType, Calories, Taste, Type, Units, UnitsMap } from '../const'

// interface Recipe {
// id: string;
// title: string;
// portions: number;
// preparationTime: number;
// timeUnit: string;
// process: string;
// name: string;
// amout: number;
// }

export const recipes = {
    rajcatovaVejceZPanve: {
        id: 'rajcatovaVejceZPanve',
        type: Type.Vegetarian,
        activity: ActivityType.Medium,
        isLowCost: false,
        taste: Taste.Salty,
        calories: Calories.Medium,
        title: 'Rajčatová vejce z pánve',
        portions: 2,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Cibuli oloupejte a nakrájejte najemno. Česnek oloupejte a prolisujte.',
            'Ve větší pánvi rozehřejte na středním plameni olej. Poté do pánve přidejte nakrájenou cibuli a opékejte 2⁠–⁠3 minuty na středním plameni.',
            'Do pánve přidejte prolisovaný česnek a vše opékejte dalších 30⁠–⁠60 sekund.',
            'Do pánve přilijte rajčata z plechovky, promíchejte, snižte plamen na mírný a celou směs nechte 8⁠–⁠10 minut probublávat.',
            'Provařenou směs dochuťte solí a pepřem. Následně v ní vytvořte důlky a do každého vyklepněte 1 vejce, které osolte a opepřete. Poté pánev přiklopte pokličkou a směs nechte vařit 5⁠–⁠7 minut na mírném plameni.',
            'Mezitím si najemno nakrájejte bazalku.',
            'Až se dovaří směs v pánvi a vejce budou hotová, posypte obsah pánve nastrouhaným parmazánem, pánev opět přiklopte pokličkou a zahřívejte ještě 30⁠–⁠60 sekund na mírném plameni, aby se parmazán rozpustil.',
            'Pánev odstavte z plamene a hotovou směs posypte nakrájenou bazalkou a chilli vločkami. Poté ji rozdělte na porce a ihned podávejte s pečivem.',
        ],
        ingredients: [
            { name: 'cibule', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'stroužky česneku', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'oleje', amount: 2, unit: UnitsMap[Units.TableSpoon] },
            { name: 'krájených rajčat z plechovky', amount: 400, unit: UnitsMap[Units.G] },
            { name: 'vejce', amount: 4, unit: UnitsMap[Units.Piece] },
            { name: 'čerstvé bazalky', amount: 1, unit: UnitsMap[Units.Handful] },
            { name: 'parmazánu', amount: 50, unit: UnitsMap[Units.G] },
            { name: 'chilli vloček', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'soli a pepře', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
        ],
    },
    zeleninovyKuskusSGrilovanymHermelinem: {
        id: 'zeleninovyKuskusSGrilovanymHermelinem',
        type: Type.Vegetarian,
        activity: ActivityType.Medium,
        isLowCost: false,
        taste: Taste.Salty,
        calories: Calories.Medium,
        title: 'Zeleninový kuskus s grilovaným hermelínem',
        portions: 1,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Zapněte hroubu na 180°C.',
            'V misce smícháte trochu oleje, sůl, oblíbené koření a bylinky.',
            'Připravíte si alobal o velikosti cca 15x15 cm. Na alobal položíte hermelím a celý ho potřete kořenící směsí.',
            'Hermelím zabalte do alobalu a takto zabalený ho položte na pekáček, který vložíte do rozehřáté trouby na cca 15 min.',
            'Kuskus nasypte do misky, zalijete horkou vodou nebo vývarem a osolte. Nechte kuskus odpočívat pod pokličkou.',
            'Nakrájejte si rajčata na menší kousky. Zeleninu z plechovky slijte (pokud použijete všechnu zeleninu) nebo odeberte trochu bez nálevu.',
            'Všechnu zeleninu smíchejte s hotovým kuskusem a přendejte na talíř. K němu přidejte propečený hermelím (bez alobalu) a podávejte.',
        ],
        ingredients: [
            { name: 'hermelínu', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'kuskusu', amount: 50, unit: UnitsMap[Units.G] },
            { name: 'oleje', amount: 2, unit: UnitsMap[Units.TableSpoon] },
            { name: 'horké vody nebo vývaru', amount: 100, unit: UnitsMap[Units.Ml] },
            { name: 'mixu sterilizované zeleniny', amount: 100, unit: UnitsMap[Units.G] },
            { name: 'sušených nebo čerstvých rajčat', amount: 4, unit: UnitsMap[Units.Piece] },
            { name: 'koření dle vlastní chuti', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'sušených bylinek', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'soli', amount: 0.25, unit: UnitsMap[Units.TeaSpoon] },
        ],
    },
    testovinySPecenymSyremFeta: {
        id: 'testovinySPecenymSyremFeta',
        type: Type.Vegetarian,
        activity: ActivityType.Medium,
        isLowCost: false,
        taste: Taste.Salty,
        calories: Calories.Medium,
        title: 'Těstoviny s pečeným sýrem feta',
        portions: 4,
        preparationTime: 45,
        timeUnit: 'min',
        process: [
            'Troubu předehřejte na 200°C.',
            'V zapékací míse smíchejte rajčata s 2/3 olejem, černým pepřem a bílým vínem (víno můžete z receptu vynechat).',
            'Rajčata narovnejte na strany pekáče a doprostřed umístěte sýr feta.',
            'Zbývající 1/3 olivového oleje potřete feta sýr.',
            'Vložte do vyhřáté trouby a pečte do změknutí feta sýru a opečení rajčat. Trvá to přibližně 30 minut.',
            'Mezitím uvařte těstoviny podle návodu na obalu.',
            'Po upečení feta sýru vyndejte pekáč z trouby a sýr společně s rajčaty rozmačkejte a rozmíchejte. Smíchejte směs s uvařenými těstovinami a ozdobte lístky bazalky.',
            ,
        ],
        ingredients: [
            { name: 'sýru feta', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'těstovin', amount: 350, unit: UnitsMap[Units.G] },
            { name: 'cherry rajčat', amount: 500, unit: UnitsMap[Units.G] },
            { name: 'olivového oleje', amount: 3, unit: UnitsMap[Units.TableSpoon] },
            { name: 'suchého bílého vína (lze vynechat)', amount: 100, unit: UnitsMap[Units.Ml] },
            { name: 'čerstvé bazalky', amount: 1, unit: UnitsMap[Units.Handful] },
            { name: 'soli a pepře', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
        ],
    },
    parmazanoveKure: {
        id: 'parmazanoveKure',
        type: Type.Meat,
        activity: ActivityType.Active,
        isLowCost: false,
        taste: Taste.Salty,
        calories: Calories.High,
        title: 'Parmazánové kuře',
        portions: 3,
        preparationTime: 60,
        timeUnit: 'min',
        process: [
            'Nejprve si předehřejte troubu na 200–210 °C a připravte si zapékací nádobu (30 × 40) cm.',
            'Kuřecí prsa omyjte, očistěte, osolte a opepřete. Na pánvi rozehřejte 1 lžíci olivového oleje na středním plameni. Až bude olej rozpálený, vložte do pánve kuřecí prsa a opékejte z každé strany 2–3 minuty na středním plameni. Opečená kuřecí prsa vyjměte z pánve a dejte stranou na pracovní plochu.',
            'Do pánve nalijte druhou lžíci oleje, přidejte najemno nakrájenou cibuli a opékejte na středním plameni 2 minuty. Následně snižte plamen na mírný stupeň, přidejte třtinový cukr, rajčata, sušené oregano, sůl a pepř a vše společně povařte 3–4 minuty.',
            'Hotovou rajčatovou směs přemístěte do zapékací nádoby. Na směs položte opečená kuřecí prsa, přidejte plátky mozzarelly a vše posypte strouhaným parmazánem. Zapékací nádobu vložte do předehřáté trouby a pečte 13–15 minut při 200–210 °C.',
            'Hotové parmazánové kuře naporcujte a podávejte s libovolnou přílohou.',
            ,
        ],
        ingredients: [
            { name: 'kuřecích prsou', amount: 300, unit: UnitsMap[Units.G] },
            { name: 'strouhaného parmazánu', amount: 75, unit: UnitsMap[Units.G] },
            { name: 'olivového oleje', amount: 2, unit: UnitsMap[Units.TableSpoon] },
            { name: 'cibule (nakrájená najemno)', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'třtinového cukru', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'loupaných a nakrájených rajčat', amount: 500, unit: UnitsMap[Units.G] },
            { name: 'sušeného oregana', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'sušených bylinek', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'mozzarella (nakrájené na plátky)', amount: 150, unit: UnitsMap[Units.G] },
        ],
    },
    rychleZapeceneChleby: {
        id: 'rychleZapeceneChleby',
        type: Type.Meat,
        activity: ActivityType.Active,
        isLowCost: true,
        taste: Taste.Salty,
        calories: Calories.High,
        title: 'Rychlé zapečené chleby',
        portions: 2,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Troubu nahřejeme na 200 °C.',
            'Šunku, papriku a bílou část cibulky nakrájíme nadrobno.',
            'Sýry nastrouháme nahrubo.',
            'Všechny suroviny smícháme a dochutíme.',
            'Na každý krajíc chleba položíme plátek slaniny a na to navrstvíme připravenou směs.',
            'Chleby uložíme na plech s pečicím papírem, vložíme do předehřáté trouby a pečeme cca 10 minut. Podáváme horké.',
        ],
        ingredients: [
            { name: 'sýru Niva', amount: 30, unit: UnitsMap[Units.G] },
            { name: 'sýru Camembert', amount: 30, unit: UnitsMap[Units.G] },
            { name: 'šunky', amount: 30, unit: UnitsMap[Units.G] },
            { name: 'jarní cibulky', amount: 0.5, unit: UnitsMap[Units.Piece] },
            { name: 'stroužky česneku', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'červené papriky', amount: 0.25, unit: UnitsMap[Units.Piece] },
            { name: 'zakysané smetany', amount: 35, unit: UnitsMap[Units.G] },
            { name: 'soli a pepře', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'petrželka', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'krajíce chleba', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'plátky anglické slaniny', amount: 2, unit: UnitsMap[Units.Piece] },
        ],
    },
    staroceskeZelniky: {
        id: 'staroceskeZelniky',
        type: Type.Vegetarian,
        activity: ActivityType.Active,
        isLowCost: true,
        taste: Taste.Salty,
        calories: Calories.High,
        title: 'Staročeské zelníky',
        portions: 2,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Brambory oloupeme a najemno nastrouháme. Vymačkáme z nich většinu vody.',
            'Okapané kysané zelí překrájíme a přidáme k nastrouhaným bramborám.',
            'Přidáme vejce, Solamyl a sůl.',
            'Těsto pořádně promícháme a na rozpáleném oleji zprudka smažíme menší placičky.',
            'Můžeme podávat samostatně nebo se zeleninou.',
        ],
        ingredients: [
            { name: 'větší brambory', amount: 3, unit: UnitsMap[Units.Piece] },
            { name: 'kysaného zelí', amount: 3, unit: UnitsMap[Units.Handful] },
            { name: 'vejce', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'škrobu (Solamyl)', amount: 4, unit: UnitsMap[Units.TableSpoon] },
            { name: 'soli', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'oleje', amount: 50, unit: UnitsMap[Units.Ml] },
        ],
    },
    plneneToasty: {
        id: 'plneneToasty',
        type: Type.Meat,
        activity: ActivityType.Active,
        isLowCost: true,
        taste: Taste.Salty,
        calories: Calories.High,
        title: 'Plněné toasty',
        portions: 2,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Šunku nebo salám nakrájíme na drobné kousíčky. Sýr, šunku, vejce, česnek, hořčici a koření smícháme.',
            'Plátek chleba potřeme směsí a přiklopíme druhým plátkem. Slepené tousty namáčíme do rozšlehaných, lehce osolených vajec.',
            'Smažíme v dostatečné vrstvě oleje z obou stran. Hotové odkládáme na papírový ubrousek. Kdo nechce smažit, může tousty upéct v kontaktním grilu.',
        ],
        ingredients: [
            { name: 'plátků toastového chleba', amount: 6, unit: UnitsMap[Units.Piece] },
            { name: 'strouhaného sýru (cheddar, gouda,...)', amount: 100, unit: UnitsMap[Units.G] },
            { name: 'šunky nebo pikantního salámu', amount: 60, unit: UnitsMap[Units.G] },
            { name: 'hořčice', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'utřeného stroužku česneku', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'vejce', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'soli a pepře', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'mleté a pálivé papriky', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'vejce na obalení', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'oleje na smažení', amount: 100, unit: UnitsMap[Units.Ml] },
        ],
    },
    salatZPolnickuARukoly: {
        id: 'salatZPolnickuARukoly',
        type: Type.Vegetarian,
        activity: ActivityType.Passive,
        isLowCost: false,
        taste: Taste.Salty,
        calories: Calories.Low,
        title: 'Salát z polníčku a rukoly',
        portions: 2,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Vejce uvaříme na tvrdo, oloupeme, pokrájíme.',
            'Salát přebereme, umyjeme a osušíme.',
            'Rajčata umyjeme, překrájíme, sýr také pokrájíme na menší kousky.',
            'Promícháme olej, ocet, koření, sůl a pár kapek vody.',
            'Na talíř dáme polníček a rukolu, na saláty položíme sýr, vejce, rajčata a přelijeme zálivkou. Podáváme hned, např. s pečivem. ',
        ],
        ingredients: [
            { name: 'polníčku', amount: 1, unit: UnitsMap[Units.Handful] },
            { name: 'rukoly', amount: 1, unit: UnitsMap[Units.Handful] },
            { name: 'vejce', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'mozzarelli', amount: 60, unit: UnitsMap[Units.G] },
            { name: 'cherry rajčat', amount: 50, unit: UnitsMap[Units.G] },
            { name: 'balzamikového nebo obyčejného octu', amount: 1, unit: UnitsMap[Units.TableSpoon] },
            { name: 'soli a pepře', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'oleje', amount: 1, unit: UnitsMap[Units.TableSpoon] },
        ],
    },
    smetanoveBramboryZPanve: {
        id: 'smetanoveBramboryZPanve',
        type: Type.Vegetarian,
        activity: ActivityType.Active,
        isLowCost: false,
        taste: Taste.Salty,
        calories: Calories.High,
        title: 'Smetanové brambory z pánve',
        portions: 2,
        preparationTime: 45,
        timeUnit: 'min',
        process: [
            'Brambory předem očistíme a uvaříme ve slupce do poloměkka. Studené oloupeme a nakrájíme na hrubší plátky.',
            'Do větší pánve dáme rozehřát olej. Brambory posypeme kmínem a solí a opečeme do zlatova. Obsahem pánve jen prohazujeme, aby se brambory nepolámaly.',
            'Ve smetaně rozmícháme hořčici a koření. Brambory touto směsí zalijeme a necháme chvíli probublat.',
            'Odstavíme, vmícháme oblíbenou bylinku a necháme pár minut odstát. Brambory smetanu krásně nasají.',
            'Podáváme jen tak, s plátkem masa nebo se zeleninovým salátem.',
        ],
        ingredients: [
            { name: 'brambor', amount: 400, unit: UnitsMap[Units.G] },
            { name: 'smetany ke šlehání', amount: 60, unit: UnitsMap[Units.Ml] },
            { name: 'oleje', amount: 4, unit: UnitsMap[Units.TableSpoon] },
            { name: 'hrubozrnné hořčice', amount: 1.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'koření na farmářské brambory', amount: 1.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'kmínu', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'soli', amount: 0.5, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'libečku', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'kopru nebo oregana', amount: 2, unit: UnitsMap[Units.TeaSpoon] },
        ],
    },
    palacinky: {
        id: 'palacinky',
        type: Type.Vegetarian,
        activity: ActivityType.Active,
        isLowCost: true,
        taste: Taste.Sweet,
        calories: Calories.High,
        title: 'Palačinky',
        portions: 2,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Hladkou mouku rozšleháme se špetkou soli, mlékem a vejci tak, aby vznikla správná hustá směs vhodná pro palačinky (ani řídká, ani moc hustá).',
            'Na pánev s rozpáleným olejem vlijeme přibližně jednu malou naběračku směsi. Palačinku smažíme z obou dvou stran dozlatova.',
            'Na hotové palačinky naneseme libovolné množství čehokoliv, co nám chutná. Vhodné jsou marmelády, tvaroh, pudink nebo rozpuštěná čokoláda.',
        ],
        ingredients: [
            { name: 'vejce', amount: 1, unit: UnitsMap[Units.Piece] },
            { name: 'mléka', amount: 200, unit: UnitsMap[Units.Ml] },
            { name: 'hladké mouky', amount: 100, unit: UnitsMap[Units.G] },
            { name: 'soli', amount: 1, unit: UnitsMap[Units.Pinch] },
            { name: 'oleje', amount: 2, unit: UnitsMap[Units.TableSpoon] },
        ],
    },
    krupicovaKase: {
        id: 'krupicovaKase',
        type: Type.Vegetarian,
        activity: ActivityType.Active,
        isLowCost: true,
        taste: Taste.Sweet,
        calories: Calories.High,
        title: 'Krupicová kaše',
        portions: 1,
        preparationTime: 30,
        timeUnit: 'min',
        process: [
            'Mléko nalijeme do hrnce, osolíme a pozvolna přivedeme k varu..',
            'Přidáme lžíci másla a za stálého míchání pomalu přisypeme krupici. Stále mícháme, aby se netvořily hrudky.',
            'Mírným varem ještě asi 2 minuty provaříme. Když je kaše moc hustá, přiléváme postupně mléko.',
            'Hotovou kaši nalijeme do talíře, navrch dáme plátek másla a dochutíme podle chuti strávníků.',
        ],
        ingredients: [
            { name: 'mléka', amount: 250, unit: UnitsMap[Units.Ml] },
            { name: 'dětské krupičky', amount: 2, unit: UnitsMap[Units.TableSpoon] },
            { name: 'másla', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'soli', amount: 1, unit: UnitsMap[Units.Pinch] },
        ],
    },
    americkeLivance: {
        id: 'americkeLivance',
        type: Type.Vegetarian,
        activity: ActivityType.Active,
        isLowCost: true,
        taste: Taste.Sweet,
        calories: Calories.High,
        title: 'Americké lívance',
        portions: 2,
        preparationTime: 60,
        timeUnit: 'min',
        process: [
            'Ve velké míse smíchejte mouky, prášek do pečiva, moučkovéhý cukr a špetku soli.',
            'Zadní stranou lžíce vytvořte uprostřed důlek a přidejte vejce, rozpuštěné máslo a mléko.',
            'Vyšleháme do hladka.',
            'Na velké nepřilnavé pánvi rozehřejte na středním plameni malý kousek másla a 1 lžičku oleje. Když máslo vypadá napěněné, nalijte do něj kolečka těsta o šířce asi 8 cm. Dejte pozor, abyste lívance nedávali příliš blízko k sobě, protože by se při vaření spojily. Lívance opékejte z jedné strany asi 1-2 minuty, nebo dokud se na povrchu nezačnou objevovat drobné bublinky. Lívance otočte a opékejte další minutu z druhé strany. Opakujte, dokud nespotřebujete všechno těsto.',
            'Lívance servírujeme na talíř a pokapeme sirupem či medem (nejlépe javorovým) a jakoukoli vaší oblíbenou přísadou.',
        ],
        ingredients: [
            { name: 'mléka', amount: 100, unit: UnitsMap[Units.Ml] },
            { name: 'hladké mouky', amount: 100, unit: UnitsMap[Units.G] },
            { name: 'prášku do pečiva', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'vejce', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'rozpuštěného másla', amount: 15, unit: UnitsMap[Units.G] },
            { name: 'másla', amount: 2, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'oleje', amount: 2, unit: UnitsMap[Units.TableSpoon] },
        ],
    },
    malinoveTiramisuDoSklenicky: {
        id: 'malinoveTiramisuDoSklenicky',
        type: Type.Vegetarian,
        activity: ActivityType.Passive,
        isLowCost: true,
        taste: Taste.Sweet,
        calories: Calories.Low,
        title: 'Malinové tiramisu do skleničky ',
        portions: 3,
        preparationTime: 20,
        timeUnit: 'min',
        process: [
            'Jako první si rozmixujeme sušenky a uvaříme kávu.',
            'Vymícháme si tvaroh s čekankovým sirupem a vanilkou a začneme vrstvit do připravených sklenic.',
            'Na dno sklenice dáme 2-3 lžíce mletých sušenek, polijeme trochou kávy a jemně promícháme lžičkou.',
            'Na to půjde tvarohová vrstva a následně 3-4 lžičky malinového džemu.',
            'Znovu navrstvíme pomleté sušenky a kávu a trošku promícháme, na to tvaroh a nakonec vršek krému posypeme kakaem.',
            'Pak už jen necháme vychladit, aby se chutě spojily.',
        ],
        ingredients: [
            { name: 'špaldových sušenek', amount: 115, unit: UnitsMap[Units.G] },
            { name: 'malinového džemu bez cukru nebo malinové puré', amount: 140, unit: UnitsMap[Units.G] },
            { name: 'nízkotučného tvarohu', amount: 370, unit: UnitsMap[Units.G] },
            { name: 'čekankového sirupu', amount: 80, unit: UnitsMap[Units.G] },
            { name: 'instantní kávy', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'voda', unit: UnitsMap[Units.Need] },
            { name: 'kakao', unit: UnitsMap[Units.Need] },
        ],
    },
    boruvkovaGaletkaSTvarohem: {
        id: 'boruvkovaGaletkaSTvarohem',
        type: Type.Vegetarian,
        activity: ActivityType.Passive,
        isLowCost: false,
        taste: Taste.Sweet,
        calories: Calories.Low,
        title: 'Borůvková galetka s tvarohem ',
        portions: 6,
        preparationTime: 60,
        timeUnit: 'min',
        process: [
            'V misce si smícháme mouku s kypřícím práškem a tvarohem a vypracujeme nelepivé těsto. To poté zabalíme do fólie a dáme na 15 minut do ledničky odležet.',
            'Mezitím si připravíme náplň - smícháme tvaroh, vejce, vanilku a čekankový sirup.',
            'Z těsta vyválíme na pečícím papíře asi 4 mm tenký plát a dáme na plech.',
            'Doprostřed naneseme tvarohový krém, ale necháme prostor asi 4 cm od okrajů těsta.',
            'Ty poté přeložíme směrem dovnitř kruhu, aby nám při pečení nevytekl krém',
            'Nakonec na krém přidáme borůvkový džem, špejlí můžeme vytvořit mozaiku. Posypeme čerstvými borůvkami a okraje těsta potřeme vajíčkem.',
            'Pečeme cca 15‑20 minut na 170 °C.',
            'Podáváme vychladlé rozkrájené na 6 dílků. Tak dobrou chuť!',
        ],
        ingredients: [
            { name: 'špaldové mouky', amount: 200, unit: UnitsMap[Units.G] },
            { name: 'polotučného tvarohu (250g na těsto a 200g na náplň)', amount: 450, unit: UnitsMap[Units.G] },
            { name: 'kypřicího prášku', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'vejce (1 na náplň a 1 na potření)', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'mleté vanilky nebo extraktu', amount: 1, unit: UnitsMap[Units.Pinch] },
            { name: 'čekankového sirupu', amount: 30, unit: UnitsMap[Units.G] },
            { name: 'borůvkového jamu bez přidaného cukru', amount: 125, unit: UnitsMap[Units.G] },
            { name: 'borůvky (čerstvé nebo mražené)', unit: UnitsMap[Units.Need] },
        ],
    },
    pistaciovyKremesBezCukru: {
        id: 'pistaciovyKremesBezCukru',
        type: Type.Vegetarian,
        activity: ActivityType.Passive,
        isLowCost: false,
        taste: Taste.Sweet,
        calories: Calories.Low,
        title: 'Pistáciový kremeš bez cukru  ',
        portions: 10,
        preparationTime: 60,
        timeUnit: 'min',
        process: [
            'Vyválené listově těsto přendáme na pečící papír a rozkrojíme na 2 stejné poloviny. Těsto propícháme vidličkou na několika místech a dáme péct na 6‑8 minut na 200 °C dozlatova.',
            'Do hrnce nalijeme ½ z celkového množství mléka a rozmícháme v něm smíchaný puding s moučkovým erythritolem, dolijeme zbytek mléka a uvaříme hustý puding.',
            'Uvařený puding za občasného míchání necháme vychladnout.',
            'V misce si vyšleháme pudink s tvarohem pokojové teploty, pistáciovým máslem a proteinovým práškem.',
            'Krém naneseme na ½ upečeného listového těsta. Posypeme nasekanými pistáciemi a překryjeme druhou částí upečeného listového těsta.',
            'Kremeš necháme v ledničce minimálně 3 hodiny odležet.',
        ],

        ingredients: [
            { name: 'listového těsta', amount: 275, unit: UnitsMap[Units.G] },
            { name: 'mléka', amount: 750, unit: UnitsMap[Units.Ml] },
            { name: 'polotučného tvarohu', amount: 250, unit: UnitsMap[Units.G] },
            { name: 'pistáciového nebo vanilkového proteinu', amount: 40, unit: UnitsMap[Units.G] },
            { name: 'vanilkového pudinku', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'pistáciového krému', amount: 40, unit: UnitsMap[Units.G] },
            { name: 'nesolených pistácií', amount: 20, unit: UnitsMap[Units.G] },
            { name: 'moučkového erythritolu', amount: 40, unit: UnitsMap[Units.G] },
        ],
    },
    matchaPalacinkoveCerealie: {
        id: 'matchaPalacinkoveCerealie',
        type: Type.Vegetarian,
        activity: ActivityType.Passive,
        isLowCost: true,
        taste: Taste.Sweet,
        calories: Calories.Low,
        title: 'Matcha palačinkové cereálie',
        portions: 2,
        preparationTime: 20,
        timeUnit: 'min',
        process: [
            'Ve velké míse nejprve smíchejte vejce, xylitol a mléko. Šlehejte, dokud se ingredience nespojí. Poté si vločky rozemelte na mouku a přidejte do těsta společně s kypřicím práškem a solí. Na závěr vmíchejte i matcha prášek.',
            'Z těsta vytvořte na pánvi kapátkem asi 1 cm velká kolečka a po dobu jedné minuty je nechte opékat. ',
            'Poté palačinky přendejte na talíř a opakujte dokud nezpracujete všechno těsto. Podávejte s mlékem, jogurtem a ovocem či tak, jak máte rádi.',
        ],

        ingredients: [
            { name: 'ovesných vloček', amount: 80, unit: UnitsMap[Units.G] },
            { name: 'mléka', amount: 250, unit: UnitsMap[Units.Ml] },
            { name: 'vejce', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'matcha prášku', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'kypřicího prášku', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'xylitolu', amount: 1, unit: UnitsMap[Units.TableSpoon] },
            { name: 'soli', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
        ],
    },
    butterChicken: {
        id: 'butterChicken',
        type: Type.Meat,
        activity: ActivityType.Medium,
        isLowCost: false,
        taste: Taste.Salty,
        calories: Calories.Medium,
        title: 'Butter chicken',
        portions: 4,
        preparationTime: 'marinování: přes noc, vaření: 40',
        timeUnit: 'min',
        process: [
            'Kuřecí prsa nakrájejte na kostky o velikosti cca 5 cm na 5 cm. Suroviny na marinádu smíchejte ve větší míse společně s nakrájeným kuřetem. Marinujte minimálně 3 hodiny, nejlépe přes noc.',
            'Ve velké pánvi, na vysokém plameni, rozpusťte máslo. Maso vyndejte z marinády, ale neotírejte ji, a vložte do pánve na rozpuštěné máslo. Kuře v pánvi smažte dokud není hotové, trvá to asi 3 minuty.',
            'Jakmile je kuřecí maso hotové, přidejte do pánve drcená rajčata, smetanu, cukr a sůl. Promíchejte a snižte plamen. Společně nechte vše vařit po dobu 20 minut.',
            'Po 20 minutách omáčku ochutnejte a pokud je potřeba, dosolte. Podávejte s basmati rýží nebo indickým chlebem naan. ',
        ],

        ingredients: [
            { name: 'kuřecích prsou', amount: 750, unit: UnitsMap[Units.G] },
            { name: 'bílého jogurtu', amount: 150, unit: UnitsMap[Units.G] },
            { name: 'citronové šťávy', amount: 1, unit: UnitsMap[Units.TableSpoon] },
            { name: 'garam masaly', amount: 2, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'mleté kurkumy', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'mletého chilli', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'mletého římského kmínu', amount: 1, unit: UnitsMap[Units.TeaSpoon] },
            { name: 'nastrouhaného zázvoru', amount: 5, unit: UnitsMap[Units.Cm] },
            { name: 'stroužky česneku', amount: 2, unit: UnitsMap[Units.Piece] },
            { name: 'másla', amount: 30, unit: UnitsMap[Units.G] },
            { name: 'drcených rajčat', amount: 400, unit: UnitsMap[Units.G] },
            { name: 'smetany ke šlehání', amount: 250, unit: UnitsMap[Units.Ml] },
            { name: 'cukru', amount: 1, unit: UnitsMap[Units.TableSpoon] },
            { name: 'soli', amount: 2, unit: UnitsMap[Units.TeaSpoon] },
        ],
    },
}
