import React from "react";
import "./editemplyeeInfo.css";

const EditEmployeeInfo = ({ close }) => {
    const Submitfrom =(e)=>{
            e.preventDefault();
    }
  return (
    <>
      <section className="edit-employee-info">
        <section className="edit-employeeIinfo-card">
          <section className="edit-employee-form">
            <h2>Edit Employee Information</h2>
            <form onSubmit={Submitfrom}>
              <label>Full Name</label>
              <input type="text" />
              <label>Manager Name</label>
              <input type="text" />
              <label>Phone Number</label>
              <input type="text" />
              <label>Credits</label>
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <label>Status</label>
              <select>
                <option>On</option>
                <option>Off</option>
              </select>
              <label>Position</label>
              <select>
              <option>HR Manager</option>
              <option>Lorem ipsum</option>
              </select>
              <div className="info-employee-btns">
                  <button className="save-info" onClick={close} >Remove</button>
                  <button className="remove-edit-box" type="submit">Save</button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default EditEmployeeInfo;
