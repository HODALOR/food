import { MDBDataTableV5 } from "mdbreact";

export default function Tables(props) {
  const { title, data } = props;

  if (title === "accounts") {
    return (
      <>
        {data.length === 0 ? (
          <span>No data found on the system</span>
        ) : (
          <MDBDataTableV5
            hover
            entriesOptions={[5, 10, 25]}
            entries={5}
            pagesAmount={4}
            data={data}
            searchTop
            searchBottom={false}
          />
        )}
      </>
    );
  }

  if (title === "dishes") {
    return (
      <>
        {data.length === 0 ? (
          <span>No data found on the system</span>
        ) : (
          <MDBDataTableV5
            hover
            entriesOptions={[5, 10, 25]}
            entries={5}
            pagesAmount={4}
            data={data}
            searchTop
            searchBottom={false}
          />
        )}
      </>
    );
  }

  if (title === "beverages") {
    return (
      <>
        {data.length === 0 ? (
          <span>No data found on the system</span>
        ) : (
          <MDBDataTableV5
            hover
            entriesOptions={[5, 10, 25]}
            entries={5}
            pagesAmount={4}
            data={data}
            searchTop
            searchBottom={false}
          />
        )}
      </>
    );
  }

  if (title === "drinks") {
    return (
      <>
        {data.length === 0 ? (
          <span>No data found on the system</span>
        ) : (
          <MDBDataTableV5
            hover
            entriesOptions={[5, 10, 25]}
            entries={5}
            pagesAmount={4}
            data={data}
            searchTop
            searchBottom={false}
          />
        )}
      </>
    );
  }

  if (title === "users") {
    return (
      <>
        {data.length === 0 ? (
          <span>No data found on the system</span>
        ) : (
          <MDBDataTableV5
            hover
            entriesOptions={[5, 10, 25]}
            entries={5}
            pagesAmount={4}
            data={data}
            searchTop
            searchBottom={false}
          />
        )}
      </>
    );
  }
}
