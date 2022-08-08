import { FC } from 'react';
import { TStudentCell } from './TStudentCell';
import './StudentCell.css';

export const StudentCell: FC<TStudentCell> = ({ studentClassName, studentNames }) => (
  <div className="StudentCell">
    <h3 className="StudentCell__title">Name</h3>
    <span className="StudentCell__description">{studentClassName}</span>
    <br />
    <h3 className="StudentCell__title">Students</h3>
    <span className="StudentCell__description">{studentNames.join(', ')}</span>
  </div>
)
