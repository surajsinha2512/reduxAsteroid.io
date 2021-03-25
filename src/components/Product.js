import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
 
const Product = ({ product }) => {
  console.log(product);
  return (
    <>
    <MDBCol>
      <MDBCard style={{ width: "25rem"}}>
        <MDBCardImage className="img-fluid" src={product.provider.logoUrl} waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:"white"}}>{product.details.name}</MDBCardTitle>
          <MDBCardText style={{color:"white"}}>
          {`location:-${product.location.name}`}
          </MDBCardText>
          <MDBCardText style={{color:"white"}}>
          Price:-{product.price.total}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </>
  );
};

export default Product;
