import React from "react";
import {
  VoxelAvatar,
  VoxelBrandAvatar,
  VoxelButton,
  VoxelIcon,
} from "@voxel/react";

import "./App.css";
import logo from "./assets/logo.svg";

import { BrandContainer, Header } from "./components/HeaderStyled";
import {
  Menu,
  MenuContainer,
  MenuItem,
  MenuUserContainer,
  MenuUserText,
} from "./components/MenuStyled";
import {
  ButtonContainer,
  ContentContainer,
  TextContainer,
} from "./components/ContentStyled";

function App() {
  return (
    <div className="App">
      <Header>
        <BrandContainer>
          <VoxelBrandAvatar src={logo} size="L"></VoxelBrandAvatar>
        </BrandContainer>
        <MenuContainer>
          <Menu>
            <MenuItem className="ids-text-label-medium-bold">Menu 1</MenuItem>
            <MenuItem className="ids-text-label-medium-bold">Menu 2</MenuItem>
          </Menu>
        </MenuContainer>
        <MenuUserContainer>
          <MenuUserText className="ids-text-label-medium-bold">
            Guilherme Failace
          </MenuUserText>
          <VoxelAvatar
            contrast="dark"
            size="L"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP_yTp-tSNKO37HVn62okVQ6fe0RXvB3Ifg&usqp=CAU"
          />
        </MenuUserContainer>
      </Header>
      <ContentContainer>
        <TextContainer>
          <span>Teste 2</span>
        </TextContainer>
        <ButtonContainer>
          <VoxelButton>enviar</VoxelButton>
        </ButtonContainer>
      </ContentContainer>
    </div>
  );
}

export default App;
