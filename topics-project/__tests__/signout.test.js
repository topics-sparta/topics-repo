/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignOut from '../app/(main)/_components/sign-out';
import * as NavigationModule from 'next/navigation';
import * as ActionModule from '../app/(main)/action';

// Mock modules
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));
jest.mock('../app/(main)/action', () => ({
    signOut: jest.fn(),
}));

describe('Sign out test', () => {
    const pushMock = jest.fn();
    beforeEach(() => {
        NavigationModule.useRouter.mockImplementation(() => ({
            push: pushMock,
        }));
        ActionModule.signOut.mockImplementation(() => Promise.resolve({ message: 'success' }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the sign out button with proper text and icon', () => {
        const { getByText } = render(<SignOut />);
        expect(getByText('Sign out')).toBeInTheDocument();
    });

    it('should display a loader when the sign out process is initiated', async () => {
        const { container, getByText } = render(<SignOut />);
        fireEvent.click(getByText('Sign out'));
    
        const loader = container.querySelector('.lucide-loader-circle');
        expect(loader).toHaveClass('flex animate-spin');
    });
    
    it('should not display the loader initially', () => {
        const { container } = render(<SignOut />);
        const loader = container.querySelector('.lucide-loader-circle');
        expect(loader).toHaveClass('hidden');
    });    

    it('should navigate to the home page after a successful sign out', async () => {
        const { getByText } = render(<SignOut />);
        fireEvent.click(getByText('Sign out'));

        await waitFor(() => {
            expect(pushMock).toHaveBeenCalledWith('/');
        });
    });

    it('should handle sign out failures gracefully', async () => {
        // Adjusting the mock to simulate a failure
        ActionModule.signOut.mockImplementation(() => Promise.resolve({ message: 'error' }));
        const { getByText } = render(<SignOut />);
        fireEvent.click(getByText('Sign out'));

        await waitFor(() => {
            expect(pushMock).not.toHaveBeenCalled();
        });
    });
});
