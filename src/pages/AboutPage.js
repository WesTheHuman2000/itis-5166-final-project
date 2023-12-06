import React from 'react';

function AboutPage() {
  return (
        <div className="container px-4 px-lg-5">
            
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="/images/savings.jpg" alt="..." /></div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light" data-testid='header-1'>Start Your Personal Budget</h1>
                    <p>
                      Do you know where you are spending your money? If you really stop to track it down,
                      you would get surprised! Proper budget management depends on real data... and this
                      app will help you with that!
                    </p>
                    
                </div>
            </div>
           
            <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body"><p className="text-white m-0">What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.</p></div>
            </div>
           
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Tip One</h2>
                            <p className="card-text">People who stick to a financial plan, budgeting every expense, get out of debt faster!
                                                    Also, they to live happier lives... since they expend without guilt or fear... 
                                                    because they know it is all good and accounted for.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Tip Two</h2>
                            <p className="card-text">
                                 Do you know where you are spending your money? If you really stop to track it down,
                                you would get surprised! Proper budget management depends on real data... and this
                                app will help you with that!
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Tip Three</h2>
                            <p className="card-text">
                            People who stick to a financial plan, budgeting every expense, get out of debt faster!
                            Also, they to live happier lives... since they expend without guilt or fear... 
                            because they know it is all good and accounted for.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

  );
}

export default AboutPage;