import React from "react";
import styled from "styled-components";
import imgWrapper from "../../../image/wrapper.jpg";
import SearchHotels from "../search";
import Title from "../../../common/Title";

export default function Wrapper() {
  return (
    <HomeWrapper>
      <div className="wrapper_box">  
        <Title title="Looking for Best Hotels in Nepal Search Now" fontSize={35} center={true} fontWeight={800} color='#fff'  />
        <SearchHotels />
      </div>
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  background-image: url(${imgWrapper});
  background-size: cover;
  font-family: 'Poppins', sans-serif;
  height: 80vh;
  .wrapper_box{
    position:absolute;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    width:70%;
  }
`;
