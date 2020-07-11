import React from "react";
import {
  Container,
  Col,
  Row, 
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";


class FormBeli extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      nama:"",
      alamat:"",
      alamatLengkap:"",
      kota:"",
      kabupaten:"",
      kodePos:0,

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 
  }

  onChange(event) {
    const { name, value  } = event.target;
    this.setState({ [name] : value});
  }

  onSubmit(event){
    const {email,nama,alamat,alamatLengkap,kota,kabupaten,kodepos} = this.state;
    alert(`
    Silahkan Cek email anda untuk mengkonfirmasi pesanan anda!
    Email     : ${email}
    Nama      : ${nama}
    Alamat    : ${alamat} ${alamatLengkap} ${kota} ${kabupaten}
    Kode Pos  : ${kodepos}
    `);
    event.preventDefault();
  }




  render(){
    const {email,nama,alamat,alamatLengkap,kota,kabupaten,kodepos} = this.state;
    return (
      <div className="form-beli">
        <Container>
          <Form onSubmit={this.onSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Alamat Email anda"
                    value={email}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="namaLengkap">Nama Lengkap</Label>
                  <Input
                    type="namaLengkap"
                    name="nama"
                    id="namaLengkap"
                    placeholder="Nama Lengkap"
                    value={nama}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="alamat">Alamat</Label>
              <Input type="text" name="alamat" id="alamat" placeholder="Alamat" value={alamat} onChange={this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for="alamatLengkap">Alamat Lengkap</Label>
              <Input
                type="text"
                name="alamatLengkap"
                id="alamatLengkap"
                placeholder="Apartment,No.Rumah,RT/RW"
                value={alamatLengkap}
                onChange={this.onChange}
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="kota">Kota</Label>
                  <Input type="text" name="kota" id="kota"  value={kota}  onChange={this.onChange}/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="kabupaten">Kabupaten</Label>
                  <Input type="text" name="kabupaten" id="kabupaten" value={kabupaten} onChange={this.onChange} />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="kodepos">Kode Pos</Label>
                  <Input type="number" name="kodepos" id="kodepos" value={kodepos} onChange={this.onChange} />
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit">Kirim</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default FormBeli;
