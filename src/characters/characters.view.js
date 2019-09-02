import styled from "styled-components";

export default {
    CardWrapper: styled.div`
    width: 100%;    
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    background-color: #ffffff;    
  `,
    Wrapper: styled.div`
    width: 180px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: #eeeeee;
    box-shadow: 6px 6px 3px 1px rgba(0, 0, 255, .2);
    padding: 10px;
    margin: 10px 20px 0px 20px;
    border: 1px solid #aaaaaa;
  `,
  LabelTxt: styled.div`
    color: #FB5308;
    font-size: 11px;
    line-height: 12px;
    font-weight: 600;
    
  `,
  CharacterDescription: styled.div`
    color: #6d6d6d;
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    margin-bottom: 10px;
  `,
  CharacterPicture: styled.div`
    width: 180px;
    height:150px; 
    
    background-size: cover;
    background-position: center center;
    	
    background-image: url(${((props) => {return props.link ? props.link : ''})});
  `,
  PageCtrl: styled.button`
    width: 150px;
    height:30px; 
    margin: 10px;
  `,
  LoadingText: styled.div`
    width: 100%;
    height:100%; 
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 60px;
    position:absolute;
    display: ${((props) => {return props.showLoad ? 'flex' : 'none'})};
    align-content: center;
    align-items:center;
    justify-content: center;
  `,
}