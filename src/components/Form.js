import { useState } from "react";

export default ({ user, onSubmit }) => {
  return (
    <div>
      <span>Új felhasználó létrehozása</span>
      <form onSubmit={onSubmit}>
        <input type="text" id="name" name="name" placeholder="Név" required />
        <input
          type="text"
          id="mail"
          name="mail"
          placeholder="E-mail"
          required
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Telefonszám"
          required
        />
        <input type="submit" value="Regisztráció" />
      </form>
    </div>
  );
};
