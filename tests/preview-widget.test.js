import { expect, test } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import PreviewWidget from '../src/Components/preview-widget';

jest.useFakeTimers();

test('Component should be rendered correctly', () => {
    const testRenderer = renderer.create(
        <PreviewWidget/>
    );
    
    expect(testRenderer).toMatchSnapshot();
});