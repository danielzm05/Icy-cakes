import iceCreamCup from "../img/ice-cream-cup.png";
import sticker from "../img/sticker.png";
import * as Icon from "react-feather";
import { useNavigate } from "react-router-dom";
import { Cart } from "../components/Cart";
import { useState } from "react";
export function MainPage() {
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header>
        <ul>
          <li onClick={() => navigate("/productos")}>Productos</li>
          <li onClick={() => setOpenCart(true)}>
            <Icon.ShoppingCart />
          </li>
        </ul>
      </header>
      <main>
        <section className="section first">
          <h1>ICY CAKES</h1>
          <span>SAVOR EVERY SPOONFUL</span>
        </section>
        <section className="section second">
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
          <img
            src={iceCreamCup}
            className="ice-cream-cup"
            alt="glass with icecream"
          />
        </section>

        <section className="section third">
          <span className="name">ICY CAKES</span>
          <span className="name">ICY CAKES</span>
          <span className="name">ICY CAKES</span>
          <span className="name">ICY CAKES</span>
        </section>
        <section className="section forth">
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
            <h2>VISIÓN</h2>
            <span>
              Nos visualizamos como líderes en innovación dentro de la industria
              de helados, ofreciendo constantemente nuevos sabores y
              experiencias únicas que deleiten a nuestros clientes. Nos
              esforzamos por expandir nuestra presencia de manera sostenible,
              manteniendo siempre nuestro compromiso con la calidad, la
              autenticidad y la satisfacción del cliente.
            </span>
          </section>
          <section></section>
          <img src={sticker} className="sticker" alt="sticker" />
        </section>
        <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
      </main>
    </>
  );
}
