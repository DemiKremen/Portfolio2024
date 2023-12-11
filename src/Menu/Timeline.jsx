import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import '../Menu/Timeline.css';

export default function Timeline() {
  return (
    <MDBContainer fluid className="py-5">
      <div className="main-timeline fondotimeline">
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2018-2020</h3>
              <p className="mb-0">LODISER S.A.<br />Diseñador Jr en el Área de Marketing</p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2021</h3>
              <p className="mb-0">Lifernado Germany<br />Delivery en Koln</p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2022</h3>
              <p className="mb-0">Social Media<br />Diseñador Freelance</p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2023-Actualmente</h3>
              <p className="mb-0">Tropipay<br />Diseñador Digital</p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}
