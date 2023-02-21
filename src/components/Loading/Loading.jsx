import Spinner from 'react-bootstrap/Spinner';

import { LoadingContainer } from './StyledLoading';

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner className={ 'mx-1' } variant="primary" animation="grow" size="sm" />
      <Spinner className={ 'mx-1' } variant="primary" animation="grow" />
      <Spinner className={ 'mx-1' } variant="danger" animation="grow" />
      <Spinner className={ 'mx-1' } variant="light" animation="grow" />
      <Spinner className={ 'mx-1' } variant="light" animation="grow" size="sm" />
    </LoadingContainer>
  )
}
