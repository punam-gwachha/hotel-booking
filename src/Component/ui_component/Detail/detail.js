import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../../../src/image/login.jpg';

class Detail extends Component {
  render() {
    return (
      <DetailSection className="container">
        <div className="row">
          <div className="card">
            <ul className="list-group list-group-flush">
              <Link to="/">
                <li className="list-group-item">Contact Information</li>
              </Link>
              <Link to="/">
                <li className="list-group-item">Comment</li>
              </Link>
              <Link to="/">
                <li className="list-group-item">Booking</li>
              </Link>
            </ul>
          </div>
          <div className="card-cd">
            <div className="card-header ">
              <div className="row">
                <div className="col-md-6">Account Detail</div>
                <div className="col-md-5"></div>
                <div className="col-md-1">
                  <div className="icon">
                    <i className="fas fa-edit  "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <img src={Login} className="center image-class" />
              <center>
                <div className="col-md-6">
                  <input type="FirstName" placeholder="First Name" />
                </div>
                <br />​
                <div className="col-md-6">
                  <input type="LastName" placeholder="Last Name" />
                </div>
                <br />
                <div className="col-md-6">
                  <input type="email" placeholder="Email" />
                </div>
                <br />​
                <button type="save" className="btn btn-primary">
                  Save
                </button>
                <button type="cancel" className="btn btn-primary">
                  Cancel
                </button>
              </center>
            </div>
          </div>
        </div>
      </DetailSection>
    );
  }
}

export default Detail;

const DetailSection = styled.div`
  .card {
    width: 200px;
    padding: 5px;
    margin-top: 12px;
    border: #ced4da solid 1px;
  }
  .card-cd {
    margin-left: 5px;
    width: 60%;
    padding: 5px;
    margin-top: 12px;
    border: #ced4da solid 1px;
  }
  img {
    height: 150px;
    margin: auto;
    display: flex;
  }
  button {
    margin: 25px;
  }
`;
