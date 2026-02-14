import earth from "../assets/character_earth_chikyu.png";


function Main() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">Youth GEO Japan</h2>
          <p className="hero__sub">好奇心を、まっすぐ未来へ。</p>
        </div>

        <div className="hero__right">
          {/* ここにSVG/画像ロゴ */}
          { /* JSXではJSの値を使うときは {} で囲む
          タグ属性の間にはコメントできない*/}
          <img
            src={earth}　
            alt="地球キャラクター"
            className="hero__logo"
          />
        </div>
      </section>

      {/* VISION */}
      <section className="vision">
        <div className="vision__left">
          <h3 className="vision__title">
            Vision:<br />
            “地理好き”は、未来を拓くハブになる
          </h3>
        </div>

        <div className="vision__right">
          <p>地理への好奇心は、社会を変え、未来を拓く力になります。</p>
          <p>
            Youth GEO Japanは、“地理”という現代社会の鍵を握る若者が、リーダーシップを発揮し、社会へポジティブな変化をもたらすことを目指しています。
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;
