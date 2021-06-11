import React from "react";
import {
  FormGroup,
  Label,
  Textarea,
  buttonReset,
} from "@raketa-cms/raketa-mir";
import styled from "styled-components";
import toHTML from "./toHTML";

const ICONS = {
  eye: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNzUgOUMwLjc1IDkgMy43NSAzIDkgM0MxNC4yNSAzIDE3LjI1IDkgMTcuMjUgOUMxNy4yNSA5IDE0LjI1IDE1IDkgMTVDMy43NSAxNSAwLjc1IDkgMC43NSA5WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOSAxMS4yNUMxMC4yNDI2IDExLjI1IDExLjI1IDEwLjI0MjYgMTEuMjUgOUMxMS4yNSA3Ljc1NzM2IDEwLjI0MjYgNi43NSA5IDYuNzVDNy43NTczNiA2Ljc1IDYuNzUgNy43NTczNiA2Ljc1IDlDNi43NSAxMC4yNDI2IDcuNzU3MzYgMTEuMjUgOSAxMS4yNVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
  questionmark:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDMuMDA0NDhDMS4yMzUxIDIuMzM2MTQgMS42OTkxNSAxLjc3MjU4IDIuMzA5OTUgMS40MTM2MUMyLjkyMDc2IDEuMDU0NjMgMy42Mzg5IDAuOTIzNDE0IDQuMzM3MTggMS4wNDMxOUM1LjAzNTQ2IDEuMTYyOTYgNS42Njg4MiAxLjUyNiA2LjEyNTA4IDIuMDY4QzYuNTgxMzQgMi42MTAwMSA2LjgzMTA2IDMuMjk2IDYuODMgNC4wMDQ0OEM2LjgzIDYuMDA0NDggMy44MyA3LjAwNDQ4IDMuODMgNy4wMDQ0OCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMy45MTAwMyAxMS4wMDQ1SDMuOTIwMDMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CloseButton = styled.button`
  ${buttonReset};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1001;
  width: 32px;
  height: 32px;
  background: transparent;
  color: ${(props) => props.theme.colors.black};
  font-size: 32px;
  line-height: 32px;
`;

const ModalContent = styled.div`
  position: relative;
  width: 90%;
  background-color: ${(props) => props.theme.colors.white};
`;

const ModalScroll = styled.div`
  height: 80vh;
  padding: 2em;
  overflow-y: auto;
`;

const IconButton = styled.button`
  ${buttonReset};
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.black};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  line-height: 1.5;
  text-indent: -9999px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const TextareaWrapper = styled.div`
  position: relative;
`;

const ButtonToolbar = styled.div`
  position: absolute;
  right: 0.5em;
  bottom: 1em;
  display: flex;
  gap: 0.5em;
`;

const Modal = ({ children, onClose }) => (
  <ModalWrapper>
    <ModalContent>
      <CloseButton type="button" onClick={onClose}>
        &times;
      </CloseButton>

      <ModalScroll>{children}</ModalScroll>
    </ModalContent>
  </ModalWrapper>
);

const PreviewModal = ({ content, onClose }) => (
  <Modal onClose={onClose}>
    <div dangerouslySetInnerHTML={{ __html: toHTML(content) }} />
  </Modal>
);

const MarkdownInput = ({
  label = "Text",
  height = "200px",
  documentationLink = "https://guides.github.com/features/mastering-markdown/",
  value,
  onChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <FormGroup>
      {label && <Label>{label}</Label>}

      <TextareaWrapper>
        <Textarea
          value={value}
          style={{
            height,
            resize: "vertical",
          }}
          onChange={(e) => onChange(e.target.value, e)}
          {...props}
        />

        <ButtonToolbar>
          <IconButton
            type="button"
            style={{ backgroundImage: `url(${ICONS.eye})` }}
            onClick={() => setOpen(true)}
          >
            Preview
          </IconButton>
          <IconButton
            as="a"
            style={{
              backgroundImage: `url(${ICONS.questionmark})`,
              backgroundSize: "30%",
            }}
            href={documentationLink}
            target="_blank"
          >
            Help
          </IconButton>
        </ButtonToolbar>
      </TextareaWrapper>

      {open && <PreviewModal content={value} onClose={() => setOpen(false)} />}
    </FormGroup>
  );
};

export default MarkdownInput;
