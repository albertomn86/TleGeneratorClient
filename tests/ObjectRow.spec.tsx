import { render, screen } from '@testing-library/react';
import ObjectRow, {ObjectRowProps, ObjectRowPropsExtended} from '../src/components/ObjectRow';
import React from 'react';
import { describe, test, expect } from 'vitest';

const objectSelected : ObjectRowPropsExtended  = {
    id: '12345',
    objectName: 'Test',
    isSelected: true,
    onChangeHandler: () => {}
}

describe('ObjectRow', () => {
  test('shows object name', async () => {
    render(<ObjectRow {...objectSelected} />);
    const row = await screen.findAllByText('Test');
    expect(row).toHaveLength(1);
  });

  test('shows tick if object is selected', async () => {
    render(<ObjectRow {...objectSelected} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('does not show tick if object is not selected', async () => {
    const object : ObjectRowPropsExtended  = {
      id: '12345',
      objectName: 'Test',
      isSelected: false,
      onChangeHandler: () => {}
    }

    render(<ObjectRow {...object} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
});