import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  color: #7bff00;
`;

export const DeleteButton = styled.button`
  background-color: #f436e7;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
`;