import React from "react";
import { Container } from "./styles";
import contatoimg from "../../assets/contatoimg/Group.png"

export default function Reserva() {
  return (
    <Container>
      <div className="container">
        <div className="left">
          <div className="overlay">
            <h1>LÉLITE FRANÇAISE</h1>

            <div className="text">
              <h2>Reserve your table</h2>

              <p>And live an unforgettable experience.</p>

              <span>
                Fill in the information on the side and reserve your table.
              </span>
            </div>
          </div>
        </div>

        <div className="right">
          <h2 className="title">MAKE YOUR RESERVATION</h2>

          <form>
            <div className="row">
              <div className="field">
                <label>Date</label>
                <input type="date" />
              </div>

              <div className="field">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>

            <div className="field">
              <label>Number of people</label>

              <select>
                <option>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5 people</option>
              </select>
            </div>

            <div className="row">
              <div className="field">
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" />
              </div>

              <div className="field">
                <label>Telephone</label>
                <input type="text" placeholder="(11) 999999999" />
              </div>
            </div>

            <div className="field">
              <label>Observations (optional)</label>

              <textarea placeholder="Any comments or special requests?" />
            </div>

            <button type="submit">
              CONFIRM YOUR RESERVATION
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}