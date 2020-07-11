import React from "react";
import "../CSS/style.css";
import Asus from "../Image/asus-img-1.jpg";
import Macbookpro from "../Image/macbookpro-2020.jpg";
import LenovoYoga from "../Image/lenovo-yoga-730.jpg";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import FooterComp from "./FooterComp";

const HomeComp = (props) => {
  return (
    <div>
      {/* bagian header yg menggunakan component jumbotron */}
      <Jumbotron fluid className="home-header-bg">
        <Container fluid>
          <h1 className="display-3">Selamat Datang di GM-Store</h1>
          <p className="lead">
            Temukan laptop yang bisa menyesuaikan kebutuhanmu hanya di GM-Store.
          </p>
        </Container>
      </Jumbotron>
      {/* layout component untuk isi konten */}
      <Container>
        {/* layout pertama */}
        <Row>
          <Col xs="6">
            <div>
              <img className="img-produk" src={Asus} alt="" />
            </div>
          </Col>
          <Col xs="6">
            <div className="spesifikasi">
              <h2>
                LAPTOP ASUS VivoBook A412FA EK501T i5-8265U 8GB/512GB
                SSD/14"/W10
              </h2>
              <h3>Spesifikasi :</h3>
              <ul>
                <li>Intel Core i5-8265U</li>
                <li>8 GB DDR4</li>
                <li>512 GB SSD</li>
                <li>WiFi, Bluetooth</li>
                <li>Intel UHD Graphics 620</li>
                <li>14.0-inch Full HD</li>
                <li>Windows 10 Home</li>
                <li>Fingerprint</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* layout kedua */}
        <Row>
          <Col xs="6">
            <div className="spesifikasi">
              <h2>Macbook Pro 13 2020</h2>
              <h3>Spesifikasi :</h3>
              <ul>
                <li>Layar Retina</li>
                <li>
                  Prosesor. Intel Core i5 generasi ke-8 quad-core 1,4 GHz, Turbo
                  Boost hingga 3,9 GHz, dengan eDRAM sebesar 128 MB
                </li>
                <li>Penyimpanan1 256 GB</li>
                <li>Memori terpasang LPDDR3 2133 MHz sebesar 8 GB</li>
                <li>Intel Iris Plus Graphics 645</li>
                <li>Kamera HD FaceTime 720p</li>
                <li>Speaker stereo dengan rentang dinamis tinggi</li>
                <li>macOS</li>
              </ul>
            </div>
          </Col>
          <Col xs="6">
            <div className="">
              <img className="img-produk-apple" src={Macbookpro} alt="" />
            </div>
          </Col>
        </Row>
        {/* layout ketiga */}
        <Row>
          <Col xs="6">
            <div>
              <img className="img-produk-lenovo" src={LenovoYoga} alt="" />
            </div>
          </Col>
          <Col xs="6">
            <div className="spesifikasi">
              <h2>Lenovo Yoga 730 (13)</h2>
              <h3>Spesifikasi :</h3>
              <ul>
                <li>Generasi ke 8 Intel® Core™ i7-8550U</li>
                <li>13.3” FHD (1920 x 1080) layar sentuh IPS</li>
                <li>Intel® HD Graphics</li>
                <li>WiFi, Bluetooth</li>
                <li>16 GB DDR4</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default HomeComp;
