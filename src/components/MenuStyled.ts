import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 40%;
`;

export const MenuItem = styled.li`
  align-items: center;
  color: rgba(255, 255, 255, 1);
  display: flex;
  margin: 0 0.5rem;
  width: fit-content;
`;

export const MenuUserContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 55%;
`;

export const MenuUserText = styled.p`
  align-items: center;
  color: rgba(255, 255, 255, 1);
  display: flex;
  margin: 0 0.5rem;
  text-align: right;
  width: fit-content;
`;
