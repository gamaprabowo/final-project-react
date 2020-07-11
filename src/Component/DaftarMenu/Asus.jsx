import React from "react";
import '../CSS/style.css';
import { Jumbotron, Container } from "reactstrap";
import CardProduk from "./CardProduk";
function Asus(params) {
  return (
    <div>
      {/* sebagai header pada halaman menu Asus */}
      <Jumbotron fluid className="jumbotron-asus-bg">
        <Container fluid>
          <h1 className="display-3">Asus GM-Store</h1>
          <p className="lead">Temukan produk Asus favoritmu Di GM-Store.</p>
        </Container>
      </Jumbotron>
      {/* daftar card produk pada halaman menu asus */}
      <Container>
      <CardProduk
       image="https://static.bmdstatic.com/pk/product/medium/5e97cba269ca6.jpg"
       nama="ASUS Notebook A412FL-EK551T Silver"
       stock="7"
       harga="Rp 12.299.000"
      />
      <CardProduk
       image="https://static.bmdstatic.com/pk/product/medium/5ec741b3ebd8d.jpg"
       nama="ASUS Notebook A409MA-BV112T Slate Grey"
       stock="9"
       harga="Rp 4.299.000"
      />
       <CardProduk
       image="https://static.bmdstatic.com/pk/product/medium/5e686dc85e0ee.jpg"
       nama="ASUS Notebook A412FL-EK752T Slate Grey"
       stock="2"
       harga="Rp 14.799.000"
      />
      <CardProduk
       image="https://static.bmdstatic.com/pk/product/medium/5d2d4b290ae93.jpg"
       nama="ASUS Notebook A411QA-BV202T"
       stock="8"
       harga="Rp 5.799.000"
      />
      <CardProduk
       image="https://static.bmdstatic.com/pk/product/medium/5eec624a037f1.jpg"
       nama=" ASUS Notebook A409JB-EK502T Transparent Silver"
       stock="20"
       harga="Rp 9.499.000"
      />
      <CardProduk
       image="https://static.bmdstatic.com/pk/product/medium/5e97b857cae02.jpg"
       nama="ASUS Notebook X441BA-GA943T Rose Gold"
       stock="5"
       harga="Rp 4.799.000"
      />
      </Container>
    </div>
  );
}

export default Asus;
