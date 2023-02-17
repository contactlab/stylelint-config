import {css} from 'https://cdn.jsdelivr.net/npm/emotion@latest/dist/emotion.esm.js';

const linkColor = 'black';
const activeColor = 'tomato';

export const header = css`
  display: flex;
  padding: 3.2rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 24px;
  background-color: #fff;

  > a {
    &:link {
      color: ${linkColor};
    }

    &:hover {
      color: ${activeColor};
    }
  }
`;
