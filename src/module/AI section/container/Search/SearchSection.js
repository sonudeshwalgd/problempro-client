import React, { useRef } from "react";
import { styled } from "styled-components";

export default function SearchSection() {

    const grade=useRef()
    const subject=useRef()
    const description=useRef()
    const answerKey=useRef()
    const responseTypeA=useRef()
    const responseTypeB=useRef()
    const responseTypeC=useRef()

    const handlerGenerator=()=>{
        const payload="class "+grade.current.value+" subject "+subject.current.value+ " , "+description.current.value+ (responseTypeA.current.checked ? " question of free response ":"" )+ (responseTypeB.current.checcked ? " question of MCQ type ":"") +(responseTypeC.current.checked ? " question of true / false type":"") +(answerKey.current.checked ? " and give answer key too ":"")  
        
        console.log(payload)
        
    }

  return (
    <>
      <Wrapper>
        <div className="header">
          <h3>Enter Text</h3>
          <button className="primary-btn" >Upload PDF</button>
        </div>
        <div className="wrapper">
          <div className="input-label-wrapper">
            <label>Grade</label>
            <div className="input-wrapper">
              <input type="text" placeholder="Enter Grade" ref={grade}/>
            </div>
          </div>
          <div className="input-label-wrapper">
            <label>Subject</label>
            <div className="input-wrapper">
              <input type="text" placeholder="Enter Subject" ref={subject} />
            </div>
          </div>
          <div className="input-label-wrapper">
            <label>Lesson Description</label>
            <div className="input-wrapper">
              <input type="email" placeholder="Enter Description"  ref={description}/>
            </div>
          </div>
          <div className="input-label-wrapper">
            <label>Question Type</label>
            <div className="radio-label-wrapper">
              <div className="radio-wrapper">
                <input id="free" name="responseType" type="radio" value="free" ref={responseTypeA} />
                <label htmlFor="free">Free Response</label>
              </div>
              <div className="radio-wrapper">
                <input id="mcq" name="responseType" type="radio" value="mcq" ref={responseTypeB} />
                <label htmlFor="mcq">Multiple Choice</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="responseType" id="true/false" value="true/false" ref={responseTypeC} />
                <label htmlFor="true/false">True/False</label>
              </div>
            </div>
              <div className="radio-wrapper ans-key">
                <input type="checkbox" value="isAnsKey" name="isAnsKey" id="isAnsKey" ref={answerKey} />
                <label htmlFor="isAnsKey">Do you want a answer key</label>
              </div>
          </div>
        </div>
        <button onClick={handlerGenerator} className="primary-btn">Generate</button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: #dff8fd;
  padding: 20px 10px;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
    position: relative;
    max-width: 500px;
    margin: auto;

    .input-label-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
      label {
        color: black;
      }
      .input-wrapper {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 8px;
        border-radius: 10px;
        border: 4px solid white;
        position: relative;
        background-color: white;

        input {
          border: none;
          outline: none;
          background-color: inherit;
          font-size: 18px;
          width: 100%;
        }
      }
    }
    .radio-label-wrapper {
      background-color: white;
      border-radius: 10px;
    }
    .radio-wrapper {
      display: flex;
      gap: 10px;
      padding: 6px;
    }
    .ans-key{
        padding: 10px 5px 20px 5px;
    }
  }
`;
