import {render, screen, cleanup} from '@testing-library/react'
import AboutPage from '../../pages/AboutPage';
// unit test
test('checking AboutPage component rendered', ()=>{
    render(<AboutPage/>)
    const aboutElement = screen.getByTestId('header-1');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveTextContent('Start Your Personal Budget')
})