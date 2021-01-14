import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./navbar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <div>
        <Navbar className="Navbar">
          <Navbar.Brand style={{ fontWeight: 'bold' }} href="/">PicDacNoe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/listhistory">History List</Nav.Link>
            </Nav>
            {(() => {
              if (localStorage.getItem('token') === null) {
                return (
                  <div>
                    <a href="/signin">
                      <button type="button" class="btn btn-outline-success">
                        Sign in
                      </button>
                    </a>
                  </div>
                );
              } else {
                return (
                  <DropdownButton
                    alignRight
                    variant='info'
                    title={localStorage.getItem('username')}
                  >
                    <Dropdown.Item tag={Link} href="/ranking">Ranking</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item tag={Link} hreft='/' onClick={() => {
                      window.localStorage.removeItem('username');
                      window.localStorage.removeItem('token');
                      window.localStorage.removeItem('email');
                      window.localStorage.removeItem('id');
                      window.location.reload()
                    }} eventKey="4">Log out</Dropdown.Item>
                  </DropdownButton>
                );
              }
            })()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div >
  );
}
