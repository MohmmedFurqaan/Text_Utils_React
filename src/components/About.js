

export default function About({ mode }) {
  const myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "rgb(17 18 20)" : "white",
  };

  return (
    <>
      <div className="container my-4" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Smart Text Transformation with TextUtils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                  <strong>Introduction</strong>
                  <br />
                  TextUtils is a simple yet powerful text manipulation tool
                  built using React. It allows users to quickly transform and
                  analyze text directly in the browser. Whether you are a
                  student, developer, or content writer, TextUtils helps you
                  save time by performing common text operations instantly.
                  <br />
                  <br />
                  <strong>Key Features</strong>
                  <br />
                  One of the main features of TextUtils is text case conversion.
                  Users can easily convert their text into uppercase or
                  lowercase with a single click. The app intelligently checks if
                  the input field is empty and displays a warning message if
                  there is no text to convert, ensuring a smooth user
                  experience.
                  <br />
                  <br />
                  <strong>User-Friendly Alerts</strong>
                  <br />
                  TextUtils provides real-time feedback using alert messages.
                  Whenever text is successfully converted, the app displays a
                  success alert. If the user tries to perform an action without
                  entering text, a warning alert appears. This makes the tool
                  intuitive and beginner-friendly.
                  <br />
                  <br />
                  <strong>Conclusion</strong>
                  <br />
                  With its clean interface and responsive behavior, TextUtils
                  offers an efficient way to modify text quickly. The uppercase
                  and lowercase conversion features are perfect for formatting
                  content instantly without relying on external tools.
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Extract Emails and Clear Text Easily with TextUtils
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Introduction</strong>
                <br />
                TextUtils is more than just a text formatter—it also helps users
                extract useful information from text. One of its standout
                features is the ability to find and extract email addresses
                directly from any paragraph.
                <br />
                <br />
                <strong>Email Extraction Feature</strong>
                <br />
                Using a regular expression, TextUtils scans the input text and
                identifies valid email addresses. When the “Extract Gmail ID”
                button is clicked, the app first checks whether text is present.
                If an email is found, it displays the extracted email(s). If no
                email exists, the user is informed instantly. This feature is
                especially useful for developers, recruiters, and students who
                frequently work with text data.
                <br />
                <br />
                <strong>Clear Text Instantly</strong>
                <br />
                TextUtils also includes a Clear button that instantly removes
                all text from the textarea. This helps users reset their input
                area without manually deleting content.
                <br />
                <br />
                <strong>Conclusion</strong>
                <br />
                By combining email extraction and quick text clearing, TextUtils
                becomes a practical utility tool for everyday tasks. These
                features make it efficient for handling raw text and extracting
                important details effortlessly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Extract Emails and Clear Text Easily with TextUtils
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Introduction</strong>
                <br />
                TextUtils also provides powerful text analysis features that
                help users understand their content better. Along with this, the
                application offers a built-in dark myStyle for a comfortable
                reading experience.
                <br />
                <br />
                <strong>Text Summary & Analysis</strong>
                <br />
                As users type or paste text into the input box, TextUtils
                instantly calculates the total number of words, characters, and
                estimated reading time. This is especially useful for writers,
                students, and bloggers who need to manage content length and
                readability.
                <br />
                <br />
                <strong>Live Preview</strong>
                <br />
                The preview section allows users to see their final text output
                in real time. If no text is entered, the app clearly displays a
                helpful message, ensuring clarity and ease of use.
                <br />
                <br />
                <strong>Dark myStyle Support</strong>
                <br />
                To improve accessibility and reduce eye strain, TextUtils
                includes a dark myStyle toggle. Users can switch between light and
                dark themes instantly, making the app comfortable to use in any
                lighting condition.
                <br />
                <br />
                <strong>Conclusion</strong>
                <br />
                With text analysis, live preview, and dark myStyle support,
                TextUtils becomes a complete and modern text utility application
                designed for both productivity and user comfort.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
