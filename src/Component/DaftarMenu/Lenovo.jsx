import React from "react";
import "../CSS/style.css";
import { Jumbotron, Container } from "reactstrap";
import CardProduk from "./CardProduk";
function Lenovo(params) {
  return (
    <div>
      {/* Sebagai header menu lenovo */}
      <Jumbotron fluid className="jumbotron-lenovo-bg">
        <Container fluid>
          <h1 className="display-3">Lenovo GM-Store</h1>
          <p className="lead">Temukan produk Lenovo favoritmu Di GM-Store.</p>
        </Container>
      </Jumbotron>

      {/* daftar card produk pada halaman lenovo */}
      <Container>
        <CardProduk
          image="https://static.bmdstatic.com/pk/product/medium/5bfe6057d132b.jpg"
          nama="LENOVO IdeaPad IP330-15ICH"
          stock="10"
          harga="Rp 12.443.000"
        />
        <CardProduk
          image="https://www.lenovo.com/medias/lenovo-laptop-ideapad-330s-15-hero.png?context=bWFzdGVyfHJvb3R8NTMzMTl8aW1hZ2UvcG5nfGgxYS9oOTMvOTk4NDIwODk5NDMzNC5wbmd8ODQ3NTM5MjNjYmQ0Y2M4M2JkMTZmNGRjMTAwOWI5YmM2NGZmNzkzZDY3Y2NiZDEwYTRmMzQzY2FiMjU3OWZlOQ"
          nama="LENOVO IdeaPad IP330S-14IKB"
          stock="13"
          harga="Rp 12.499.000"
        />
        <CardProduk
          image="https://gizmologi.id/wp-content/uploads/2020/02/lenovo-ideapad-s340-15-amd.jpg"
          nama=" Lenovo Ideapad S340 Ryzen"
          stock="11"
          harga="Rp6.499.000"
        />
        <CardProduk
          image="https://static.bmdstatic.com/pk/product/medium/5efd5bcfd7f15.jpg"
          nama="LENOVO IdeaPad S145-14IGM"
          stock="9"
          harga="Rp 4.099.000"
        />
        <CardProduk
          image="https://static.bmdstatic.com/pk/product/medium/5df33cd965b5c.jpg"
          nama="LENOVO IdeaPad C340-14IML"
          stock="12"
          harga="Rp 15.299.000"
        />
        <CardProduk
          image="https://static.bmdstatic.com/pk/product/medium/5ef06f55dde74.jpg"
          nama="LENOVO IdeaPad Gaming 3i"
          stock="16"
          harga="Rp 12.999.000"
        />
      </Container>
    </div>
  );
}

export default Lenovo;
