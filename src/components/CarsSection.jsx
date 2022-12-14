import React from "react";
import styled from "styled-components";

const CarsSection = () => {
  return (
    <CarsContainer>
      <div className="title">
        <h2>CARS</h2>
        <p>Choose from endless options</p>
      </div>
      <div className="cars">
        <div className="item">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <p>TESLA</p>
        </div>
        <div className="item">
          <img
            src="https://audimediacenter-a.akamaihd.net/system/production/media/84162/images/a5ae0df617708b2663d5e0778117800e9a0961ed/A1912043_blog.jpg?1582561108"
            alt=""
          />
          <p>Audi</p>
        </div>
        <div className="item">
          <img
            src="https://www.forbes.com/wheels/wp-content/uploads/2021/11/2022-BMW-7-Series-seo.jpg"
            alt=""
          />
          <p>BMW</p>
        </div>
        <div className="item">
          <img
            src="https://s3-prod.autonews.com/s3fs-public/styles/1200x630/public/3ACLASS-02_i.jpg"
            alt=""
          />
          <p>Mercedes Benz</p>
        </div>
        <div className="item">
          <img
            src="https://www.topgear.com/sites/default/files/2022/06/1-Kia-Ceed.jpg"
            alt=""
          />
          <p>Budget Cars</p>
        </div>
        <h2>Other Cars</h2>
      </div>
    </CarsContainer>
  );
};
const CarsContainer = styled.div`
  padding: 4em 2em;
  .title {
    h2 {
      text-align: center;
      font-size: 2em;
      font-family: "Poppins";
      color: #414141;
    }
    p {
      text-align: center;
      margin-bottom: 2em;
      color: gray;
      font-size: 20px;
    }
  }
  .cars {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
    .item {
      height: 150px;
      width: 250px;
      position: relative;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 3px black;
        filter: brightness(0.7);
        :hover {
          filter: brightness(1);
          transition: 0.3s;
          cursor: pointer;
        }
      }
      p {
        position: absolute;
        bottom: 10%;
        color: white;
        background: #0000007f;
        padding: 7px;
        border-radius: 10px;
      }
    }
    h2 {
      border-radius: 10px;
      padding: 3em;
      :hover {
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
`;

export default CarsSection;
