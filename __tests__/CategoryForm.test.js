import CategoryForm from "@/components/CategoryForm";
import { render, screen, fireEvent } from '@testing-library/react';

describe("Category Form", ()=> {
    it('renders the parent category select', () => {
        render(<CategoryForm />);
        const parentSelect = screen.getByLabelText(/Select Parent Category:/);
        expect(parentSelect).toBeInTheDocument();
    });
   
    it('should not display sub-categories when no parent category is selected', async () => {
        render(<CategoryForm />);
        
        // Assert that sub-categories are not displayed initially
        expect(screen.queryByText('No Sub Category')).toBeInTheDocument();
        expect(screen.queryByLabelText('Select Sub-Category:')).toBeNull();
        
        // Select the default option ("Select")
        fireEvent.change(screen.getByLabelText(/Select Parent Category:/), { target: { value: '' } });
        
        // Assert that sub-categories are still not displayed
        expect(screen.queryByText('No Sub Category')).toBeInTheDocument();
        expect(screen.queryByLabelText('Select Sub-Category:')).toBeNull();
    });
    
  
})