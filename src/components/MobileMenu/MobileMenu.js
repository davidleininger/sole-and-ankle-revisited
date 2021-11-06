/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}><Icon id="close"/><VisuallyHidden>Close</VisuallyHidden></CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: hsla(220 5% 40% / 0.8);
  display: flex;
  inset: 0;
  justify-content: flex-end;
  position: fixed;
`
const Content = styled(DialogContent)`
  background: white;
  display: flex;
  flex-direction: column;
  width: 300px;
`
const CloseButton = styled(UnstyledButton)`
  padding: 16px;
  position: absolute;
  right: 16px;
  top: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    right: 0;
  }
`
const Filler = styled.div`
  flex: 1;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 32px;
`
const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`
const Footer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  padding: 32px;
`
const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
`

export default MobileMenu;
