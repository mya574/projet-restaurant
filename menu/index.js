import"./index.css"
function menu(){
    return(
        <section id="menu" >
            <ul className ="etapes" >
               <h1 class="titre" >Menu carte blanche</h1>
                <li><h3>4 Étapes (pour l'ensemble de la table)</h3></li><br></br>
                <li>Amuse-bouche, entrée, poisson, viande, dessert....................................................................................................................................79 €</li><br></br>
                <li><h3>6 Étapes (pour l'ensemble de la table)</h3></li><br></br>
                <li>Amuse-bouche, 2 entrées, poisson, viande, pré dessert, dessert...............................................................................................................98 €</li><br></br>
                <li><h3>Prestige (pour l'ensemble de la table)</h3></li><br></br>
                <li>Amuse-bouche, 3 entrées, langoustines, viande, pré dessert, dessert...........................................................................................................128 €</li><br></br>
            </ul>
            <ul className ="etapes" >
               <h1 class="titre" >ENTRÉES</h1>
                <li><h3>Bar mariné aux olives noires cuite basse température</h3></li><br></br>
                <li>Carottes et orange, lait fermenté et huile d'orange....................................................................................................................................32 €</li><br></br>
                <li><h3>Pâté en croûte de pintade fermière au foie gras</h3></li><br></br>
                <li>Trompettes de la mort et confiture de pruneaux...............................................................................................................35 €</li><br></br>
                <li><h3>Fricassée de champignons sauvages</h3></li><br></br>
                <li>œuf parfait et noix de bœuf séchée, espuma de champignons de Paris au café...........................................................................................................35 €</li><br></br>
            </ul>
            <ul className ="verrs" >
                <h1 class="titre" >Accord mets et vins</h1>
              
                <li><h3>Decouverte 2 verrs ......................................................................................................................................................79 €</h3></li><br></br>
               
                <li><h3>Evasion 3 verrs...........................................................................................................................................................79 €</h3></li><br></br>
                
                <li><h3>prestige 5 verrs..............................................................................................................................................................79 €</h3></li><br></br>

            </ul>
            
        </section>
    
    )
}export default menu ; 


