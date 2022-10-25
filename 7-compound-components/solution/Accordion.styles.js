import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #6867ac;
  border-bottom: 8px solid #ffbcd1;
  font-family: "Inter", sans-serif;
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 33px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;
`;

export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 728px;
  width: 100%;
  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: space-between;
  cursor: pointer;
  border: 1px solid #ce7bb0;
  border-radius: 8px;
  box-shadow: #ce7bb0;
  margin-bottom: 1px;
  font-size: 22px;
  font-weight: normal;
  background: #ce7bb0;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
`;

export const Body = styled.div`
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  background: #ce7bb0;
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: #ce7bb0;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  &.open {
    max-height: 0;
    overflow: hidden;
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
`;
