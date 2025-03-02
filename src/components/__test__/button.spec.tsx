import { render } from '@testing-library/react';
import { debug } from 'console';
import React from 'react';
import { Button } from '../button';

describe('<Button />', () => {
  it('should render OK with correct props', () => {
    const { getByText, rerender } = render(
      <Button canClick={true} loading={false} actionText={'test'} />
    );
    getByText('test');
    // rerender(<Button canClick={true} loading={true} actionText={'test'} />)
    // getByText('Loading...')
  });

  it('should display loading', () => {
    const { getByText, container } = render(
      <Button canClick={false} loading={true} actionText={'test'} />
    );
    getByText('Loading...');
    expect(container.firstChild).toHaveClass('pointer-events-none');
  });
});
