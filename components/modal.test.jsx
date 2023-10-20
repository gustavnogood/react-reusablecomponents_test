import React from 'react';
import { render, screen, fireEvent, } from '@testing-library/react';
import { vi, it ,getByText} from 'vitest';

import { Modal } from './modal.jsx';

/**
* @vitest-environment jsdom
*/


it ('renders without crashing', () => {
  render(<Modal onClose={() => {}} />);
});

