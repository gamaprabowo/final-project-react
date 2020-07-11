import React, { Component } from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

// component card produk untuk pembelian produk
class CardProduk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false,
    };
  }

  ButtonBeli = () => {
    this.setState({
      stock: this.state.stock - 1,
    });

    if (this.state.stock === 1) {
      this.setState({
        stock: "Tidak Tersedia",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img src={this.props.image} alt="" />
        <p>
          Harga mulai dari: <b>{this.props.harga}</b>
        </p>
        <p>
          Stock :<b>{this.state.stock}</b>
        </p>

        <Link
          to={{
            pathname: "/beli",
          }}
        >
          <button
            className="btn-click"
            onClick={this.ButtonBeli}
            disabled={this.state.disabled}
          >
            Beli
          </button>
        </Link>

        <p>Status : {this.state.status}</p>
      </div>
    );
  }
}

export default CardProduk;
