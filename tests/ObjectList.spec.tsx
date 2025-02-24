import { render, screen } from '@testing-library/react';
import {ObjectRowProps} from '../src/components/ObjectRow';
import ObjectList from '../src/components/ObjectList';
import React from 'react';
import { describe, test, expect } from 'vitest';

const objects : ObjectRowProps[] = [
    {
        id: '12345',
        objectName: 'Test',
        isSelected: true
    },
    {
        id: '12346',
        objectName: 'Test',
        isSelected: true
    }
];

describe('ObjectList', () => {
    test('shows list of items', async () => {
        render(<ObjectList objects={objects} />);
        const rows = await screen.findAllByRole('row');
        expect(rows).toHaveLength(2);
    });
});