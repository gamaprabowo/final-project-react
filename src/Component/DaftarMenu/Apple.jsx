import React, { useState } from "react";
import "../CSS/style.css";
import { Jumbotron, Container } from "reactstrap";
import FooterComp from "../HomeComp/FooterComp";
import CardProduk from "./CardProduk";

function Apple(props) {
  return (
    <div>
      {/* Sebagai header menu apple */}
      <Jumbotron fluid className="jumbotron-apple-bg">
        <Container fluid>
          <h1 className="display-3">Apple GM-Store</h1>
          <p className="lead">Temukan produk Apple favoritmu Di GM-Store.</p>
        </Container>
      </Jumbotron>
      <Container>
        {/* daftar card produk pada halaman menu apple */}
        <CardProduk
          image="https://asset.kompas.com/crops/RgC3AaQwCSYsuZRpCO9OSyRrE6s=/40x44:784x541/750x500/data/photo/2019/11/14/5dcca5e5d5a59.png"
          nama="Macbook Pro 16 inc 2020"
          stock="10"
          harga="Rp.36.000.000"
        />
        <CardProduk
          image="https://gizmologi.id/wp-content/uploads/2020/05/macbook_pro_13_1.jpg"
          nama="Macbook Pro 13 inc 2020"
          stock="8"
          harga="Rp.27.000.000"
        />
        <CardProduk
          image="https://asset-a.grid.id/crop/0x0:0x0/750x500/photo/makemac/2017/06/iMac-2017.jpg"
          nama="IMac 27 inc 2017 Retina"
          stock="3"
          harga="Rp 15.950.000"
        />
        <CardProduk
          image="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/19/5445659/5445659_ac8e4028-699f-46dc-bff0-20500e3a0d1f_1499_1499"
          nama="Iphone 11 Max Pro 256GB"
          stock="6"
          harga=""
        />
        <CardProduk
          image="https://ibox.co.id/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/w/mwp22_av2.jpeg"
          nama="AirPods Pro Bluetooth 5.0"
          stock="25"
          harga="Rp4.199.000"
        />
        <CardProduk
          image="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/07/10/3958746736.jpg"
          nama="Macbook Air 2019 Pro Touch"
          stock="12"
          harga=" Rp 17.050.000"
        />
      </Container>
    </div>
  );
}

export default Apple;
