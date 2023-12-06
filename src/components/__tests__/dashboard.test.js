import {render, screen, cleanup} from '@testing-library/react'

import DashboardPage from '../../pages/DashboardPage';

test('checking if chartData there', ()=>{
    render(<DashboardPage/>)
    const chartElement = screen.getByTestId('chart-1');
    expect(chartElement).toBeInTheDocument();
    expect(chartElement).toHaveTextContent('Start Your Personal Budget')
})