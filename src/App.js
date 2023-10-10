import jsPDF from "jspdf";
import logo from "./logo.svg";

function App() {
  const downloadPDF = () => {
    const element = document.getElementById("report");
    const pdf = new jsPDF("p", "pt", [612, 792]);

    pdf.html(element, {
      callback: function (pdf) {
        pdf.save("Report");
      },
      width: 612,
      windowWidth: 810,
    });
  };
  return (
    <>
      <button onClick={() => downloadPDF()}>Download PDF</button>
      <div id="report">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <div
              class="party-bill-heading"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "48rem",
                marginTop: "24px",
              }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=stock.register.godown.stock.record.shop.stock.ledger&hl=en-IN"
                target="_blank"
                style={{
                  fontWeight: "700",
                  color: "#1404fd",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Powered by Stock Register
              </a>
            </div>
            <div
              class="party-bill-heading"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "48rem",
                marginTop: "80px",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1404fd",
                }}
              >
                Morano
              </span>
              <span style={{ fontSize: "16px" }}>Party Balance Summary</span>
            </div>
            <div
              style={{
                backgroundColor: "#1602FF",
                width: "48rem",
                height: "0.3rem",
                marginBottom: "16px",
                marginTop: "21px",
              }}
            ></div>
            <div
              class="party-bill-heading"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "48rem",
                marginBottom: "91px",
                fontSize: "12px",
              }}
            >
              <span>10 October 2023</span>
            </div>
            <div
              class="receive-pay"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "48rem",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div
                class="receive"
                style={{ width: "50%", border: "1px solid #e9d9d9" }}
              >
                <p
                  style={{
                    marginLeft: "1rem",
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Total Amount to Receive
                </p>
                <p
                  style={{
                    color: "#42c742",
                    fontSize: "22px",
                    marginLeft: "1rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Rs . 2007.4
                </p>
              </div>
              <div
                class="pay"
                style={{ width: "50%", border: "1px solid #e9d9d9" }}
              >
                <p
                  style={{
                    marginLeft: "1rem",
                    fontWeight: "bold",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Total Amount to Pay
                </p>
                <p
                  style={{
                    color: "#ff0000",
                    fontSize: "22px",
                    marginLeft: "1rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Rs . 275
                </p>
              </div>
            </div>
            <div
              class="party-bill-heading"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "48rem",
                marginTop: "40px",
                marginBottom: "1.5rem",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              <div class="">Number of parties: 30 (All)</div>
            </div>
            <table
              style={{
                fontSize: "12px",
                display: "flex",
                flexDirection: "column",
                maxWidth: "48rem",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <thead style={{ width: "100%" }}>
                <tr style={{ display: "flex", backgroundColor: "#f7f7ff" }}>
                  <th
                    style={{
                      paddingLeft: "0.8rem",
                      fontSize: "13px",
                      minHeight: "35px",
                      width: "16rem",
                      border: "1px solid #e9d9d9",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      paddingLeft: "0.8rem",
                      fontSize: "13px",
                      minHeight: "35px",
                      width: "16rem",
                      border: "1px solid #e9d9d9",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    Phone No.
                  </th>
                  <th
                    style={{
                      paddingLeft: "0.8rem",
                      fontSize: "13px",
                      minHeight: "35px",
                      width: "16rem",
                      border: "1px solid #e9d9d9",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody style={{ marginBottom: "2rem", width: "100%" }}>
                <tr style={{ display: "flex" }}>
                  <td
                    style={{
                      paddingLeft: "0.8rem",
                      fontSize: "13px",
                      minHeight: "35px",
                      width: "16rem",
                      border: "1px solid #e9d9d9",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    10500-Best Bay
                  </td>
                  <td
                    style={{
                      paddingLeft: "0.8rem",
                      fontSize: "13px",
                      minHeight: "35px",
                      width: "16rem",
                      border: "1px solid #e9d9d9",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    9562725333
                  </td>
                  <td
                    style={{
                      paddingLeft: "0.8rem",
                      fontSize: "13px",
                      minHeight: "35px",
                      width: "16rem",
                      border: "1px solid #e9d9d9",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    Rs. 0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
