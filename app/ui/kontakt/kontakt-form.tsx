"use client";
import { useState } from "react";
import "./kontakt.css";

export function KontaktForm() {
  function sendMessage() {}

  return (
    <form action={sendMessage} className="contact-form">
      <label className="form-label">Imię:</label>
      <input type="text" id="name-input" className="form-input" />
      <label className="form-label">Email:</label>
      <input id="email-input" type="email" className="form-input" />
      <label className="form-label">Wiadomość:</label>
      <textarea id="message-input" className="form-input" />
      <input
        type="button"
        id="send-button"
        className="send-button"
        value="Wyślij"
      ></input>
    </form>
  );
}
