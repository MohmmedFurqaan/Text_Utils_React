import Button from "./Button";

export default function TextForm({ heading }) {
  return (
    <>
      <div className="container pb-3 my-4">
        <label htmlFor="myBox" className="form-label">
          {heading}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="9"
        ></textarea>
      </div>
      <div className="container">
        <Button content={"CAPITALIZE"} />
      </div>
      
    </>
  );
}
