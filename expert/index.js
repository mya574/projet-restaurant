import"./index.css"
function Expert(){
    return(
        <section className="expert">
            <div className="titre">
                <h2 id="nosexperts"  className="titre-p"><span>N</span>os experts</h2><br></br>
                <p><h4> nous mettons a votre disposition nos chef les plus etoile pour vous preparez nos plats les plus delicieux </h4></p>
            </div>
            <div className="contenu">
                <div class="box">
                    <div id="image" class="imboxa"></div>
                    <div class="imtext">
                      <h3>Laura Nolaïev</h3>
                    </div>
                </div>
                <div class="box">
                    <div id="image" class="imboxb"></div>
                    <div class="imtext">
                      <h3>Juan Arbelaez</h3>
                    </div>
                </div>
                <div class="box">
                    <div id="image" class="imboxc"></div>
                    <div class="imtext">
                      <h3>Jordi Cruz</h3>
                    </div>
                </div>
                <div class="box">
                    <div id="image" class="imboxd"></div>
                    <div class="imtext">
                      <h3>Karl Marx</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Expert ;