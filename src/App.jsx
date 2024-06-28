import iceCreamCup from "./img/ice-cream-cup.png";
import sticker from "./img/sticker.png";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <section class="section first">
          <h1>ICY CAKES</h1>
          <span>SAVOR EVERY SPOONFUL</span>
        </section>
        <section class="section second">
          <h2>
            Sobre <br />
            Nosotros
          </h2>
          <span>
            En Icy Cakes nos dedicamos a reinventar la experiencia de los
            postres con nuestros pastelitos en frasquitos. Nos especializamos en
            crear combinaciones de sabores únicas y deliciosas, utilizando
            ingredientes frescos y locales siempre que es posible. Cada
            pastelito en frasco que ofrecemos está meticulosamente elaborado
            para capturar la esencia de nuestros sabores más populares, desde
            clásicos como red velvet hasta creaciones innovadoras que te
            sorprenderán.
          </span>
        </section>

        <section class="section third">
          <span class="name">ICY CAKES</span>
          <span class="name">ICY CAKES</span>
          <span class="name">ICY CAKES</span>
          <span class="name">ICY CAKES</span>
        </section>
        <section class="section forth">
          <section>
            <h2>MISIÓN</h2>
            <span>
              Nuestra misión es ofrecer a nuestros clientes productos de la más
              alta calidad, elaborados con ingredientes naturales y
              cuidadosamente seleccionados. Nos esforzamos por innovar
              constantemente en sabores y presentaciones, buscando siempre
              superar las expectativas de nuestros clientes y convertir cada
              momento en una celebración de sabor y frescura.
            </span>
            <h2>VISION</h2>
            <span>
              Nos visualizamos como líderes en innovación dentro de la industria
              de helados, ofreciendo constantemente nuevos sabores y
              experiencias únicas que deleiten a nuestros clientes. Nos
              esforzamos por expandir nuestra presencia de manera sostenible,
              manteniendo siempre nuestro compromiso con la calidad, la
              autenticidad y la satisfacción del cliente.
            </span>
          </section>

          <div></div>
          <img
            src={iceCreamCup}
            className="ice-cream-cup"
            alt="glass with icecream"
          />

          <img src={sticker} className="sticker" alt="sticker" />
        </section>
      </main>
    </>
  );
}

export default App;
