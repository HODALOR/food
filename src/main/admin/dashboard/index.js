export default function Dashboard(props) {
  return (
    <div>
      <div className="row">
        <div className="col-xl-3 col-lg-6">
          <div className="card widget-flat">
            <div className="card-body p-0">
              <div className="p-3 pb-0">
                <div className="float-right">
                  <i className="fa fa-file-invoice-dollar text-primary widget-icon" />
                </div>
                <h5 className="text-muted font-weight-normal mt-0">
                  Sales Today
                </h5>
                <h3 className="mt-2"># 3,543</h3>
              </div>
              <div id="sparkline1" />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="col-xl-3 col-lg-6">
          <div className="card widget-flat">
            <div className="card-body p-0">
              <div className="p-3 pb-0">
                <div className="float-right">
                  <i className="fa fa-cash-register text-danger widget-icon" />
                </div>
                <h5 className="text-muted font-weight-normal mt-0">
                  Overall Sales
                </h5>
                <h3 className="mt-2"># 21,287</h3>
              </div>
              <div id="sparkline2" />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="col-xl-3 col-lg-6">
          <div className="card widget-flat">
            <div className="card-body p-0">
              <div className="p-3 pb-0">
                <div className="float-right">
                  <i className="fa fa-money-bill-wave text-primary widget-icon" />
                </div>
                <h5 className="text-muted font-weight-normal mt-0">
                  Income Today
                </h5>
                <h3 className="mt-2">GHC 5,387</h3>
              </div>
              <div id="sparkline3" />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="col-xl-3 col-lg-6">
          <div className="card widget-flat">
            <div className="card-body p-0">
              <div className="p-3 pb-0">
                <div className="float-right">
                  <i className="fa fa-wallet text-danger widget-icon" />
                </div>
                <h5 className="text-muted font-weight-normal mt-0">
                  Overall Income
                </h5>
                <h3 className="mt-2">GHC 74,315</h3>
              </div>
              <div id="sparkline4" />
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
      </div>

      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Monthly Sales Analytics</h4>
              <canvas id="bar" height={350} className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
