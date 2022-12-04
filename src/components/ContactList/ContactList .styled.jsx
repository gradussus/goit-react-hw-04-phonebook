import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #ffd1e0;
  border-radius: 10px;
  padding: 25px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  text-align: start;
`;

export const DeleteBtn = styled.button``;
