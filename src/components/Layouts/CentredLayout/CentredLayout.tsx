import { FC } from 'react';
import { TCentredLayout } from './TCentredLayout';
import './CentredLayout.css';

export const CentredLayout: FC<TCentredLayout> = ({ children }) => (
  <div className="CentredLayout">
    {children}
  </div>
);
