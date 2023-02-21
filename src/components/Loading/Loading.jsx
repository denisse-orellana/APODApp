import Spinner from 'react-bootstrap/Spinner';

import s from './style.module.css';

export const Loading = () => {
  return (
    <div className={ s.containerSpinners }>
      <Spinner className={ s.spinner } variant="primary" animation="grow" size="sm" />
      <Spinner className={ s.spinner } variant="primary" animation="grow" />
      <Spinner className={ s.spinner } variant="danger" animation="grow" />
      <Spinner className={ s.spinner } variant="light" animation="grow" />
      <Spinner className={ s.spinner } variant="light" animation="grow" size="sm" />
    </div>
  )
}
